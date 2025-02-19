import React from "react";
import envelopeLogo from "../../img/envelopeLogo.png";
import facebookLogo from "../../img/facebookLogo.png";
import linkedinLogo from "../../img/linkedinLogo.png";
import instagramLogo from "../../img/instagramLogo.png";
import youtubeLogo from "../../img/youtubeLogo.png";
import phoneLogo from "../../img/phoneLogo.png";
import clockLogo from "../../img/clockLogo.png";

const Header = () => {
  function openFb() {
    window.open("https://www.facebook.com/vardaanfarms/");
  }

  function openIg() {
    window.open("https://www.instagram.com/vardaanfarms/");
  }

  function openLinkedin() {
    window.open("");
  }

  function openYt() {
    window.open("https://www.youtube.com/@VardaanFarms");
  }

  return (
    <div
      className="bg-neutral-700 py-4 text-white hidden md:flex fixed w-full z-50"
      id="header"
    >
      <div className="flex justify-between mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12">
        <div className="flex gap-4 text-sm">
          <div className="flex gap-2 items-center">
            <img src={envelopeLogo} alt="Envelope" loading="lazy"/>
            <p>hello@vardaanfarms.com</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src={phoneLogo} alt="phone" loading="lazy"/>
            <p>+91 8816000082</p>
          </div>
        </div>

        <div className="flex gap-4 text-sm">
          <div className="flex gap-2 items-center border-r-2 pr-6">
            <img src={clockLogo} alt="clock" loading="lazy"/>
            <p>08:00 am - 6:00 pm</p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={facebookLogo}
              alt="FacebookLogo"
              style={{ width: "20px", height: "20px" }}
              className="cursor-pointer hover:scale-95 transition"
              onClick={openFb}
              loading="lazy"
            />
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              style={{ width: "20px", height: "20px" }}
              className="cursor-pointer hover:scale-95 transition"
              onClick={openIg}
              loading="lazy"
            />
            <img
              src={linkedinLogo}
              alt="Linkedin Logo"
              style={{ width: "20px", height: "20px" }}
              className="cursor-pointer hover:scale-95 transition"
              onClick={openLinkedin}
              loading="lazy"
            />
            <img
              src={youtubeLogo}
              alt="Youtube Logo"
              style={{ width: "20px", height: "20px" }}
              className="cursor-pointer hover:scale-95 transition"
              onClick={openYt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
