import styled from 'styled-components'

export const PostContainer = styled.article`
  a {
    display: block;
    padding: 2rem;

    background: ${({ theme }) => theme['base-post']};
    border-radius: 10px;

    text-decoration: none;

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;

      h3 {
        flex: 1;

        font-size: 1.25rem;
        font-weight: 700;
        line-height: 2rem;

        color: ${({ theme }) => theme['base-title']};
      }

      span {
        font-size: 0.875rem;
        line-height: 1.4rem;

        color: ${({ theme }) => theme['base-span']};
      }
    }

    div {
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

      line-height: 1.4rem;
      color: ${({ theme }) => theme['base-text']};

      img {
        display: none;
      }
    }
  }
`
