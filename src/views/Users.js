import axios from "axios";
import User from "../components/User";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Users = () => {
  const url = "http://51.38.51.187:5050/api/v1/users";
  
  const token = localStorage.getItem("key");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let navigate = useNavigate();
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  
  async function getUsers() {
    await axios
      .get(url, config)
      .then((data) => setResponse(data.data))
      .then(() => {
        setLoading(false)
        if(response.status != 401 && token){
            setIsLogged(true);
        }
        })
      .catch((error) => setResponse(error));
  }

  const logout = () =>{
    navigate("/logout");
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    {(isLogged) &&
    (<div className="mx-auto container d-flex flex-column justify-content-center vh-100">
    <button
      type="button"
      className="btn btn-danger position-absolute top-0 end-0 xl-col-1 m-3 sm-col-3"
      onClick={logout}>
      Log out
    </button>
    
    <h1 className="text-center my-5">User list</h1>
      <div className="overflow-auto h-50 shadow p-3 mb-5 bg-white rounded border">
          <ul className="list-group">
              {!loading && (
                  response.items.map((user) => 
                  <User 
                      key={user.id} 
                      {...user} 
                      refresh = {getUsers}/>)
                  )
              }
          </ul>
      </div>
  </div>)
    }
    
    </>
    
  );
};

export default Users;
