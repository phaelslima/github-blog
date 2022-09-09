import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  Info,
  InfoItem,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/phaelslima.png" alt="" />

      <ProfileContent>
        <ProfileHeader>
          <h1>Raphael Lima</h1>

          <a
            href="https://github.com/phaelslima"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileHeader>

        <p>
          Desenvolvedor Full Stack - NodeJS • ReactJS • React Native •
          Javascript • Typescript
        </p>

        <Info>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>phaelslima</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Cidade Oferta</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>0 seguidores</span>
          </InfoItem>
        </Info>
      </ProfileContent>
    </ProfileContainer>
  )
}
