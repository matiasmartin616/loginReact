import { useNavigate, Link } from "react-router-dom";

const Logout = () => {
    let navigate = useNavigate();
    const confirmedLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    
    
    return (
        <div className="mx-auto container d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="col-lg-6 shadow p-3 mb-5 bg-white rounded border">
                <h3 className='text-center my-5'>Are you sure?</h3>
                <div className = "d-flex justify-content-center my-2">
                    <button className='btn btn-danger mx-3' onClick={confirmedLogout}>Logout</button>
                    <Link className="mx-3" to="/users">Cancel</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Logout;