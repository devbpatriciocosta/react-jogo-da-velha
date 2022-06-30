import style from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import Icon from '../icon/Icon'


function Header () {
  return (
    <div className={style.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Bruno Patrício</Subtitle>
      <div className={style.iconContent}>
        <Icon iconName="github" link="https://github.com/devbpatriciocosta"/>
      </div>
    </div>
)
}



export default Header