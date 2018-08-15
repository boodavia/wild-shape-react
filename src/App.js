import React, { Component } from 'react';

//import BeastHeader from './BeastHeader';
import BeastData from './BeastData';

import icons from './styles/fonts/icons.svg';

class App extends Component {

	state = {
		beastData: BeastData,
		druidLevel: 8,
		moonDruid: true,
		crList: ['2', '1', '1/2', '1/4', '1/8', '0'],
		filteredBeasts: {},
		levelOpen: 0,
		modalData: null
	}

	//Is the player a Moon Druid
	isMoonDruid = () => {
		this.setState({ moonDruid: !this.state.moonDruid }, () => {
			this.calcCrList(this.state.druidLevel);
		})
	}

	//Change level handler
	changeLevel = (event) => {
		let level = event.target.value
		this.setState({ druidLevel: level }, () => {
			this.calcCrList(level);
		});
	}

	//Calculate the CR list of beast
	calcCrList = (level) => {
		if (this.state.moonDruid === true) {
			if (level >= 2 && level < 6) {
				this.setState({ crList: ['1', '1/2', '1/4', '1/8', '0'] });
			} else {
				let preList = ['1', '1/2', '1/4', '1/8', '0'];
				for (let i = 6; i <= level; i++) {
					if (i % 3 === 0) {
						let newNum = i / 3;
						preList.unshift(newNum.toString());
					}
				}
				this.setState({ crList: preList });
			}
		} else {
			if (level >= 2 && level < 4) {
				this.setState({ crList: ['1/4', '1/8', '0'] });
			} else if (level >= 4 && level < 8) {
				this.setState({ crList: ['1/2', '1/4', '1/8', '0'] });
			} else {
				this.setState({ crList: ['1', '1/2', '1/4', '1/8', '0'] });
			}
		}
	}

	changeCr= (index) => {
		this.setState({ levelOpen: index });
	}

	buildList = (cr) => {
		let beastList = null;
		if (this.state.druidLevel >= 2 && this.state.druidLevel < 4) {
			beastList = this.state.beastData.beasts.filter(beast => beast.cr >= cr && beast.fly === undefined && beast.swim === undefined);
		} else if (this.state.druidLevel >= 4 && this.state.druidLevel < 8) {
			beastList = this.state.beastData.beasts.filter(beast => beast.cr >= cr && beast.fly === undefined);
		} else {
			beastList = this.state.beastData.beasts.filter(beast => beast.cr >= cr);
		}
		this.setState({ filteredBeasts: beastList })
	};

	showModal = (data) => {
		this.setState({ modalData: data })
	};

	render() {
		

		const BeastHeader = (props) => {
			const filteredRes = props.data.beasts.filter(beast => beast.cr === props.cr);
			const filteredLen = filteredRes.length;
		
			return (
				<div className="cr-group" key={'wenis'+(props.num)}>
					<div className={"cr-header" + (props.levelOpen === props.num ? ' open' : '')} onClick={props.click}>
						<h2>CR {props.cr}</h2>
						<span>{filteredLen}</span>
					</div>
					<ul>
						{filteredRes.map((item, index) => 
							<BeastItem 
								name={item.name} 
								key={'beast_'+ item.cr+ '_' +index} 
								fly={item.fly}
								swim={item.swim} 
								burrow={item.burrow} 
								climb={item.climb}
								data={item}
							/>
						)}
					</ul>
				</div>
			)
		}
		const crHeaders = (
			<div id='monList'>
				{this.state.crList.map((item, index) => 
					<BeastHeader cr={item} key={index} num={index} data={this.state.beastData} levelOpen={this.state.levelOpen} click={() => this.changeCr(index)} />
				)}
			</div>
		)

		const BeastItem = (props) => {
			return (
				<li className='beast' key="{props.id}" onClick={()=>this.showModal(props.data)}>
					<h3>{props.name}</h3>
					<div>
						{props.swim ? <svg><use xlinkHref={icons +'#icon-swim'} /></svg> : null}
						{props.fly ? <svg><use xlinkHref={icons +'#icon-fly'} /></svg> : null}
						{props.climb ? <svg><use xlinkHref={icons +'#icon-climb'} /></svg> : null}
						{props.burrow ? <svg><use xlinkHref={icons +'#icon-burrow'} /></svg> : null}
					</div>
				</li>
			)
		} 

		const BeastModal = (props) => {
			return (
				<section id="beastModal">
					<header>
						<h1>{props.data.name}</h1>
					</header>
					<div className="beast-body">
						<h2>{props.data.size} {props.data.type} {props.data.alignment}</h2>
						<div className="top-stats">
							<p><span>Armor Class</span> {props.data.ac}</p>
							<p><span>Hit Points</span> {props.data.hp}</p>
							<p>
								<span>Speed</span> 
								{props.data.speed}
								{props.data.swim ? ', Swim '+props.data.swim : null}
								{props.data.fly ? ', Fly '+props.data.fly : null}
								{props.data.burrow ? ', Burrow '+props.data.burrow : null}
								{props.data.climb ? ', Climb '+props.data.climb : null}
							</p>
						</div>
						<ul>
							<li>STR<span> {props.data.strength} ({Math.floor((props.data.strength-10)/2)})</span></li>
							<li>DEX<span> {props.data.dexterity} ({Math.floor((props.data.dexterity-10)/2)})</span></li>
							<li>CON<span> {props.data.constitution} ({Math.floor((props.data.constitution-10)/2)})</span></li>
							<li>WIS<span> {props.data.wisdom} ({Math.floor((props.data.wisdom-10)/2)})</span></li>
							<li>INT<span> {props.data.intelligence} ({Math.floor((props.data.intelligence-10)/2)})</span></li>
							<li>CHA<span> {props.data.charisma} ({Math.floor((props.data.charisma-10)/2)})</span></li>
						</ul>
						<div className="mid-stats">
							<h4>Challenge: <span> {props.data.cr} </span></h4>
						</div>
						{props.data.trait.map((trait, index) => 
							<h4>{trait.traitName} <span>{trait.text}<br/><br/></span></h4>
						)}
						<h3>Actions</h3>
						<h4>Gore: <span>Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.<br/><br/></span></h4>
						<h4>Stomp: <span>Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage<br/><br/></span></h4>
					</div>
					<footer>
						<button id="modalClose" type="button" onClick={props.click}>Close</button>
					</footer>
				</section>
			)
		}
		
		return (
			<section id="beastMain">
				<header>
					<div>
						{/* <svg onClick={() => this.buildList('1')}><use xlinkHref={icons + '#icon-paw'} /></svg> */}
						{/* Wild Shape */}
						PDF Generator
					</div>
					<nav>
						<h1>
							{/* Druid Level */}
							Render Level
							<DruidLevel level={this.state.druidLevel} change={(event) => this.changeLevel(event)} />
						</h1>
						<svg id="moonCircle" className={this.state.moonDruid ? 'active' : null} onClick={() => this.isMoonDruid()}><use xlinkHref={icons + '#icon-moon'} /></svg>
					</nav>
				</header>
				{crHeaders}
				{console.log(this.state.modalData)}
				{this.state.modalData ? <BeastModal data={this.state.modalData}	/> : null}

			</section>
		);
	}
}

const DruidLevel = (props) => {
	return (
		<input type="text" id="currentLvl" value={props.level} onChange={props.change} />
	)
}

export default App;
