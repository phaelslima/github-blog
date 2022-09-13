import { Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostContainer } from './styles'

interface PostCardProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function PostCard({ number, title, body, createdAt }: PostCardProps) {
  return (
    <PostContainer>
      <Link to={`/post/${number}`} title={title}>
        <header>
          <h3>{title}</h3>
          <span>{createdAt}</span>
        </header>

        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>
      </Link>
    </PostContainer>
  )
}
