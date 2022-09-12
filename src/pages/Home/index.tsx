import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Profile } from './components/Profile'
import { PostCard } from './components/PostCard'

import { api } from '../../lib/axios'

import { HomeContainer, PostsContainer, PostList } from './styled'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues() {
    const user = import.meta.env.VITE_GITHUB_USER_NAME
    const repo = import.meta.env.VITE_GITHUB_REPO_NAME

    const url = `repos/${user}/${repo}/issues`

    const response = await api.get(url)

    const { data } = response

    setIssues(data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <PostList>
          {issues.map((item) => (
            <PostCard
              key={item.id}
              title={item.title}
              body={item.body}
              createdAt={formatDistanceToNow(new Date(item.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            />
          ))}
        </PostList>
      </PostsContainer>
    </HomeContainer>
  )
}
