import { Link } from "react-router-dom";
function New() {
    return (<>
        <div className="w-50 mx-auto" style={{marginTop : "10rem"}}>
            <div className="alert fs-4 alert-warning py-5 text-center fw-bold">
                There isn't New Movies Right Now 😐😭;
            </div>
            <Link className="btn btn-outline-warning py-2 px-2" to='/'>
                Return Home
            </Link>
        </div>
    </>);
}

export default New;