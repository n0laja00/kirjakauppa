import React, { useEffect, useState } from 'react'
import SeeOrders from '../OrderComponents/SeeOrders'
import { Redirect } from 'react-router';


const OrderView = ({user}) => {

    if (user === null) {
        return <Redirect to="/" />;
    } else if (user.id !== "1" || user.fname !== "Admin" || user.lname !== "käyttäjä") {
        return <Redirect to="/" />;
    }

    return (
        <div className="row mt-3 py-4 d-flex justify-content-center cart-page">
            <div>
                <h1>Tilausnäkymä</h1>
                <SeeOrders/>
            </div>
        </div>
    );
}

export default OrderView;