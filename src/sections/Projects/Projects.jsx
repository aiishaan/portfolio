import styles from './ProjectsStyles.module.css'
import lingo from '../../assets/lingo.jpg'
import aiAlly from '../../assets/aiAlly.jpg'
import casesAndCovers from '../../assets/casesAndCovers.jpg'
import rebuildis from '../../assets/rebuildis.jpg'
import jungleRumble from '../../assets/jungleRumble.jpg'
import takeNotes from '../../assets/takeNotes.jpg'
import sCheckout from '../../assets/sCheckout.jpg'
import memeGen from '../../assets/meme.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">
            Projects
        </h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={casesAndCovers} 
            link="https://casesandcovers.vercel.app/"
            h3="casesAndCovers"
            p="Custom cases"
            />
            
            <ProjectCard 
            src={lingo} 
            link="https://lingo-orpin-gamma.vercel.app/"
            h3="lingo"
            p="Language Learning App"
            />

            <ProjectCard 
            src={aiAlly} 
            link="https://github.com/aiishaan"
            h3="aiAlly"
            p="Ai Chat Bot"
            />
            
            <ProjectCard 
            src={rebuildis} 
            link="https://github.com/aiishaan"
            h3="rebuildIs"
            p="in-memory Databse"
            />
            <ProjectCard 
            src={jungleRumble} 
            link="https://github.com/aiishaan/Jungle-Rumble"
            h3="jungleRumble"
            p="Retro Game"
            />
            <ProjectCard 
            src={takeNotes} 
            link="https://takeenotes.netlify.app/"
            h3="takeNotes"
            p="Notes App"
            />
            <ProjectCard 
            src={memeGen} 
            link="https://teal-moonbeam-642746.netlify.app"
            h3="memeGenerator"
            p="meme generator/editor"
            />
            <ProjectCard 
            src={sCheckout} 
            link="https://github.com/aiishaan/SelfCheckOut-software"
            h3="sCheckout"
            p="Control Software"
            />
        </div>
        </section>
  )
}

export default Projects