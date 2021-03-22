import React from 'react'

export default function SearchBar() {
    return (
        <div className="row">
            <div className="input-group d-flex justify-content-center">
                <div class="form-outline col-md-6 col-sm-10">
                    <input type="search" id="form1" className="form-control input-lg" />
                </div>
                <button type="button" class="loginButton col-sm-2">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}
