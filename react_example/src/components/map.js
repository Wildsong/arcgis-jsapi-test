import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars
import Clock from './clock'  // eslint-disable-line no-unused-vars

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

    return (
        <>
            <Clock/>
            width {winWid} x height {winHgt}
            <section className="map-section" style={winHgt>minHgt?{height:winHgt-200}:{}}>
                <div className="overview">
                    overview map
                </div>
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
