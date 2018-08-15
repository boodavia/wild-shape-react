import React from 'react';
import icons from './styles/fonts/icons.svg';
import BeastModal from './BeastModal';

const BeastItem = (props) => {
    return (
        <li className='beast' key="{props.id}">
            <h3>{props.name}</h3>
            <div>
                {props.swim ? <svg><use xlinkHref={icons +'#icon-swim'} /></svg> : null}
			    {props.fly ? <svg><use xlinkHref={icons +'#icon-fly'} /></svg> : null}
				{props.climb ? <svg><use xlinkHref={icons +'#icon-climb'} /></svg> : null}
				{props.burrow ? <svg><use xlinkHref={icons +'#icon-burrow'} /></svg> : null}
            </div>
            <BeastModal
                name={props.name} 
                fly={props.fly}
                swim={props.swim} 
                burrow={props.burrow} 
                climb={props.climb}
                size={props.size}
                type={props.type}
                alignment={props.alignment}
                ac={props.ac}
                hp={props.hp}
                speed={props.speed}
                strength={props.strength}
                dexterity={props.dexterity}
                constitution={props.constitution}
                intelligence={props.intelligence}
                wisdom={props.wisdom}
                charisma={props.charisma}
                passive={props.passive}
                cr={props.cr} 
                traits={props.trait}
                actions={props.action}
            />
        </li>
    )
} 

export default BeastItem;