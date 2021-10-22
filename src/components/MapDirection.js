import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZ2FyMjA4MiIsImEiOiJja3YxOTV6MjgwNjQ2MnZtb3lqdzJlN21jIn0.y_0JmQnpCVicYJzGdNUogQ';


const MapDirection = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [91.832630, 22.330370],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;