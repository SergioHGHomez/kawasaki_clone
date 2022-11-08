import React from "react";
import Footer_privacy from "../components/Footer_privacy";
import Moreinfo_mobile from "../components/MoreInfo_mobile";
import '../styles/Footer_mobile.scss'

const Footer_mobile = () => {

    return(
        <footer className="footer_mobile">
            <Moreinfo_mobile />
            <Footer_privacy />
        </footer>
    )
};

export default Footer_mobile;