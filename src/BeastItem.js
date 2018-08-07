import React from 'react';
import icons from './styles/fonts/icons.svg';

const BeastItem = (props) => {
    return (
        <li className='beast'>
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

export default BeastItem;