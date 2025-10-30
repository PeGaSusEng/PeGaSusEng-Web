import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const Projects = () => {
    const projects = [
        {
            coverImage: "/web.gif",
            title: "CBS Weather System",
            description: "Built a responsive web application using Next.js and TailwindCSS to display localized 30/60-minute rain forecasts. The app consumes a custom Flask API that serves predictions from a machine learning pipeline (Python, CNN, TensorFlow) processing Himawari-9 satellite data.",
            tags: ["React", "Next.js", "AI/ML","Python", "Flask","SQL","TensorFlow","TailwindCSS"],
            liveUrl: "https://cbs-weather-system.vercel.app/",
            githubUrl: "https://github.com/PeGaSusEng/CBS-Weather-System",
            fileUrl: "https://www.canva.com/design/DAG3PhO5LRM/OqpY9ig2wsoGYoa63kR9yQ/view?utm_content=DAG3PhO5LRM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hed1133f535",
            videoUrl: null,
        },
        {
            coverImage: "/mobile.gif",
            title: "CBS Weather Project Mobile",
            description: "Developed a cross-platform mobile application using Flutter to provide users with on-the-go 30/60-minute rain forecasts. The app receives data from a custom Flask API powered by a machine learning engine (Python, CNN) for weather prediction.",
            tags: ["Dart","Flutter","AI/ML","Python", "Flask","SQL","TensorFlow"],
            liveUrl: null,
            githubUrl: "https://github.com/PeGasusEng/CBS_Weather_Project_Mobile",
            fileUrl: "https://bit.ly/CBSForAndroid",
            videoUrl: "https://www.canva.com/design/DAG3TZ7mQP4/ojfu-_A7LgEE7UtXdm65DQ/view?utm_content=DAG3TZ7mQP4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3245130369",
        },
        {
            coverImage: "/data_analyst_1.gif",
            title: "Data Analyst Project",
            description: "This project provides a comprehensive data analysis of HIV/AIDS prevalence in California over a 13-year period (2010-2023). The study focuses on analyzing key trends in the distribution and diagnosis of cases across the state.",
            tags: ["Python", "SQL","Excel","Table-U","Data Cleaning"],
            liveUrl: null,
            githubUrl: "https://github.com/PeGaSusEng/Data_Analyst_Proyek_1",
            fileUrl: "https://www.canva.com/design/DAG2ajMq9Ic/NXe0dFZ5vgrn683rjATqVA/view?utm_content=DAG2ajMq9Ic&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdd9e297871",
            videoUrl: null,
        },
        {
            coverImage: "/belajarKITA.jpeg",
            title: "Project BelajarKITA Education",
            description: "BelajarKITA is project template education to any students in Indonesian. This project has been create using Flutter and other packages compability. ", 
            tags: ["Dart","Flutter"],
            liveUrl: null,
            githubUrl: "https://github.com/PeGaSusEng/BELAJARKITA",
            fileUrl: null,
            videoUrl: "https://www.canva.com/design/DAG3TqFKoGM/u3cyt_JDSpIjCGXVaKK8DA/view?utm_content=DAG3TqFKoGM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfd9c54dd94",
        },
        {
            coverImage: "/subang_bekasi.gif",
            title: "A Comparative Analysis of Rainfall Patterns in Bandung and Subang (1980-2010)",
            description: "I analyzed 30 years of rainfall data (1980-2010) for Bandung and Subang, using Morlet wavelets to identify and compare their key climate cycles.",
            tags: ["Python"],
            liveUrl: null,
            githubUrl: "https://github.com/PeGaSusEng/Prediksi_Cuaca_Mete/tree/main",
            fileUrl: "https://www.canva.com/design/DAG3TVP3-UQ/3hbjqE4N_4qPA5leIuCmVA/view?utm_content=DAG3TVP3-UQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf0237d43a6",
            videoUrl: null,
        },
        {
            coverImage: "/prob_an_bn.gif",
            title: "Conditional Probability Analysis of Seasonal Rainfall based on ENSO and IOD Phases",
            description: "A statistical analysis showing how ENSO and IOD events shift the probability of seasonal rainfall, identifying the risk of exceptionally wet (AN) or dry (BN) conditions.",
            tags: ["Python"],
            liveUrl: null,
            githubUrl: "https://github.com/PeGaSusEng/Prediksi_Cuaca_Mete/tree/main",
            fileUrl: "https://www.canva.com/design/DAG3TWgFVmw/04DW-Sy6WSl5q-K-oPk22w/view?utm_content=DAG3TWgFVmw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6ebe12cee7",
            videoUrl: null,
        },
    ]

    return (
        <SectionWrapper className="pb-20"> 
            <div id="projects" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-3 text-gray-600">
                        A selection of my work spanning web development, data processing, and data analysis.
                    </p>
                </div>
                <div className="mt-10"> 
                    <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            projects.map((item, idx) => (
                                <li key={idx} className="bg-white border rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={item.coverImage}
                                            alt={item.title}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl text-gray-800 font-semibold">{item.title}</h3>
                                        <p className="mt-2 text-gray-600 text-sm flex-grow">
                                            {item.description}
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-x-4 gap-y-2">
                                            {item.liveUrl && (
                                                <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                                    Live Demo &rarr;
                                                </a>
                                            )}
                                            {item.githubUrl && (
                                                <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                                    View Code &rarr;
                                                </a>
                                            )}
                                            {item.videoUrl && (
                                                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                                    Watch Video &rarr;
                                                </a>
                                            )}
                                            {item.fileUrl && (
                                                <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" download
                                                   className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                                    View File &rarr;
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Projects