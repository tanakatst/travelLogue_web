import React from 'react';
import NavbarLayout from '../src/components/Navigation/NavbarLayout';
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MakePlanMap from '../src/components/pagesComponent/travel_plan/makePlanComponent';

// google map のapiキー


const MakePlan = () => {
    // google map表示設定
    return(
    <>
        <NavbarLayout>
            <MakePlanMap/>
        </NavbarLayout>
    </>


    )
}

export default MakePlan;
