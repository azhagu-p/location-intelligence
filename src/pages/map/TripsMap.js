import './Map.css';
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { mainListItems, secondaryListItems } from '../../components/listitem';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRmYWZhIiwiYSI6ImNsYzdrZ2Y1dzFqZHYzdnBna3o3Z3FzZ2EifQ.s9Msz-6bOt4zfrbnuJmlcA';

const Map = () => {
    const mapContainerRef = useRef("map-container");
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: "mapbox://styles/mapbox/dark-v10",
            center: [30.9876, 39.7405],
            zoom: 3.8
        });

        // add navigation control (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

        map.on('load', () => {
            map.addSource('national-park', {
                'type': 'geojson',
                'data': "https://python-allpings.herokuapp.com/companies"
            });

            map.addLayer({
                'id': 'park-boundary',
                'type': 'fill',
                'source': 'national-park',
                'paint': {
                    'fill-color': '#888888',
                    'fill-opacity': 0.4
                },
                'filter': ['==', '$type', 'Polygon']
            });

            map.addLayer({
                'id': 'park-volcanoes',
                'type': 'circle',
                'source': 'national-park',
                'paint': {
                    'circle-radius': 6,
                    'circle-color': '#B42222'
                },
                'filter': ['==', '$type', 'Point']
            });
        });

        // clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box sx={{ display: 'flex', background: '#010412' }}>
            <List component="nav" sx={{ background: '#010412' }} >
                {mainListItems}
                <Divider sx={{ mt: 40 }} />
                {secondaryListItems}
            </List>
            <Box>
                <div className="map-container" ref={mapContainerRef} />
            </Box>
        </Box>
    );
};

export default Map;
