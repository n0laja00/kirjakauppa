import { useState, useEffect, React } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';

export default function Breadcrumbs({book}) {

    const [breadCrumbs, setBreadCrumbs] = useState([]);
    let history = useHistory();
    let pathname = history.location.pathname;
    let pathnameArr = [];

    //  edellinen sivu
    function goToPreviousPath() {
        history.goBack();
    }

    useEffect(() => {
        //jos urlissa /-merkki
        if (pathname.includes('/')) {
            pathnameArr = pathname.split('/');

            // Tässä menossa
            for (let i = 0; i < pathnameArr.length; i++) {
                // if (typeof (pathnameArr[i]) !== "string") {
                //     console.log('ASD')
                //     pathnameArr[i] = ('Book');
                // }
            }
            
            setBreadCrumbs(pathnameArr);
        }
    }, [pathname]) //kun pathname muuttuu

    //return, jos ei etusivulla
    if (pathname !== "/") {
        return (
            <div className="row navHistory">
                <Link to="/" className="link col-auto varjo"> <i className="fa fa-home"></i> </Link>
                <Link className="link col-auto varjo" onClick={goToPreviousPath}> <i className="fa fa-arrow-circle-left"></i> </Link>
                <Link className="link col-auto" onClick={goToPreviousPath}>Edellinen </Link>

                {/* map breadcrumbs array into span elements */}
                {breadCrumbs.map(item => (
                    <span className="col-auto">{item} </span>
                ))}

            </div>
        )
    } else { /* return etusivulla */
        return (
            <div className="row navHistory">
                <Link className="link col-auto varjo" onClick={goToPreviousPath}> <i className="fa fa-arrow-circle-left"></i> </Link>
                <Link className="link col-auto" onClick={goToPreviousPath}>Edellinen </Link>
                <div className="col-auto">
                    <u>Home</u>
                </div>
            </div>
        )
    }
}