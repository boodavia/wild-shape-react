import React from 'react';
import BeastItem from './BeastItem';

const BeastHeader = (props) => {
    const filteredRes = props.data.beasts.filter(beast => beast.cr === props.cr);
    return (
        <div className="cr-group" data-cr="val+'">
            <div className="cr-header">
                <h2>CR {props.cr}</h2>
                <span></span>
            </div>
            <ul>
                {filteredRes.map((item, i) => 
                    <BeastItem 
                        name={item.name} 
                        key={'beast_'+i} 
                        fly={item.fly}
                        swim={item.swim} 
                        burrow={item.burrow} 
                        climb={item.climb} />
                )}
            </ul>
        </div>
    )
} 

export default BeastHeader;