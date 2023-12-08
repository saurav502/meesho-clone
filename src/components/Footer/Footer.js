import React from "react";
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'

function Footer() {
  return (
    <>
    <hr className="border" />
      <div className="max-w-[1328px] m-auto p-4 flex flex-wrap justify-between">
        <div className="flex flex-col  gap-8">
          <h1 className="text-[32px] text-[#000000bf]">Shop Non-Stop on Meesho</h1>
          <h3 className="text-xl text-[#000000bf]">
            Trusted by more than 1 Crore Indians <br />
            Cash on Delivery | Free Delivery
          </h3>
          <div className="flex gap-4">
            <a href="" className="footerimglink">
              <img
                src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                className="w-[15rem]"
                alt=""
              />
            </a>
            <a href="" className="footerimglink">
              <img
                src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                className="w-[15rem]"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col  gap-8">
          <h3 className="text-[#616173] text-[18px]">Careers</h3>
          <h3 className="text-[#616173] text-[18px]">Become a supplier</h3>
          <h3 className="text-[#616173] text-[18px]">Hall of Fame</h3>
        </div>

        <div className="flex flex-col  gap-8 ">
          <h3 className="text-[#616173] text-[18px]">Legal and Policies</h3>
          <h3 className="text-[#616173] text-[18px]">Meesho Tech Blog</h3>
          <h3 className="text-[#000000] text-[18px]">Notices and Returns</h3>
        </div>

        <div className="flex flex-col  gap-8 ">
          <h3 className="text-[#000000] font-medium text-[20px]">Reach out to us</h3>
          <div className="flex gap-3">
            <BsFacebook size={20} className="text-blue-700"/>
            <BsInstagram size={20} className="text-[#ef2214]"/>
            <BsYoutube size={20} className="text-red-700"/>
            <BsLinkedin size={20} className="text-blue-800"/>
            <BsTwitter size={20} className="text-blue-500"/>
          </div>
        </div>

        <div className="flex flex-col  gap-1 ">
          <h3 className="text-[#000000] font-medium text-[20px]">Contact Us</h3>
          <p className="text-[#616173] text-[12px]">
            Fashnear Technologies Private Limited,
          </p>
          <p className="text-[#616173] text-[12px]">
            CIN: U74900KA2015PTC082263
          </p>
          <p className="text-[#616173] text-[12px]">
            06-105-B, 06-102, (138 Wu)
          </p>
          <p className="text-[#616173] text-[12px]">
            Vaishnavi Signature, No. 78/9,
          </p>
          <p className="text-[#616173] text-[12px]">
            Outer Ring Road, Bellandur,
          </p>
          <p className="text-[#616173] text-[12px]">
            Varthur Hobli, Bengaluru-560103,
          </p>
          <p className="text-[#616173] text-[12px]">Karnataka, India</p>
          <p className="text-[#616173] text-[12px]">E-mail address:</p>
          <p className="text-[#616173] text-[12px]">query@meesho.com</p>
          <p className="text-[#616173] text-[12px]">© 2015-2022 Meesho.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
