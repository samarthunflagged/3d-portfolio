import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { learning } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import { ProjectCard } from './Works';

const ExperienceCard = ({ project, index }) => {


  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: "0",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={project.date || `Date ${index + 1}`}
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
        <ProjectCard
          index={index}
          name={project.name}
          description={project.description}
          image={project.image}
          tags={project.tags}
          source_code_link={project.source_code_link}
          live_demo_link={project.live_demo_link}

        />
      </div>
    </VerticalTimelineElement>
  );
};




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
