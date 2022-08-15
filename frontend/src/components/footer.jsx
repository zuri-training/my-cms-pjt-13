import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer>
            <div className="contents">
                <div className="quick-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">Terms of Use</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
                <p>&copy; THIRTIN. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;