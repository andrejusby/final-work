import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Toolbar = ({ userLoggedInn, setUserLoggedIn, sickList }) => {
  const nav = useNavigate();
  const location = useLocation();
  const params = useParams();

  const logOut = () => {
    setUserLoggedIn();
    nav("/");
  };

  return (
    <div className="toolbar">
      {userLoggedInn && (
        <div className="logged-in">
          <div className="choices">
            <Link className="toolbar-register" to="/add">ADD ANIMAL</Link>
            {location.pathname.includes("/add") && <Link className="toolbar-register" to={'/main'}>GO BACK TO MAIN</Link>}
            {/* <Link to="/favorite">SICK ANIMAL</Link> */}
            <div className="toolbar-register" onClick={() => nav("/favorite")} >SICK ANIMALS ({sickList.length})</div>
            {location.pathname.includes("/favorite") && <Link className="toolbar-register" to={'/main'}>Go back</Link>}
            </div>
          <button className="toolbar-register"  onClick={logOut}>LOGOUT</button>
        </div>
      )}

      {!userLoggedInn && (
        <div className="not-logged">
          <Link className="toolbar-register" to="/">Register</Link>
          <Link className="toolbar-register" to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
