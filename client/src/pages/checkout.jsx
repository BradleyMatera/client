import React from 'react';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
    const token = "your_jwt_token"; // Replace with your JWT token
    const publicOrderId = "your_public_order_id"; // Replace with your public order ID
    const applicationState = {}; // Replace with your application state
    const storeIdentifier = "your_store_identifier"; // Replace with your store identifier
    const initialData = {}; // Replace with your initial data

    return (
        <div>
            <Checkout
                token={token}
                publicOrderId={publicOrderId}
                applicationState={applicationState}
                storeIdentifier={storeIdentifier}
                initialData={initialData}
            />
        </div>
    );
};

export default CheckoutPage;