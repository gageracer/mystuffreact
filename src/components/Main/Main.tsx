import React, { Component } from 'react';
import './Main.css';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div id="main">
            <Container/>
            <Link id="menu-edit-create" to="/create">+</Link>
            </div>
        );
    }
}

export default Main;