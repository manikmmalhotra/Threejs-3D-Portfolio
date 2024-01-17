import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  { Social: <SiGmail />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav iccons social-icons flex align-items-center justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
