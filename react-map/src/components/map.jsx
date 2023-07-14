import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import WebMap from "@arcgis/core/WebMap"
import Basemap from "@arcgis/core/Basemap"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import {ToggleButton} from 'react-bootstrap'

const CCMap = (props) => {
    const [basemapGalleryVisible, setBasemapGalleryVisible] = useState(false);
    const webmap = new WebMap({
        portalItem: {
            id: props.mapId
        }
    });
    const basemapGallery = new BasemapGallery({
        visible: true,
    });

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
        basemapGallery.view = view;   
//        basemapGallery.visible = basemapGalleryVisible;
        view.ui.add(basemapGallery), {
            position: "top-right",
        }
    }, [basemapGalleryVisible]);

    return (
        <>
            webmap id = {props.mapId} <br />
            <div id="viewDiv"></div>
            <ToggleButton 
                type="checkbox"
                value={basemapGalleryVisible}
                onChange={(e)=>setBasemapGalleryVisible(e.currentTarget.value)}
            >
                Basemaps
            </ToggleButton>
        </>
    )
}
export default CCMap;
