import Footer from "../../components/footer"
import Nav from "../../components/nav"
import NeedHelp from "../../components/needhelp"
import TemplateCard from "../../components/templateCard"

const LandingPage = () => {
    return (
        <div>
            <main>
                <Nav/>
                <div className="start-website">
                    <div className="startWebsite-text">
                        <div>
                            <h1>CREATE YOUR WEBSITE WITH EASE</h1>
                        </div>
                        <div>
                            <p>Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want</p>
                        </div>
                    </div>

                    <div className="justify-center">
                        <div className="start-building">
                            <a href="#">Start building your website now</a>
                        </div>
                    </div>
                </div>


                <div className="special-features">
                    <div>
                        <img src={
                                require("../../assets/images/color-pelette.png")
                            }
                            alt=""
                            className="color-perlette"/>
                    </div>
                    <div>
                        <img src={
                                require("../../assets/images/Text-Customization.png")
                            }
                            alt=""
                            className="text-customization"/></div>
                    <div>
                        <img src={
                                require("../../assets/images/image-customization.png")
                            }
                            alt=""
                            className="image-customization"/></div>
                </div>


                <div className="reach-the-world" id="scroll">
                    <div className="reach-the-world-texts">
                        <div>
                            <h1>REACH FOR THE WORLD WITH YOUR DIGITAL PRESENCE</h1>
                        </div>
                        <div>
                            <p>Our platform allows you to customize our carefully selected templates to suite your business and organizational goals.</p>
                        </div>
                    </div>
                    <div className="reach-the-world-image">
                        <div>
                            <img src={
                                    require("../../assets/images/do-more.png")
                                }
                                alt=""/></div>
                    </div>
                </div>


                <div className="design-without-stress">
                    <div className="container1">
                        <h3>Design your website with zero stress using THIRTIN</h3>
                    </div>

                    <div className="container2">
                        <div className="stress-free-image">
                            <img src={
                                    require("../../assets/images/stress-free-image.png")
                                }
                                alt=""/></div>
                        <div className="stress-free-text">
                            <div className="build-publish-reach">
                                <div className="build">
                                    <div>
                                        <h3>Build</h3>
                                    </div>
                                    <div>
                                        <p>Build sites for anything regardless of your skills and background knowledge. No matter if you are a beginner or professional, you can build a functional website without touching a line of code.</p>
                                    </div>
                                </div>
                                <div className="publish">
                                    <div>
                                        <h3>Publish</h3>
                                    </div>
                                    <div>
                                        <p>Launch your website on our secure domain. You don't need to worry about where to host your website, we've got you covered with our inbuilt classNameified domains.</p>
                                    </div>
                                </div>
                                <div className="reach">
                                    <div>
                                        <h3>Reach</h3>
                                    </div>
                                    <div>
                                        <p>Now, reach the world with your digital presence.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="btn">
                                    <a href="#">Start Building now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="start-building-here">

                    <div className="start-building-text">
                        <div className="start-building-h2-p">
                            <div>
                                <h2 className="start-building-h2">START BUILDING FROM HERE</h2>
                            </div>
                            <div>
                                <p className="start-building-p">Choose from our customizable templates. create your niche with <br/>just a click.</p>
                            </div>
                        </div>
                        <div>
                            <div className="start-building-btn">
                                <a href="#">View Template</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="display-templates">
                        <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
                        <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/portfolio.png")}/>
                        <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                        <TemplateCard href="#" text="Portfolio Website Template" src={require("../../assets/images/business-website.png")}/>
                        <TemplateCard href="#" text="Business Website Template" src={require("../../assets/images/business-website.png")}/>
                        <TemplateCard href="#" text="Profile Card Template" src={require("../../assets/images/profile-card.png")}/>
                </div>
                <NeedHelp/>
                <Footer/>
            </main>
        </div>
    )
}
export default LandingPage