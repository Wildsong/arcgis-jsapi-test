import React, {useEffect} from 'react'  // eslint-disable-line no-unused-vars
import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import {api_key} from '../../secrets'

const CCMap = () => {
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
        API key = {api_key} <br />
        <div id="viewDiv"></div>
        </>
    )
}
export default CCMap;
