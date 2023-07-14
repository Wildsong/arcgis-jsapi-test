import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars
import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import {api_key, map_id, portalUrl} from './secrets'

const MapPage = () => {
    const minHgt = 400;
    const [winWid, setwinWid] = useState(window.innerWidth);
    const [winHgt, setwinHgt] = useState(window.innerHeight);

    useEffect(() => {
        const listener = () => {
            setwinWid(window.innerWidth);
            setwinHgt(window.innerHeight);
        }
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);

    esriConfig.apiKey = api_key;
    const map = new Map({ basemap: 'topo-vector' });
    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-123.835, 46.17], // Longitude, latitude
        zoom: 10, // Zoom level
        constraints: {
            rotationEnabled: false
        }
    });


    return (
        <>
            api = {api_key} <br />
            map id = {map_id}
            <Clock/>
            width {winWid} x height {winHgt}
            <section className="map-section" style={winHgt>minHgt?{height:winHgt-200}:{}}>
                <div id="viewDiv">The map will load here if things are working.</div>
            </section>

            <section className="table-section">
                <div className="flx f1">item1</div>
                <div className="flx f2">item2</div>
                <div className="flx f3">item3</div>
                <div className="flx f4">item4</div>
            </section>
        </>
    )
}
export default MapPage;
