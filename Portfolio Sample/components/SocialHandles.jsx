import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const SocialHandles = ({ iconColor }) => {
    return (
        <div className="flex items-center gap-4">
            <a className='' href="https://www.instagram.com/vinit_chauhan0000?igsh=cGVkNmtjM25pNzk1">     <FaInstagram style={{ color: iconColor }} className="text-3xl " /> </a>
            <a href="#"><CiFacebook style={{ color: iconColor }} className="text-3xl hover:text-yellow-300 transition-colors duration-100 " /> </a>
            <a href=""><FaXTwitter style={{ color: iconColor }} className="text-3xl " />  </a>
            <a href="https://www.linkedin.com/in/vinit-kumar-609923346/"> <CiLinkedin style={{ color: iconColor }} className="text-3xl hover:text-blue-600 transition-colors duration-300" />   </a>
        </div>
    );
};

export default SocialHandles;
