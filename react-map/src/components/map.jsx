import React, {useEffect} from 'react'  // eslint-disable-line no-unused-vars
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import WebMap from "@arcgis/core/WebMap"
import Basemap from "@arcgis/core/Basemap"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"

const CCMap = (props) => {
    //const map = new Map({ basemap: 'topo-vector' });

    const webmap = new WebMap({
        portalItem: {
            id: props.mapId
        }
    })

    useEffect(() => {
        const view = new MapView({
            container: "viewDiv",
            map: webmap,
            center: [-123.835, 46.17], // Clatsop County, Oregon
            zoom: 10,
            constraints: {
                rotationEnabled: false
            }
        });
        const basemapGallery = new BasemapGallery({
            view: view
        })    
        view.ui.add(basemapGallery), {
            position: "top-right",
        }
    }, []);

    return (
        <>
        webmap id = {props.mapId} <br />
        <div id="viewDiv"></div>
        </>
    )
}
export default CCMap;
