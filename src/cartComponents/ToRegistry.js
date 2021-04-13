import React from 'react';
import { Link } from 'react-router-dom'
import Registry from '../registryComponents/Registry.js';

const ToRegistry = () => {
    return ( 
        
        <div className="col-12 mb-5 mt-3">
                <Link className="link varjo" to="/registryComponents/Registry">
                    <a className="btn1 float-end">Kassalle</a>
                </Link>
            </div>
        
   );
}

export default ToRegistry;