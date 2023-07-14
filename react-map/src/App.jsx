import React, {useEffect} from 'react'  // eslint-disable-line no-unused-vars
import { Map } from './components'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
    // Parcel will preprocess this image file and bundle only the thumbnail.
    let turtleUrl = (new URL('../assets/babyturtle.png?width=256', import.meta.url)).toString();

    return (
        <>
        <img src={turtleUrl}/>
        <h1>Test of ArcGIS SDK</h1>
        <Map />
        </>
    )
}
export default App;
