import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import gmailLight from '../../assets/gmail-light.svg'
import gmailDark from '../../assets/gmail-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {

    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light'? sun : moon;
    const gmailIcon = theme === 'light'? gmailDark : gmailLight;
    const githubIcon = theme === 'light'? githubLight : githubDark;
    const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Aishan Irfan" 
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Aishan 
                <br />
                Irfan
            </h1>
            <h2>
                Software Developer
            </h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p className={styles.description}>
                my introduction. for now this is random bs but i will eventually add some more random bs from chat gpt later on here!
            </p>
            <a href={CV} target="_blank">
                <button className="hover" download>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero;