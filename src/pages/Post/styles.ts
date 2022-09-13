import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 57rem;

  margin: -5.5rem auto 0;
  padding: 0 1.5rem;
`

export const PostHeader = styled.header`
  padding: 2rem;

  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h1 {
    margin-bottom: 0.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.blue};

    span {
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 0rem;

      text-transform: uppercase;
    }

    svg {
      font-size: 0.75rem;
    }

    &:hover::before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0px;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.blue};
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 48rem) {
    flex-wrap: wrap;
  }
`

export const InfoItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['base-label']};
  }

  span {
    line-height: 1.6rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const PostContext = styled.div`
  padding: 2.5rem;
  white-space: pre-wrap;

  p {
    line-height: 1.6rem;
    color: ${({ theme }) => theme['base-text']};

    a {
      color: ${({ theme }) => theme.blue};
    }
  }
`
