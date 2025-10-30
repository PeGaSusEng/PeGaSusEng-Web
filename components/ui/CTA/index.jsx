import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="about-me" className="py-16 md:py-24">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
                        <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96 overflow-hidden shadow-lg border-4 border-gray-100">
                            <Image
                                src="/img_1.jpg" 
                                alt="Foto Profil [Nama Lengkap Anda]" 
                                layout="fill"
                                objectFit="cover"
                                priority 
                            />
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto lg:max-w-2xl text-center lg:text-left">
                        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl leading-tight">
                            About Me
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                            I am a recent graduate from the Bandung Institute of Technology (ITB) with a degree in Meteorology. My studies in predictive modeling and data analysis sparked a strong passion for software development, which is now my primary professional focus.
                        </p>
                        <ul className="mt-6 space-y-2 text-gray-600 text-base lg:text-lg">
                            <li>
                                <span className="font-semibold text-gray-800">Full Name:</span> La Ode Muhammad Abin Akbar
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800">University:</span> Bandung Institute of Technology
                            </li>
                                                        <li>
                                <span className="font-semibold text-gray-800">Degree:</span> B.Sc. in Meteorology
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800">GPA:</span> 3.22
                            </li>
                            <li>
                                <span className="font-semibold text-gray-800">Interests:</span> Data Analysis, AI/Machine Learning, Web Development, Mobile Development, Python, SQL
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA