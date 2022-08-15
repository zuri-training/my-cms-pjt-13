import { Link } from "react-router-dom";

const DashboardBar = ({ name }) => {
  return (
    <div className="dashboard-bar">
      <div>
        {" "}
        <img src={require("../assets/images/Logo-white.png")} alt="" />
      </div>
      <Link to="/dashboard"><button href="#">Templates</button></Link>
      <ul>
        <li>My Designs</li>
        <li>Published Designs</li>
        <Link to="/login"><li>Logout</li></Link>
      </ul>
      <div className="user-details">
        <div className="user-initials">
          <Link to="/dashboard"><h4>{name.charAt(0)}</h4></Link>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};
export default DashboardBar;
