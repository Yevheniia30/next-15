import React from 'react';

const Locations = async ({params}: {params: Promise<{id: number}>}) => {
    const {id} = await params
    return (
        <div>
            Locations of product {id}
        </div>
    );
};

export default Locations;