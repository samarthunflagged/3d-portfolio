import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { learning } from '../constants'; // changed from 'experiences' to 'learning'
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ project, index }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={`Random Date ${index + 1}`} // Placeholder date
    iconStyle={{
      background: "#232631",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      color: "#fff",
    }}
    icon={<div>{index + 1}</div>}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold mb-4">{project.name}</h3>

      {/* Image styled like Works.jsx */}
      <div className='w-full h-[230px] mb-4'>
        <img
          src={project.image}
          alt={project.name}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <p className='text-secondary text-[14px]'>{project.description}</p>
    </div>
  </VerticalTimelineElement>
);

const Learning = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learnt so far</p>
        <h2 className={styles.sectionHeadText}>My Learning.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {learning.map((project, index) => (
            <ExperienceCard key={index} project={project} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Learning, '');
