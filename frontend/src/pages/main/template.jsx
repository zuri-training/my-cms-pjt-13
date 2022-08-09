import Footer from "../../components/footer"
import Nav from "../../components/nav"
import NeedHelp from "../../components/needhelp";
import TemplateCard from "../../components/templateCard";

const Template = () => {
    return(
        <div>
            <Nav/>
            <div className="templates-top-section">
                <h1>Start building from here</h1>
                <h3> Create your niche with just a click.</h3>
                <button href="#"> Start building</button>
            </div>
            <div className="templates-page-templates">
                <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
                <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/portfolio.png")}/>
                <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/business-website.png")}/>
                <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
                <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
                <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/portfolio.png")}/>
                <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/business-website.png")}/>
                <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
            </div>
            <NeedHelp/>
            <Footer/>
        </div>
    )
}
export default Template;