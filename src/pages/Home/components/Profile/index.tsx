import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { api } from '../../../../lib/axios'

import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  Info,
  InfoItem,
} from './styles'

interface User {
  id: number
  login: string
  name: string
  bio: string
  company: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    async function fetchUser() {
      const user = import.meta.env.VITE_GITHUB_USER_NAME

      const response = await api.get(`users/${user}`)

      const { data } = response
      setUser(data)
    }

    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={`https://github.com/${user?.login}.png`} alt="" />

      <ProfileContent>
        <ProfileHeader>
          <h1>{user?.name}</h1>

          <a
            href={`https://github.com/${user?.login}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileHeader>

        <p>{user?.bio}</p>

        <Info>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.login}</span>
          </InfoItem>

          {user?.company && (
            <InfoItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </InfoItem>
          )}

          {!!user?.followers && (
            <InfoItem>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} seguidores</span>
            </InfoItem>
          )}
        </Info>
      </ProfileContent>
    </ProfileContainer>
  )
}
