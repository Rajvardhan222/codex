import React from 'react';
import Image from "next/image";
import Button from "@/components/button/Button";

const EnquiryForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg flex overflow-hidden gap-x-10 w-full max-w-6xl py-24 px-10">
                {/* Left Side Image */}
                <div className="hidden md:block w-1/2">
                    <Image
                        src="/images/Fascinating Facts Programmer.jpg" // replace with the actual image link
                        alt="Coding"
                        height={648}
                        width={671}
                    />
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        Find Out More Reasons To Stay
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Mobile no."
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label className="flex items-center text-gray-500 text-sm">
                            <input type="checkbox" className="mr-2" />
                            Creating an account means youre okay with our Terms of Service, Privacy Policy, and default Notification Settings.
                        </label>
                       <Button content={"Enquire Now"} style={"Secondary"}/>
                    </form>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Already Have An Account? <a href="#" className="text-blue-500 hover:underline">Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
