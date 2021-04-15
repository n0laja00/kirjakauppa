import { useState, useEffect, React } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';

export default function HistoryNav() {
    let history = useHistory();
    let pathname = history.location.pathname.substr(1);

    let testpath = history.location.pathname;
    let splitpath = testpath.split("/")
    // console.log(splitpath);

    if (splitpath.length === 3) {
       pathname = splitpath[2];
    }

    function goToPreviousPath() {
        history.goBack();
    }

    if (pathname !== "") {
        return (
            <div className="row navHistory">
                <Link to="/" className="link col-auto varjo"> <i className="fa fa-home"></i> </Link>
                <Link className="link col-auto varjo" onClick={goToPreviousPath}> <i className="fa fa-arrow-circle-left"></i> </Link>
                <Link className="link col-auto" onClick={goToPreviousPath}>Edellinen </Link>
                <div className="col-1">
                    <u>{pathname}</u>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row navHistory">
                <Link className="link col-auto varjo" onClick={goToPreviousPath}> <i className="fa fa-arrow-circle-left"></i> </Link>
                <Link className="link col-auto" onClick={goToPreviousPath}> Edellinen </Link>
                <div className="col-auto">
                    <u>Home</u>
                </div>
            </div>
        )
    }
}