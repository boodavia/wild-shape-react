import React, { Component } from 'react';

import BeastHeader from './BeastHeader';
import BeastData from './BeastData';

import icons from './styles/fonts/icons.svg';

class App extends Component {

	state = {
		beastData: BeastData,
		druidLevel: 4,
		moonDruid: true,
		crList: ['0', '1/8', '1/4', '1/2', '1'],
		filteredBeasts: {}
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
				this.setState({ crList: ['0', '1/8', '1/4', '1/2', '1'] });
			} else {
				let preList = ['0', '1/8', '1/4', '1/2', '1'];
				for (let i = 6; i <= level; i++) {
					if (i % 3 === 0) {
						let newNum = i / 3;
						preList.push(newNum.toString());
					}
				}
				this.setState({ crList: preList });
			}
		} else {
			if (level >= 2 && level < 4) {
				this.setState({ crList: ['0', '1/8', '1/4'] });
			} else if (level >= 4 && level < 8) {
				this.setState({ crList: ['0', '1/8', '1/4', '1/2'] });
			} else {
				this.setState({ crList: ['0', '1/8', '1/4', '1/2', '1'] });
			}
		}
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

	render() {
		const crHeaders = (
			<div id='monList'>
				{this.state.crList.map((item, i) => 
					<BeastHeader cr={item} key={i} data={this.state.beastData} />
				)}
			</div>
		)
		return (
			<section id="beastMain">
				<header>
					<div>
						<svg onClick={() => this.buildList('1')}><use xlinkHref={icons + '#icon-paw'} /></svg>
						Wild Shape
					</div>
					<nav>
						<h1>
							Druid Level
							<DruidLevel level={this.state.druidLevel} change={(event) => this.changeLevel(event)} />
						</h1>
						<svg id="moonCircle" className={this.state.moonDruid ? 'active' : null} onClick={() => this.isMoonDruid()}><use xlinkHref={icons + '#icon-moon'} /></svg>
					</nav>
				</header>
				{crHeaders}
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
