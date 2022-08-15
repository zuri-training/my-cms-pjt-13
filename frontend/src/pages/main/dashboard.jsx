import { useEffect, useState } from "react";
import { useLocation , Link } from "react-router-dom";
import DashboardBar from "../../components/dashboard-bar";
import TemplateCard from "../../components/templateCard";

const Dashboard = () => {
  const location = useLocation();
  const [name, setName] = useState("Ayobami Israel");

  useEffect(() => {
    console.log(location);
    if (location.state) setName(location.state.userDetails.fullname);
  }, [location]);

  return (
    <div className="dashboard">
      <DashboardBar name={name} />
      <div className="dashboard-content">
        <h1>Hi, {name}</h1>
        <p>
          Start building from here, choose from our customizable templates to
          create your website with just a click.
        </p>
        <div className="dashboard-templates">
          <Link to="/dashboard/portfolio-card-template" className="no-underline">
            <TemplateCard
                href="#"
                text="Profile Card Template"
                src={require("../../assets/images/profile-card.png")}
            />
          </Link>
          <Link to="/dashboard/portfolio-template" className="no-underline">
            <TemplateCard
              href="#"
              text="Portfolio Website Template"
              src={require("../../assets/images/portfolio.png")}
            />
          </Link>
          <Link to="/dashboard/business-template" className="no-underline">
            <TemplateCard
              href="#"
              text="Business Website Template"
              src={require("../../assets/images/business-website.png")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
