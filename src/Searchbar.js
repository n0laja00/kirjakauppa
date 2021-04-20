import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBar() {

    // Ehdotusten listauksen kokeilu koodia:

    const [books, setBooks] = useState([]);
    const URL3 = 'http://localhost/kirjakauppa/haku2.php/';

    useEffect(() => {
        fetch(URL3)
            .then(response => response.json())
            .then(
                (result) => {
                    setBooks(result);
                }, (error) => {
                    alert(error);
                }
            )
    }, [])

    // Autocomplete koodi:

    const [myOptions, setMyOptions] = useState([]);

    
    
    function getDataFromAPI() {
        fetch('http://localhost/kirjakauppa/haku2.php').then((response) => {
        return response.json()
        }).then((res) => {

        for (let i = 0; i < res.length; i++) {
            myOptions.push(res[i].kirjaNimi)
        }
        var newArray = [];
        var newArray = myOptions.filter(function(elem, pos) {
                return myOptions.indexOf(elem) == pos;
        });
        setMyOptions(newArray)
        })
    }

    return (
        <>
            <form action="/AllBooks" method="get">

                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>

                <div className="row">
                    <div className="input-group d-flex justify-content-center">
                            <div className="form-outline col-md-6 col-9">
                                {/* <input className="form-control input-lg" 
                                    type="text" 
                                    id="header-search"
                                    placeholder="Hae toivomaasi kirjaa..."
                                    name="s"
                                    /> */}

                                <Autocomplete
                                    freeSolo
                                    autoSelect
                                    autoComplete
                                    autoHighlight
                                    options={myOptions}
                                    renderInput={(params) => (
                                        <TextField {...params} 
                                            type="text" 
                                            id="header-search"
                                            label="Hae toivomaasi kirjaa..."
                                            name="s"
                                            onChange={getDataFromAPI}/>
                                    )}
                                />
                            </div>
                            <button className="loginButton col-2">
                                <i className="fa fa-search"></i>
                            </button>
                    </div>
                </div>
            </form>
            {/* <ul className="col-11">
                {books.map((post) => (
                    <li key={post.kirjaNro}>{post.kirjaNimi}</li>
                ))}
            </ul>

            <Autocomplete
                style={{ width: 500 }}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (
                    <TextField {...params}
                    onChange={getDataFromAPI}
                    variant="outlined"
                    label="Hae toivomaasi kirjaa..."
                    />
                )}
            /> */}
        </>
    )
}
