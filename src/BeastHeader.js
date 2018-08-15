import React from 'react';
import BeastItem from './BeastItem';

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

export default BeastHeader;