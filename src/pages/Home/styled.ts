import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 57rem;

  margin: -5.5rem auto 0;
  padding: 0 1.5rem;
`

export const PostsContainer = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.8rem;

      color: ${({ theme }) => theme['base-subtitle']};
    }

    h2 + span {
      font-size: 0.875rem;
      line-height: 1.4rem;

      color: ${({ theme }) => theme['base-span']};
    }
  }
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 3rem 0;
  gap: 2rem;

  @media screen and (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`
