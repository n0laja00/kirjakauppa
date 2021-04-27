import React from 'react';
import Loading from '../Loading';

const SeeOrders = () => {
    const [orders, setOrders] = useState([])
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const URL = 'http://localhost/kirjakauppa/haeTilaukset.php/'


    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(
                (result) => {
                    setOrders(result);
                    setIsLoaded(true);
                }, (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            );
    }, []);

    if(!isloaded){
        return <Loading/>
    }else {
        return ( 
            <div>
                <ul>
                    {orders.map(item => (
                        <li>
                            {item.tilausNro}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
}
 
export default SeeOrders;