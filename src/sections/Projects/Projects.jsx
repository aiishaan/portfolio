import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hippster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">
            Projects
        </h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={viberr} 
            link="https://github.com/aiishaan/ecommerceDashboard"
            h3="DBoard"
            p="Ecommerce Dashboard App"
            />
            <ProjectCard 
            src={freshBurger} 
            link="https://github.com/aiishaan/Jungle-Rumble"
            h3="Jungle Rumble"
            p="Retro Game"
            />
            <ProjectCard 
            src={hippster} 
            link="https://github.com/aiishaan/saltedHashbrowns"
            h3="Salted Hashbrowns"
            p="Password Services"
            />
            <ProjectCard 
            src={fitLift} 
            link="https://github.com/aiishaan/SelfCheckOut-software"
            h3="CheckoutInStyle"
            p="Self Checkout Station"
            />
        </div>
        </section>
  )
}

export default Projects