import React from 'react';

const LocationDetails = async ({params}: { params: Promise<{ locationId: number }> }) => {
    const {locationId} = await params
    return (
        <div>
            Location {locationId}
        </div>
    );
};

export default LocationDetails;