import style from './Subtitle.module.css'


function Subtitle ({ children }) {
  return (
    <p className={style.subtitle}>{children}</p>
  )
}

export default Subtitle