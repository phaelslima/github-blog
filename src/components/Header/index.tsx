import { Link } from 'react-router-dom'

import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Github blog" />
      </Link>
    </HeaderContainer>
  )
}
