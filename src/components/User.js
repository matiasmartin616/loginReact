import axios from "axios";
import deleteIcon from '../assets/deleteIcon.png'
import { useState } from "react";

const User = ({email, name, surname, id, refresh}) => {
    const [response, setResponse] = useState({});    
    let token = localStorage.getItem("key");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    const deleteUser = async () => {
        const url = `http://51.38.51.187:5050/api/v1/users/${id}`;
        await axios
            .delete(url, config)
            .then((data) => setResponse(data))
            .catch((error) => setResponse(error));
        refresh();
    }
    
    return (
        <li className="list-group-item border rounded">
            <div className="container-fluid row">
                <div className="col-lg-6 col-sm-11"> <span className="text-primary mx-0">Email:</span>{email}</div>
                <div className="col-lg-3 col-sm-11"><span className="text-primary mx-0">Name:</span> {name}</div>
                <div className="col-lg-3 col-sm-11"> <span className="text-primary mx-0">Surname:</span>{surname}</div>
                <a className="position-absolute end-0 col-1 p-0">
                   <img src={deleteIcon} className = " position-absolute end-1 stretched-link" onClick={deleteUser}/>
                </a>
            </div>
        </li>
    );
  }
  
  export default User;