import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-8 text-center">
                <div className="container mx-auto">
                    <p>Connect with me:</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/pramod-savant-535031226" className="text-xl hover:text-gray-300">
                            <CiLinkedin />
                        </a>
                        <a href="https://twitter.com/PRAMODSAVA682" className="text-xl hover:text-gray-300">
                            <FaXTwitter />
                        </a>
                        <a href="https://github.com/pammu453" className="text-xl hover:text-gray-300">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
