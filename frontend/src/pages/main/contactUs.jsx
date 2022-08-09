import Footer from '../../components/footer';
import Nav from '../../components/nav';

const ContactUs = () => {
    return(
        <div className="contact-us">
            <Nav/>
            <main>
                <div class="heading">
                <h2>Contact Us</h2>
                <p>Kindly fill in the form below to contact us</p>
                </div>
                <form action="" class="contact-form">
                <div class="input-box">
                    <label for="fullName">Full name</label> <br />
                    <input type="text" id="fullName" placeholder="Enter full name" />
                </div>
                <div class="input-box">
                    <label for="fullName">Email Address</label> <br />
                    <input type="text" id="fullName" placeholder="Enter full name" />
                </div>
                <div class="input-box">
                    <label for="fullName">Contact</label> <br />
                    <input type="text" id="fullName" placeholder="Enter full name" />
                </div>
                <div class="input-box">
                    <label for="fullName">Subject Matter</label> <br />
                    <input type="text" id="fullName" placeholder="Enter full name" />
                </div>
                <div class="input-box">
                    <label for="fullName">Message</label> <br />
                    <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter Message"
                    ></textarea>
                </div>
                <button type="submit">Verify Account</button>
                </form>
                <p>Visit our social media platform</p>
                <div class="social-links">
                <img src={require('../../assets/images/twitter-icon.png')} alt="twitter-icon" />
                <img src={require('../../assets/images/linkedin-icon.png')} alt="linkedin-icon" />
                </div>
                <p>Email:info@thirtin.com</p>
            </main>
            <Footer/>
    </div>
    )
}
export default ContactUs;