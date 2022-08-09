import { Link, useNavigate } from "react-router-dom"

const Nav = () => {
    const router = useNavigate();
    const handlescroll = () => {
        router("/");
    }
    return(
        <nav>
            <span><img src={require('../assets/images/favicon.png')} alt="thirtin logo" /> </span>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/templates">Template</Link>
                <a onClick={handlescroll} >About 13</a>
                <Link to="contact-us" className="help">Help <i className="fa fa-angle-down"></i></Link>
                <Link to="/login">Login</Link>
                <Link to="/get-started" className="get-started">Get Started</Link>
            </div>
        </nav>
    )
}
export default Nav;