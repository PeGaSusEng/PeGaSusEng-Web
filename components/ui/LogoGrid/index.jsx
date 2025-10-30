const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                    For a detailed look at my experience, please download my CV.
                </p>
                <a
                    href="/pdf/CV_Abin.pdf"
                    download
                    className="inline-block px-6 py-3 text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 font-medium text-sm rounded-lg shadow-md transition-colors duration-300"
                >
                    Download CV
                </a>
            </div>
        </div>
    </div>
)

export default LogoGrid