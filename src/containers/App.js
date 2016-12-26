import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let App = ({ dispatch, game }) => (
    <div className="container">
        <Board 
            className="row"
            board={ game.board } 
            onColumnClick={ column => dispatch(takeSpot(column, game.currentPlayer)) }
        />
    </div>
)

App = connect()(App);

export default App;
