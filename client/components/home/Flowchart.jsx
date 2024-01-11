import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "../../node_modules/react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../utils/motion";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#F4FF00",
      opacity: 0.6,
      color: "#000",
    }}
    // contentArrowStyle={{ borderRight: '7px solid #232631' }}
    // date={experience.date}
    // iconStyle={{ background: experience.iconBg }}
    // icon={
    //     <div>
    //         <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
    //     </div>
    // }
  >
    <div>
      <h3 className="text-[#000] text-[24px] font-bold w-full">
        {experience.title}
      </h3>
      {/* <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experiences.company_name}
      </p> */}
    </div>
    <ul className="mt-5 list-disc ml-0 space-y-2">
      {experience.points.map((point, index) => (
        <div
          key={`experience-point-${index}`}
          className="text-black font-semibold text-[20px] pl-1 tracking-wider"
        >
          {point}
        </div>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Steps = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-[120px] xs:max-md:mt-[20px]">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          Do you want to know
        </p>
        <h2 className="text-[#fff] w-full font-black md:text-[60px] xs:max-md:text-[30px] text-[50px] text-center">
          How DZNS Studio works?
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Steps, "cpass");
