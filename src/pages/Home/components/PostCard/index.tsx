import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { PostContainer } from './styles'

interface PostCardProps {
  title: string
  body: string
  createdAt: string
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  return (
    <PostContainer>
      <header>
        <h3>{title}</h3>
        <span>{createdAt}</span>
      </header>

      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </div>
    </PostContainer>
  )
}
