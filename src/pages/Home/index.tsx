import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { api } from '../../lib/axios'

import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostCard } from './components/PostCard'

import { HomeContainer, PostsContainer, PostList } from './styled'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [search, setSearch] = useState('')
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(query?: string) {
    const user = import.meta.env.VITE_GITHUB_USER_NAME
    const repo = import.meta.env.VITE_GITHUB_REPO_NAME

    let url = ''

    if (query) {
      url = `search/issues?q=${encodeURIComponent(
        query,
      )}%20repo:${user}/${repo}`
    } else {
      url = `repos/${user}/${repo}/issues`
    }

    const response = await api.get(url)

    const { data } = response

    if (query) {
      setIssues(data.items)
    } else {
      setIssues(data)
    }
  }

  useEffect(() => {
    fetchIssues(search)
  }, [search])

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <header>
          <h2>Publicações</h2>
          <span>{issues.length} publicações</span>
        </header>

        <SearchInput
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => setSearch(e.target.value)}
        />

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
