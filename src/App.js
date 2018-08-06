import React, { Component } from 'react';

import BeastList from './BeastComps/BeastList';
import BeastData from './BeastComps/BeastData';


class App extends Component {

  state = {
    beastData: BeastData,
    moonDruid: false,
    druidLevel: 4
  }

  druidLevelChange = (event) => {
    this.setState({druidLevel: event.target.value})
    //More to come
  }

  render() {
    return (
      <section id="beastMain">
        <header>
          <div>
            <svg><use xlinkHref="css/fonts/icons.svg#icon-paw" /></svg>
            Wild Shape
          </div>
          <nav>
            <h1>
              Druid Level
              <DruidLevel level={this.state.druidLevel} change={(event)=> this.druidLevelChange(event)} />
            </h1>
            <svg id="moonCircle" className="active"><use xlinkHref="css/fonts/icons.svg#icon-moon" /></svg>
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
