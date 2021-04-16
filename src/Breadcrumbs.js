import { useState, useEffect, React } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom';

export default function HistoryNav() {
    const [breadCrumbs, setBreadCrumbs] = useState([]);
    let history = useHistory();
    let pathname = history.location.pathname.substr(1);
    console.log(breadCrumbs);
    function goToPreviousPath() {
        history.goBack();
    }

    function pushBreadCrumb(){

        setBreadCrumbs([history.location.pathname])
        console.log(breadCrumbs);
    }

    useEffect(() => {
        if(pathname.includes('/')){
            console.log('spotted /')
            // pathname= 
        }
        setBreadCrumbs(pathname);
        return () => {
            console.log(breadCrumbs)
        }
    }, [pathname])

    
    if (pathname !== "") {
        return (
            <div className="row navHistory">
                <Link to="/" className="link col-auto varjo"> <i className="fa fa-home"></i> </Link>
                <Link className="link col-auto varjo" onClick={goToPreviousPath}> <i className="fa fa-arrow-circle-left"></i> </Link>
                <Link className="link col-auto" onClick={goToPreviousPath}>Edellinen </Link>
                <div className="col-1">
                    <u>{breadCrumbs}</u>
                </div>
                <div className="col-auto"><button onClick={pushBreadCrumb}>{breadCrumbs}</button></div>

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
                <div className="col-auto"><button onClick={pushBreadCrumb}>{breadCrumbs}</button></div>
            </div>
        )
    }
}