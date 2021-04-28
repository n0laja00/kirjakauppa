import React, { useEffect, useState } from 'react'
import SeeOrders from '../OrderComponents/SeeOrders'


const OrderView = () => {
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