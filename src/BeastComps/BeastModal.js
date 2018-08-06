import React from 'react';

const BeastModal = (props) => {
    return (
        <section id="beastModal">
            <header><h1>{props.name}</h1></header>
            <div class="beast-body">
                text
            </div>
            <footer>
                <button id="modalClose" type="button" onClick={props.click}>Close</button>
            </footer>
        </section>
    )
}