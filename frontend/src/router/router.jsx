import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../pages/main/contactUs";
import ForgotPassword from "../pages/auth/forgotPassword";
import PasswordResetPage from "../pages/auth/passwordResetPage";
import SignUp from "../pages/auth/signUp";
import Login from "../pages/auth/login";
import PasswordResetCode from "../pages/auth/passwordresetcode";
import LandingPage from "../pages/main/landingpage";
import AccountVerify from "../pages/auth/accountverify";
import VerifySuccess from "../pages/auth/verifysuccess";
import Template from "../pages/main/template";
import Dashboard from "../pages/main/dashboard";
import DesignPage from "../pages/main/designspage";
import PortfolioCard from "../templates/portfoliocardtemplate";
import PortfolioTemplate from "../templates/portfoliotemplate";
import BusinessTemplate from "../templates/businesstemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/design" element={<DesignPage/>}/>
        {/*Templates*/}
        <Route path="/dashboard/portfolio-card-template" element={<PortfolioCard/>}/>
        <Route path="/dashboard/portfolio-template" element={<PortfolioTemplate/>}/>
        <Route path="/dashboard/business-template" element={<BusinessTemplate/>}/>
        {/* Auth */}
        <Route path="/account-verify" element={<AccountVerify/>}/>
        <Route path="/verify-success" element={<VerifySuccess/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset-page" element={<PasswordResetPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset-code" element={<PasswordResetCode />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
