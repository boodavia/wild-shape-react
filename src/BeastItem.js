import React from 'react';
import icons from './styles/fonts/icons.svg';

const BeastItem = (props) => {
    return (
        <li className='beast'>
            <h3>{props.name}</h3>
            <div>
                <svg><use xlinkHref={icons +'#icon-swim'} /></svg>
			    <svg><use xlinkHref={icons +'#icon-fly'} /></svg>
				<svg><use xlinkHref={icons +'#icon-climb'} /></svg>
				<svg><use xlinkHref={icons +'#icon-burrow'} /></svg>
            </div>
        </li>
    )
} 

export default BeastItem;