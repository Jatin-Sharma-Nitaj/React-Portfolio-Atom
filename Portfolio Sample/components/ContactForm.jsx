import React from "react";

const ContactForm = () => {
    return (
        <div className="content w-full min-h-screen bg-white pt-10">
            <div className="text">
                {/* Heading */}
                <div className="container flex items-center justify-center px-5 py-5 w-full mx-auto">
                    <h1 className="text-5xl font-bold uppercase text-indigo-600">
                        Here's a Contact Form
                    </h1>
                </div>
                {/* Subheading */}
                <div className="container flex flex-col items-center justify-center col-span-1 px-5 py-3 w-full mx-auto">
                    <h2 className="text-3xl font-medium text-gray-800">
                        Have Any Questions?
                    </h2>
                    <p className=" pt-3 font-light text-xl">You can ask any quaries that you havve with me along with busisiness proposal and collaboration.</p>
                </div>
            </div>

            <div className="container mx-auto bg-white shadow-md rounded-lg p-10 ">
                <form>
                    {/* Upper Inputs */}
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col w-full md:w-1/2">

                            <input
                                id="name"
                                type="text"
                                placeholder=" name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2">

                            <input
                                id="email"
                                type="email"
                                placeholder="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col w-full mt-6">

                        <textarea
                            id="message"
                            placeholder="message "
                            className="w-full h-40 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className=" mt-8">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <hr className="border-t-2 border-gray-300 my-8 mx-auto w-full pt-10" />
        </div>
    );
};

export default ContactForm;
