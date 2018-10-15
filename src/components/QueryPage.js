import React from 'react';
import Delete from '@material-ui/icons/Delete';
import Kitchen from '@material-ui/icons/Kitchen';

import './QueryPage.scss';

const QueryPage = props =>
    <main className="QueryPage">
        <section className="Selected">
            <header className="Selected-Header">
                <div className="Selected-Label">
                    <Delete className="Selected-Icon" />
                    <h1 className="Selected-Title">Pot</h1>
                </div>
                <button className="ToRecipesButton">Recipes -></button>
            </header>
            <div className="Selected-Options">

            </div>
        </section>
        <section className="Selector">
            <header className="Selector-Header">
                <div className="Selector-Label">
                    <Kitchen className="Selector-Icon" />
                    <h1 className="Selector-Title">Pantry</h1>
                </div>
                <input className="Selector-Filter" type="text" placeholder="Filter"/>
            </header>
            <div className="Selector-Options">

            </div>
        </section>
    </main>

export default QueryPage;