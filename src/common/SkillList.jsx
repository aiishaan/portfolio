
function SkillList({src, skill}) {
  return (
    <span>
        <img className="logo" src={src} alt="Checkmark icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList