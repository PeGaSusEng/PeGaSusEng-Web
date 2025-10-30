import SectionWrapper from "../../SectionWrapper"
import { FaBrain, FaDatabase, FaTools, FaUsers, FaLanguage } from "react-icons/fa"
import { SiTensorflow, SiPandas, SiNumpy, SiPython, SiTableau, SiKeras, SiJavascript, SiFlask, SiNodedotjs, SiReact, SiNextdotjs, SiFlutter, SiGit, SiLinux, SiGunicorn, SiCplusplus, SiPostgresql, SiMysql } from "react-icons/si" // Ikon spesifik jika mau


// --- Data Skills 
const techSkills = {
  dataScience: [
    "Python", "Pandas", "NumPy", "TensorFlow", "Keras", "SQL", "Tableau"
  ],
  backendDb: [
    "JavaScript", "Flask", "Node.js", "PostgreSQL", "MySQL Workbench", "Gunicorn"
  ],
  toolsFrameworks: [
    "React.js", "Next.js", "Flutter", "Git", "Linux (WSL)", "C++"
  ]
}

const softSkills = {
  professional: [
    "Analytical Thinking", "Problem-Solving", "Teamwork & Collaboration", 
    "Communication", "Negotiation", "Time Management"
  ],
  languages: [
    "Indonesian (Native)", "English (Limited Working Proficiency)"
  ]
}

// --- Komponen Kartu Skill (Baru) ---
// Ini adalah komponen baru untuk membuat setiap kartu
const SkillCard = ({ icon, title, skills, isPrimary = false }) => {
  const accentColor = isPrimary ? "text-indigo-600" : "text-gray-700";
  const bgColor = isPrimary ? "bg-indigo-50" : "bg-gray-100";
  const badgeBg = isPrimary ? "bg-indigo-100 text-indigo-800" : "bg-gray-100 text-gray-800";
  const ringColor = isPrimary ? "hover:ring-indigo-300" : "hover:ring-gray-300";

  return (
    <div className={`
      bg-white rounded-xl shadow-lg p-6
      transition-all duration-300 transform 
      hover:shadow-2xl hover:-translate-y-1
      hover:ring-2 ${ringColor}
    `}>
      {/* Header Kartu: Ikon + Judul */}
      <div className="flex items-center gap-x-4">
        <div className={`
          flex-none w-12 h-12 ${bgColor} ${accentColor} 
          rounded-full flex items-center justify-center
        `}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold ${accentColor}`}>
          {title}
        </h3>
      </div>
      
      {/* Daftar Skill (Badges) */}
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className={`
            px-3 py-1.5 rounded-full text-sm font-medium ${badgeBg}
          `}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}


// --- Komponen Skills Utama (Diperbarui) ---
const Skills = () => (
  <SectionWrapper>
    <div id="skills" className="custom-screen">
      {/* 1. Judul Bagian (Tetap sama) */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Technical Skills & Expertise
        </h2>
        <p className="mt-3 text-gray-600">
          My toolkit for data analysis, model building, and solution development.
        </p>
      </div>

      {/* 2. Grid Kartu yang Baru (Responsif) */}
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Kartu 1: Data Science (Dibuat menonjol) */}
        <SkillCard
          icon={<FaBrain size={24} />}
          title="Data & Analytics"
          skills={techSkills.dataScience}
          isPrimary={true} 
        />
        
        {/* Kartu 2: Backend */}
        <SkillCard
          icon={<FaDatabase size={24} />}
          title="Backend & Databases"
          skills={techSkills.backendDb}
        />
        
        {/* Kartu 3: Tools */}
        <SkillCard
          icon={<FaTools size={24} />}
          title="Tools & Frameworks"
          skills={techSkills.toolsFrameworks}
        />
        
        {/* Kartu 4: Professional */}
        <SkillCard
          icon={<FaUsers size={24} />}
          title="Professional Skills"
          skills={softSkills.professional}
        />
        
        {/* Kartu 5: Languages */}
        <SkillCard
          icon={<FaLanguage size={24} />}
          title="Languages"
          skills={softSkills.languages}
        />

        {/* Anda bisa menambahkan kartu ke-6 di sini jika ada */}
        
      </div>
    </div>
  </SectionWrapper>
)

export default Skills