import { useRef } from "react";
import ReactToPrint from "react-to-print";
import ContactSection from "./Contact Section";
import EducationSection from "./Education";
import ExperienceSection from "./ExperienceSection";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import SkillsSection from "./Skills";

export const TemplateSelection = () => {
  const componentRef = useRef();

  return (
    <>
    <div
      className="bg-white p-5 shadow-lg max-w-4xl mx-auto mt-10"
      ref={componentRef}
    >
      <Header />
      <ContactSection />
      <div className="grid grid-cols-3" style={{ gap: "50%" }}>
        <div className="col-span-1 ml-10">
          <SkillsSection />
        </div>
        <div className="col-span-2 ml-10">
          <ProfileSection />
        </div>
      </div>
      <div className="grid grid-cols-3" style={{ gap: "50%" }}>
        <div className="col-span-1 ml-10">
          <EducationSection />
        </div>
        <div className="col-span-2 ml-10">
          <ExperienceSection />
        </div>
      </div>

      {/* Resume Download Button */}
      

      {/* Resume Content */}
      {/* <div ref={componentRef}>
        <Header />
        <ContactSection />
        <div className="grid grid-cols-3" style={{ gap: '50%' }}>
          <div className="col-span-1 ml-5">
            <SkillsSection />
          </div>
          <div className="col-span-2">
            <ProfileSection />
          </div>
        </div>
        <div className="grid grid-cols-3" style={{ gap: '50%' }}>
          <div className="col-span-1 ml-5">
            <EducationSection />
          </div>
          <div className="col-span-2">
            <ExperienceSection />
          </div>
        </div>
      </div> */}
    </div>
    <ReactToPrint
        trigger={() => (
          <button className="bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
            Download Resume
          </button>
        )}
        content={() => componentRef.current}
      />
    </>
  );
};

export default TemplateSelection;
