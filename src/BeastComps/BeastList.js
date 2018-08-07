import React from 'react';

const BeastHeader = (props) => {
    return (
        <div class="cr-group" data-cr="val+'">
            <div class="cr-header">
                <h2>CR {props.cr}</h2>
                <span></span>
            </div>
            <ul><BeastListItem /></ul>
        </div>
    )
} 

const BeastListItem = (props) => {
    return (
        <li>wenis</li>
    )
} 

export default BeastHeader;