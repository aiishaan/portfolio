import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import javaLight from '../../assets/javaLight.png'
import javaDark from '../../assets/javaDark.png'
import pythonLight from '../../assets/pythonLight.png'
import pythonDark from '../../assets/pythonDark.png'
import jsLight from '../../assets/jsLight.png'
import jsDark from '../../assets/jsDark.png'
import ts from '../../assets/ts.png'
import goLight from '../../assets/goLight.png'
import goDark from '../../assets/goDark.png'
import cLight from '../../assets/cLight.png'
import cDark from '../../assets/cDark.png'
import cppLight from '../../assets/cppLight.png'
import cppDark from '../../assets/cppDark.png'
import htmlLight from '../../assets/htmlLight.png'
import htmlDark from '../../assets/htmlDark.png'
import reactLight from '../../assets/reactLight.png'
import reactDark from '../../assets/reactDark.png'
import nextLight from '../../assets/nextLight.png'
import nextDark from '../../assets/nextDark.png'
import nodeLight from '../../assets/nodeLight.png'
import nodeDark from '../../assets/nodeDark.png'
import junitLight from '../../assets/junitLight.png'
import junitDark from '../../assets/junitDark.png'
import tailwindLight from '../../assets/tailwindLight.png'
import tailwindDark from '../../assets/tailwindDark.png'
import bootstrapLight from '../../assets/bootLight.png'
import bootstrapDark from '../../assets/bootDark.png'
import gitLight from '../../assets/gitLight.png'
import gitDark from '../../assets/gitDark.png'
import unixlight from '../../assets/unixLight.png'
import unixDark from '../../assets/unixDark.png'
import dockerLight from '../../assets/darkLight.png'
import dockerDark from '../../assets/dockerDark.png'
import postLight from '../../assets/postLight.png'
import postDark from '../../assets/postDark.png'
import mongoLight from '../../assets/mongoLight.png'
import mongoDark from '../../assets/mongoDark.png'
import drizzleLight from '../../assets/drizzleLight.png'
import drizzleDark from '../../assets/drizzleDark.png'
import redisLight from '../../assets/redisLight.png'
import redisDark from '../../assets/redisDark.png'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';




function Skills() {

  const { theme } = useTheme();
  const java = theme=== 'light'? javaLight : javaDark
  const python = theme==='light'? pythonLight : pythonDark
  const js = theme === 'light'? jsLight : jsDark
  const go = theme === 'light'? goLight : goDark
  const c = theme === 'light'? cLight : cDark
  const cpp = theme === 'light'? cppLight : cppDark
  const html = theme === 'light'? htmlLight : htmlDark
  const react = theme === 'light'? reactLight : reactDark
  const next = theme === 'light'? nextLight : nextDark
  const node = theme === 'light'? nodeLight : nodeDark
  const junit = theme === 'light'? junitLight : junitDark
  const tailwind = theme === 'light'? tailwindLight : tailwindDark
  const bootstrap = theme === 'light'? bootstrapLight : bootstrapDark
  const git = theme === 'light'? gitLight : gitDark
  const unix = theme === 'light'? unixlight : unixDark
  const docker = theme === 'light'? dockerLight : dockerDark
  const postG = theme === 'light'? postLight : postDark
  const mongo = theme === 'light'? mongoLight : mongoDark
  const drizzle = theme === 'light'? drizzleLight : drizzleDark
  const redis = theme === 'light'? redisLight : redisDark


  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={java} skill="Java" />
            <SkillList src={python} skill="Python" />
            <SkillList src={js} skill="JavaScript" />
            <SkillList src={ts} skill="TypeScript" />
            <SkillList src={go} skill="Go" />
            <SkillList src={c} skill="C" />
            <SkillList src={cpp} skill="C++" />
            <SkillList src={html} skill="Html/CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={react} skill="React" />
            <SkillList src={next} skill="Next.js" />
            <SkillList src={node} skill="Node.js" />
            <SkillList src={junit} skill="JUnit" />
            <SkillList src={tailwind} skill="Tailwind CSS" />
            <SkillList src={bootstrap} skill="Bootstrap" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={git} skill="Git" />
            <SkillList src={unix} skill="Unix" />
            <SkillList src={docker} skill="Docker" />
            <SkillList src={postG} skill="PostgreSQL" />
            <SkillList src={mongo} skill="MongoDB" />
            <SkillList src={drizzle} skill="Drizzle" />
            <SkillList src={redis} skill="Redis" />
        </div>
        <hr />
    </section>
  );
}

export default Skills