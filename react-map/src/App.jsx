import React, {useEffect} from 'react'  // eslint-disable-line no-unused-vars
import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import {api_key} from '../secrets'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
    // Parcel will preprocess this image file and bundle only the thumbnail.
    let turtleUrl = (new URL('../assets/babyturtle.png?width=256', import.meta.url)).toString();
    esriConfig.apiKey = api_key;
    const map = new Map({ basemap: 'topo-vector' });

    const loadMap = () => {
        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-123.835, 46.17], // Clatsop County, Oregon
            zoom: 10,
            constraints: {
                rotationEnabled: false
            }
        });    
    }
    useEffect(() => {
        loadMap(); // has to happen after viewDiv is rendered
    }, []);

    return (
        <>
        <img src={turtleUrl}/>
        <h1>Test of ArcGIS SDK</h1>
        API key = {api_key} <br />
        <div id="viewDiv"></div>
        </>
    )
}
export default App;
