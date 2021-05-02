import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const SeeOrders = () => {
    const [orders, setEditOrders] = useState([])
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const URL = 'http://localhost/kirjakauppa/haeTilaus.php';
    const URL2 = 'http://localhost/kirjakauppa/';

    const [editItem, setEditItem] = useState(null);
    const [editTilausNro, seteditTilausNro] = useState(null);
    const [editToimitusTila, setEditToimitusTila] = useState('');
    const [editMaksettu, setEditMaksettu] = useState('');

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(
                (results) => {
                    setEditOrders(results);
                    setIsLoaded(true);
                }, (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            );
    }, []);

    function setEditedOstos(tilausNro, toimitusTila) {
        
        setEditItem(tilausNro);
        setEditMaksettu(tilausNro?.maksettu);
        setEditToimitusTila(toimitusTila);
        setEditToimitusTila(tilausNro?.toimitusTila)
      }

    function update(e) {
        e.preventDefault(); 
        let status = 0; 
        fetch (URL2 + 'updateTilaus.php', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            tilausNro: editItem.tilausNro,
            toimitusTila: editToimitusTila,
            maksettu: editMaksettu,
          })
        })
        .then(res => {
          status = parseInt(res.status); 
          return res.json(); 
        })
        .then (
          (res) => {
            if (status === 200) {
              orders[(orders.findIndex(item => item.tilausNro == editItem.tilausNro))].toimitusTila = editToimitusTila;
              orders[(orders.findIndex(item => item.tilausNro == editItem.tilausNro))].maksettu = editMaksettu;
              setEditOrders([...orders]);
    
    
              setEditItem(null); 
              setEditMaksettu('');
              setEditToimitusTila('');
            } else {
              alert(res.error); 
            }
          }, (error) => {
            alert(error); 
          }
        )
      };

      function remove(tilausNro) {
        let status = 0; 
        fetch(URL2 + 'deleteTilaus.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            tilausNro: tilausNro, 
          })
        })
        .then(res => {
          status = parseInt(res.status);
          return res.json();
        })
        .then(
          (res) => {
          if (status === 200) {
            const newListaWithoutRemove = orders.filter((item) => item.tilausNro !==tilausNro);
            setEditOrders(newListaWithoutRemove); 
          } else {
            alert(res.error);
          }
          }, (error) => {
            alert(error);
          }
        )
      };

    if(!isLoaded){
        return <Loading/>
    }else {
        return ( 
            <div className="row">
                <ol  className="table-responsive" >
                    {orders.map(item => (
                    <li key={item.tilausNro} className="mt-1 order_list mb-2">
                      <table className="table-sm col-12 bg_table ">
                        <thead>
                            <tr className="word-break">
                              <th className="word-break" scope="col">
                                Tilausnumero 
                              </th>
                              <th className="word-break" scope="col">
                                Asiakasnumero ja Nimi
                              </th>
                              <th className="word-break" scope="col">
                                Toimitusosoite
                              </th>
                              <th className="word-break" scope="col">
                                Yhteystiedot
                              </th>
                              <th scope="col">
                                Laskutustiedot
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          <tr className="word-break">
                            <th scope="row">
                              {item.tilausNro && item.tilausNro}
                            </th>
                            <td>
                              {item.tilausNro && item.asNro} {item.tilausNro && item.asEtunimi} {item.tilausNro && item.asSukunimi} 
                            </td>
                            <td>
                              {item.tilausNro && item.toimitusOsoite} {item.tilausNro && item.toimitusPostiNro}&nbsp;
                              {item.tilausNro && item.toimitusPostitmp}
                            
                            </td>
                            <td>
                              <p>Puhelinnumero: {item.tilausNro && item.puhNro}</p>
                              <p>Sähköposti: {item.tilausNro && item.email}</p>
                            </td>
                            <td>
                              <p>Maksutapa: {item.tilausNro && item.maksutapa}</p>
                              <p>Maksettu: {editItem?.tilausNro !== item.tilausNro && item.maksettu}</p>
                              <p>Toimituksen Tila: {editItem?.tilausNro !== item.tilausNro && item.toimitusTila}</p>

                              {editItem?.tilausNro === item.tilausNro && 
                              <form onSubmit={update}>
                                <div>
                                  <div>
                                    <label>Maksun Tila:
                                    <input value={editMaksettu} onChange={e => setEditMaksettu(e.target.value)}/>
                                    </label>
                                  </div>
                                  <div>
                                    <label>Toimuksen Tila:
                                      <p>k = käsittelyssä, l = lähetetty, s = saapunut, v = vastaanotettu.</p>
                                      <input value={editToimitusTila} onChange={e => setEditToimitusTila(e.target.value)}/>
                                    </label>
                                  </div>
                                </div>
                                <button className="btn btn-outline-primary btn-sm mt-2">Tallenna</button>
                                <button type="button" className="btn btn-outline-secondary btn-sm mt-2" onClick={() => setEditedOstos(null)}>Keskeytä</button>
                              </form>
                              }&nbsp;
                              {editItem===null &&
                                <a type="button" className="btn btn-warning float-end btn-md" onClick={() => setEditedOstos(item)}>
                                  Muokkaa
                                </a>  
                              } 
                            </td>
                          </tr>
                          <tr>
                            <th className="borderless_table"></th>
                            <th className="borderless_table"></th>
                            <th className="borderless_table"></th>
                            <th className="borderless_table"></th>
                            
                            <th className="borderless_table no_bg_table">
                              <div>
                                {editItem===null &&
                                <a type="button" className="btn btn-danger btn-md float-end" onClick={() => remove(item.tilausNro)} href="#">
                                  Poista
                                </a> 
                                }
                              </div>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    ))}
                </ol>
            </div>
        );
    }
    
}
 
export default SeeOrders;