import profile from "../assets/images/profile.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

function About() {
  const skills = [
    "Excel Data Cleaning",
    "Google Sheets",
    "AI Workflow Support",
    "PDF to Excel",
    "Data Formatting",
    "Formula-Based Processing",
  ];

  return (
    <SectionWrapper>
      <section id="about" className="py-24 px-8 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <img
  src={profile}
  alt="Katara Bunty"
  style={{ objectPosition: "center 10%" }}
  className="relative w-[350px] h-[350px] object-cover rounded-3xl border-2 border-cyan-400"
/>
            </div>
          </div>

          {/* Right Content */}
          <div>

            <span className="text-cyan-400 uppercase tracking-widest">
              About Me
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Excel & Google Sheets Specialist
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              I specialize in Excel, Google Sheets, and AI-assisted data
              processing. I transform raw datasets into clean, organized
              spreadsheets using formulas, formatting, and modern productivity
              tools.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                >
                  <FaCheckCircle className="text-cyan-400" />
                  <span>{skill}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;