"use client"
import React, { useEffect, version} from 'react';
import { Loader } from '@googlemaps/js-api-loader';



export default function Map() {
  
    const mapRef = React.useRef(null);

    useEffect (() => {
        const initMap = async () => {

            const loader = new Loader(
                "My_API_KEY", 'weekly'
            );
            const {Map} = await loader.importLibrary('maps');
            const position = {
                lat: 50.434824019460926, 
                long: 30.50181408100176
            }
        }
        initMap();
    });

    return(
       <h1>Google map</h1>
    )
    
  
  
    }

