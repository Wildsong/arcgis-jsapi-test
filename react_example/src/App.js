// App.js react-test
//
import React from 'react'  // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Navbar from './components/navbar' // eslint-disable-line no-unused-vars

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import * as components from './components'

const App = ({page}) => {
    const ActiveComponent = components[page]; // eslint-disable-line no-unused-vars
    return (
        <div>
            <header>
                <h1>arcgis js api test</h1>
                <h2>react-sample</h2>
                <Navbar/>
            </header>
            <main>
                <ActiveComponent/>
            </main>
        </div>
    )
}
App.propTypes = {
    page: PropTypes.string,
}
const mapStateToProps = (state) => ({
    page: state.page,
});
export default connect(mapStateToProps)(App);
