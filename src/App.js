import React, { Component } from 'react';

import BeastList from './BeastComps/BeastList';
import BeastData from './BeastComps/BeastData';

import icons from './styles/fonts/icons.svg';

class App extends Component {

  state = {
    beastData: BeastData,
    druidLevel: 4,
    moonDruid: true,
    crList: ['0','1/8','1/4','1/2','1']
  }

  calcCrList = (event) => {
    let level = event.target.value
    console.log(level)
    this.setState({druidLevel: level});
    if ( this.state.moonDruid === true ){
      if ( level >=2 && level < 6 ) {
        this.setState({crList : ['0','1/8','1/4','1/2','1']});
      } else {
        let preList = ['0','1/8','1/4','1/2','1'];
        for (let i = 6; i <= level; i++) {
          if (i % 3 === 0 ) {
            let newNum = i/3;
            preList.push(newNum.toString());
          }
        }
        this.setState({crList: preList});
      }
    } else {
      if ( level >=2 && level < 4 ) {
        this.setState({crList : ['0','1/8','1/4']});
      } else if ( level >=4 && level < 8 ) {
        this.setState({crList : ['0','1/8','1/4','1/2']});
      } else {
        this.setState({crList : ['0','1/8','1/4','1/2','1']})
      }
    }
    //console.log(this.state.crList)
  }
  render() {
    return (
      <section id="beastMain">
        <header>
          <div>
            <svg><use xlinkHref={icons +'#icon-paw'} /></svg>
            Wild Shape
          </div>
          <nav>
            <h1>
              Druid Level
              <DruidLevel level={this.state.druidLevel} change={(event)=> this.calcCrList(event)} />
            </h1>
            <svg id="moonCircle" className={this.state.moonDruid ? null : 'active'}><use xlinkHref={icons +'#icon-moon'}  /></svg>
          </nav>
        </header>
        <BeastList />
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
