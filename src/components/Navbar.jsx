import { Link } from "react-router-dom";

function Navbar({ user, loading }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  console.log(user);
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Passport Authentication
        </Link>
      </span>
      {user && !loading ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="list__item">{user.displayName}</li>
          <li className="list__item" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to="login" className="link">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
