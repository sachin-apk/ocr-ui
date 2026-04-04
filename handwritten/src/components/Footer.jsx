import react from "react";

function Footer() {
    return (
        <>
            <div className="bg-gray-900 text-gray-300 py-4 px-6 shadow-inner">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">

                    <p className="text-sm tracking-wide text-center">
                        &copy; {new Date().getFullYear()}
                        <span className="font-semibold text-white ml-1">OCR UI</span>. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                        <a href="#" className="hover:text-white transition duration-200">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white transition duration-200">
                            Terms
                        </a>
                        <a href="#" className="hover:text-white transition duration-200">
                            Contact
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;