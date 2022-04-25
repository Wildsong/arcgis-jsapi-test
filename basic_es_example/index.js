// I started adding these based on what errors
// I got in the debugger but it started to seem
// like an endless march down the wrong path
//
// It's still feeling like a compilation or parcel problem to me
//
//import PortalUser from "@arcgis/core/portal/PortalUser";
//import LayersMixin from "@arcgis/core/support/LayersMixin"
//import TablesMixin from "@arcgis/core/support/TablesMixin"

import esriConfig from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

esriConfig.apiKey = "AAPK4f2a7d98bb2f4d6db77ed3eb677520b2dZBQD02GnYTGaI4PuZIWViG4UAXSl0kCX6vvTCwV96M4h4DH3QX1mwnhsQisqt6H";
const map = new WebMap({ portalItem: { id: "19cac7714c60443db6ce6033dcaba7c8" }})

const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-123.835, 46.17], // Longitude, latitude
    zoom: 10 // Zoom level
});
