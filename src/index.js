import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Two from './Two';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
                    <main>
                        <NavLink to='/' exact>Home</NavLink>
                        <NavLink to='/two'>Two</NavLink>
                        <Route path='/' exact component={App} />
                        <Route path='/two/:page?' component={Two} />
                    </main>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
