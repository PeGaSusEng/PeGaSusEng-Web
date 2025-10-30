import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Hero = () => (
    <section>
        <div id='home' className="custom-screen py-20 text-gray-600 md:py-28"> {/* Mengurangi padding vertikal sedikit */}
            <div className="max-w-4xl mx-auto">
                {/* Kontainer Flexbox untuk layout responsif */}
                {/* Ditumpuk di seluler (flex-col), berdampingan di medium ke atas (md:flex-row) */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Kolom Kiri: Gambar */}
                    <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
                        {/* GANTI SRC DENGAN FOTO ANDA */}
                        <img
                            src="/img_7.jpg" // <-- GANTI INI
                            alt="Foto Profil"
                            className="w-full h-full rounded-full object-cover border-4 border-gray-200 shadow-lg"
                        />
                    </div>

                    {/* Kolom Kanan: Teks & Media Sosial */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl text-gray-800 font-extrabold mx-auto sm:text-5xl">
                            Hello, I'm Abin! {/* <-- GANTI NAMA */}
                        </h1>
                        <p className="max-w-xl mx-auto md:mx-0 mt-4 text-lg">
                            Welcome to my digital space. I'm a recent Meteorology graduate with a passion for building intelligent solutions through data analysis, AI, and full-stack development (web & mobile).
                            {/* <-- GANTI DESKRIPSI */}
                        </p>

                        {/* Tautan Media Sosial */}
                        <div className="mt-6 flex justify-center md:justify-start gap-x-6">
                            <a
                                href="https://github.com/PeGaSusEng" // <-- GANTI LINK
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                            >
                                <FaGithub size={28} /> {/* Ikon dari react-icons */}
                            </a>
                            <a
                                href="https://www.linkedin.com/in/la-ode-muhammad-abin-akbar/" // <-- GANTI LINK
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                <FaLinkedin size={28} /> {/* Ikon dari react-icons */}
                            </a>
                            <a
                                href="https://instagram.com/abbenn2121" // <-- GANTI LINK
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Profile"
                                className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                            >
                                <FaInstagram size={28} /> {/* Ikon dari react-icons */}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
)

export default Hero