import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { api } from '../../lib/axios'

import {
  PostContainer,
  PostHeader,
  Actions,
  Info,
  InfoItem,
  PostContext,
} from './styles'

interface Issue {
  html_url: string
  title: string
  body: string
  comments: number
  created_at: string
  user: {
    login: string
  }
}

export function Post() {
  const { postId } = useParams()

  const [issue, setIssue] = useState<Issue>()

  async function fetchIssue() {
    const user = import.meta.env.VITE_GITHUB_USER_NAME
    const repo = import.meta.env.VITE_GITHUB_REPO_NAME

    const url = `repos/${user}/${repo}/issues/${postId}`

    const response = await api.get(url)

    const { data } = response

    setIssue(data)
  }

  useLayoutEffect(() => {
    if (issue) {
      document.title = 'Github Blog | ' + issue.title
    }
  }, [issue])

  useEffect(() => {
    fetchIssue()
  }, [])

  return (
    <PostContainer>
      <PostHeader>
        <Actions>
          <Link to="/" title="Voltar a página inícial">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>

          <a
            href={issue?.html_url}
            title="Ver post no Github"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ver no Github</span>{' '}
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </Actions>

        <h1>{issue?.title}</h1>

        <Info>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue?.user.login}</span>
          </InfoItem>

          {issue?.created_at && (
            <InfoItem>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </InfoItem>
          )}

          {!!issue?.comments && (
            <InfoItem>
              <FontAwesomeIcon icon={faComment} />
              <span>{issue.comments} comentários</span>
            </InfoItem>
          )}
        </Info>
      </PostHeader>

      {issue && (
        <PostContext>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </PostContext>
      )}
    </PostContainer>
  )
}
