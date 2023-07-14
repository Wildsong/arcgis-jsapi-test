import React from 'react'  // eslint-disable-line no-unused-vars
import {Button} from 'react-bootstrap'
import Clock from './clock'  // eslint-disable-line no-unused-vars
import Counter from './counter'  // eslint-disable-line no-unused-vars
//import PrintButton from './print/printModal'  // eslint-disable-line no-unused-vars

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <h3><Clock/></h3>
            <div id="picture"></div>
            <Counter />
            <h4>Samples of bootstrap buttons</h4>
            <Button variant="primary">primary</Button>{' '}
            <Button variant="secondary">secondary</Button>{' '}
            <Button variant="success">success</Button>{' '}
            <Button variant="info">info</Button>{' '}
            <Button variant="warning">warning</Button>{' '}
            <Button variant="danger">danger</Button>{' '}
            <Button variant="link">link</Button>
        </>
    )
}
export default Home;
