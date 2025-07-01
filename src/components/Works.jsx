import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets'
import { externallink } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return <motion.div
    variants={fadeIn('up', "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 35,
        scale: 1,
        speed: 450
      }}

      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt="github"
              className='w-[75%] h-[75%] object-contain' />
          </div>
          <div
            onClick={() => window.open(live_demo_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={externallink}
              alt="github"
              className='w-[50%] h-[50%] object-contain' />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore saepe voluptas, doloremque, ratione suscipit quis ducimus necessitatibus ex provident accusamus, soluta numquam animi libero accusantium? Consectetur repellat voluptates fuga neque atque, minus incidunt, maiores ullam eius optio dignissimos officiis, iste eveniet esse culpa. Neque, dolore distinctio mollitia veritatis voluptatibus impedit.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map(
            (project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            )
          )
        }

        {/* More Coming Soon Placeholder */}
        <div className='w-[360px] min-h-[400px] bg-black-200 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-500'>
          <p className='text-gray-300 text-xl italic'>🚧 More Coming Soon...</p>
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(Works, "work")