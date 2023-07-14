import React, {useEffect} from 'react'  // eslint-disable-line no-unused-vars
import { Map } from './components'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
    // Parcel will preprocess this image file and bundle only the thumbnail.
    let turtleUrl = (new URL('../assets/babyturtle.png?width=256', import.meta.url)).toString();

    return (
        <Card>
            <Card.Header>
                <img src={turtleUrl}/>
                <h1>Test of ArcGIS SDK</h1>
            </Card.Header>
            <Card.Body>
                <Map />
            </Card.Body>
        </Card>
    )
}
export default App;
