import React from "react";
import plus_icon from '../assets/icons/plus.png'
import '../styles/MoreInfo_mobile.scss';

const Moreinfo_mobile = () => {
    return(
        <ul className="moreInfo_mobile">
            <li>
                <button>
                    <p>about kawasaki</p>
                    <img src={plus_icon} alt="more icon" />
                </button>
                <ul className="moreInfo_mobile_sub-List">
                    <li>
                        <a className="moreInfo_mobile_link" href="">kawasaki hystory</a>
                    </li>
                    <li>
                        <a href="">international cities</a>
                    </li>
                </ul>
            </li>
        </ul>
    )
};

export default Moreinfo_mobile;

