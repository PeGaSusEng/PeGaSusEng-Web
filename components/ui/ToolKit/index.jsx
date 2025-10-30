import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const Experience = () => {

    const experiences = [
        {
            logo: "/sic.png",
            company: "Samsung Innovation Campus 5",
            role: "Participant",
            startDate: "Feb 2024",
            endDate: "Mar 2024", 
            desc: "Completed a competitive technology program, gaining proficiency in Python and Arduino. Selected as one of the Top 12 participants based on technical skill assessment and performance.",
            certificateUrl: "/pdf/pdf_sic.pdf"
        },
        {
            logo: "/brajakara.jpeg",
            company: "PT Brajakara Teknologi Media",
            role: "Full Stack Developer Intern",
            startDate: "Jul 2024",
            endDate: "Jun 2024",
            desc: "During a one-month internship, developed the Hidronav UI (React/Vite) and successfully implemented in-browser, real-time object detection (YOLO.js).",
            certificateUrl: "/pdf/pdf_brajakara.pdf"
        },
        {
            logo: "/logo_itb.png",
            company: "Bandung Institute Of Technology",
            role: "Assistant Physics",
            startDate: "Feb 2023",
            endDate: "Apr 2023",
            desc: "Performed data analysis (linear regression, Excel) for physics lab reports and provided technical support to students, ensuring accurate data interpretation.",
            certificateUrl: "/pdf/pdf_lfd.pdf"
        },
        {
            logo: "/logo_hmme.png",
            company: "HMME Atmosphaira ITB",
            role: "Staff, Academic and Professional Development Division",
            startDate: "Sep 2022",
            endDate: "Mar 2024",
            desc: "I validated weather models (Python, WRF), led research collaborations with other universities, and served as Head of Creative for the Meteorological Competition 2023.",
            certificateUrl: "/pdf/serti_hmme.png"
        },
      
        {
            logo: "/ami2.png",
            company: "Aku Masuk ITB 2022",
            role: "Inter-city Staff Forum",
            startDate: "Dec 2021",
            endDate: "Mar 2022",
            desc: "As staff for the 'Aku Masuk ITB 2022' Inter-city Forum, I managed the development and quality control for TPS try-out materials. I coordinated with regional stakeholders, using negotiation skills to set priorities, and accurately recapitulated all participant data using Excel.",
            certificateUrl: "/pdf/pdf_ami.pdf"
        },
        {
            logo: "/salmanITB.jpeg",
            company: "YPM Salman ITB",
            role: "Trainee",
            startDate: "Mar 2022",
            endDate: "Jan 2023",
            desc: "I undertook multiple key roles within Salman's leadership programs (LMD & SSC), serving as a Facilitator, Mentor, and medical team member. This intensive experience rapidly built practical skills in communication, team leadership, and project planning.",
            certificateUrl: "/pdf/pdf_salman.pdf"
        },
    ]

    return (
        <SectionWrapper>
            <div id="experience" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        Experience & Certifications
                    </h2>
                    <p className="text-gray-600">
                        A summary of my roles and certifications that highlight my professional development.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            experiences.map((item, idx) => (
                                <li 
                                    key={idx} 
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start"
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex-none w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-3 border border-gray-100">
                                            <Image
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                width={48}
                                                height={48}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl text-gray-800 font-bold">
                                                {item.company}
                                            </h4>
                                            <p className="text-base text-indigo-600 font-medium -mt-1">
                                                {item.role}
                                            </p>
                                            {/* BARU: Menampilkan tanggal */}
                                            <p className="text-sm text-gray-500 mt-1">
                                                {item.startDate} - {item.endDate}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-700 text-sm mt-2 flex-grow">
                                        {item.desc}
                                    </p>
                                    
                                    <a
                                        href={item.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-4 text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
                                    >
                                        View Certificate
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4-4m0 0l-4-4m4 4H3" />
                                        </svg>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Experience