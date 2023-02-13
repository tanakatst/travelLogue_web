import React from 'react';
import NavbarLayout from '../../Navigation/NavbarLayout';
import { LoadScript } from '@react-google-maps/api';
import { GoogleMap } from '@react-google-maps/api';
import MakePlanCard from './makePlanComponent/makePlanCard';
import { Box } from '@mui/material';
const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!
const MakePlanMap = () => {
        const defaultLatLng = {
            lat: 35.7022589,
            lng: 139.7744733,
          };

        const containerStyle = {
            width: '1600px',
            height: '900px'
        };

        return (
            <>
                <LoadScript googleMapsApiKey={key}>
                    <Box display='flex' position='relative'>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultLatLng}
                            zoom={8}
                        >
                        </GoogleMap>
                        <MakePlanCard/>
                    </Box>
                </LoadScript>
            </>
    )
}

export default MakePlanMap;
