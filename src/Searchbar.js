import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchBar() {
    // Autocomplete koodi:
    const [myOptions, setMyOptions] = useState([]);

    function getDataFromAPI() {
        fetch('http://localhost/kirjakauppa/kaikkiKirjat.php').then((response) => {
            return response.json()
        }).then((res) => {

            for (let i = 0; i < res.length; i++) {
                myOptions.push(res[i].kirjaNimi)
                myOptions.push(res[i].etunimi + " " + res[i].sukunimi)
            }
            var newArray = [];
            var newArray = myOptions.filter(function (elem, pos) {
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
                                        label="Hae kirjaa..."
                                        name="s"
                                        onChange={getDataFromAPI} />
                                )}
                            />
                        </div>
                        <button className="loginButton col-2">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
