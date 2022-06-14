import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const url = "http://51.38.51.187:5050/api/v1/auth/sign-up";
  const [response, setResponse] = useState({});
  //http body
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  //redirect
  let navigate = useNavigate();

  const handleInputsChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  //onsubmit
  async function formSubmited(event) {
    event.preventDefault();

    await axios
      .post(url, form)
      .then((data) => setResponse(data))
      .catch((error) => setResponse(error));
  }

  //response management
  useEffect(() => {
    response.status && response.status === 204 && navigate("/");
  }, [response]);

  useEffect(() => {
    localStorage.getItem("key") && navigate("/users");
  }, []);

  return (
    <div className="mx-auto container row align-items-center justify-content-center vh-100 ">
      <form
        onSubmit={formSubmited}
        className="col-lg-6 col-md-12 col-sm-10 col-xs-12 shadow p-3 mb-5 bg-white rounded border">
            <h1 className="text-center m-4">Sign up</h1>
            <div className="form-outline mb-4">
                <input
                    type="text"
                    id="name"
                    onChange={handleInputsChange}
                    className="form-control"
                />
                <label className="form-label" htmlFor="name">
                    Name
                </label>
            </div>
            <div className="form-outline mb-4">
                <input
                    type="text"
                    id="surname"
                    onChange={handleInputsChange}
                    className="form-control"
                />
                <label className="form-label" htmlFor="surname">
                    Surname
                </label>
            </div>
            <div className="form-outline mb-4">
                <input
                    type="email"
                    id="email"
                    onChange={handleInputsChange}
                    className="form-control"
                />
                <label className="form-label" htmlFor="email">
                    Email address
                </label>
            </div>

            <div className="form-outline mb-4">
                <input
                    type="password"
                    id="password"
                    onChange={handleInputsChange}
                    className="form-control"
                />
                <label className="form-label" htmlFor="password">
                    Password
                </label>
            </div>

            <div className="row mb-4 justify-content-center text-align-center">
                <Link className="col-4 col-md-3" to="/">
                    Log in
                </Link>
                <button type="submit" className="btn btn-primary col-4 col-md-4">
                    Sign up
                </button>
            </div>
            {response && response.name === "AxiosError" && (
            <div className="alert alert-danger" role="alert">
                Something went wrong. Try again.
            </div>
            )}
      </form>
    </div>
  );
};

export default Signup;
