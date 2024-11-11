import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col   px-16 py-20 lg:flex-row justify-between bg-[url(/images/bottom.jpg)] bg-no-repeat  from-[#00000000] via-[#0F234D33]  to-[#1C408E33] text-white p-8">

            <div className="flex-1 mb-8 lg:mb-0">
                <h2 className="text-2xl font-semibold mb-2">Let’s keep in touch!</h2>
                <p>Request a CodingPro Institute enquiry!</p>
                <div className="flex mt-4 px-10">
                    <input
                        type="text"
                        placeholder="Institute name"
                        className="flex-1 p-2 rounded-l-md text-black"
                    />
                    <button className="bg-gradient-to-b from-[#9BFEFF] to-[#5D9899] text-white px-4 py-2 rounded-r-md">
                        &#8594;
                    </button>
                </div>
                <p className="mt-4 text-white cursor-pointer">Create Account</p>
                <p className="text-white cursor-pointer">Sign in</p>
                <p className="mt-4">
                    📞 <a href="tel:+919797359144">+91 97973 59144</a>
                </p>
                <p>
                    📧 <a href="mailto:codingjr.in@gmail.com">codingjr.in@gmail.com</a>
                </p>
                <p>📍 AIC-BHU, Varanasi, 421004</p>
            </div>


            <div className="flex-1 lg:flex lg:justify-between">
                <div>
                    <h4 className="font-semibold mb-2">Courses</h4>
                    <p>Campus Training Program</p>
                    <p>Professional Training Program</p>
                    <p>B. Tech</p>
                    <p>B. Des</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Company</h4>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Our Team</p>
                    <p>Privacy</p>
                    <p>Terms & Conditions</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <div className="flex space-x-4 mt-2">
                        <FaInstagram size={24} />
                        <FaFacebook size={24} />
                        <FaLinkedin size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
