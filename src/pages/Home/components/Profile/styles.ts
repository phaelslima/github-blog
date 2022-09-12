import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 4.5rem;
  padding: 2rem;
  gap: 2rem;

  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`
export const ProfileContent = styled.div`
  flex: 1;

  & > p {
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-bottom: 1.5rem;

    line-height: 1.6rem;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.95rem;

    color: ${({ theme }) => theme['base-title']};
  }

  a {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.blue};

    span {
      margin-right: 0.5rem;

      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.2rem;

      text-transform: uppercase;
    }

    svg {
      font-size: 0.75rem;
    }

    &:hover::before {
      content: '';
      position: absolute;
      bottom: 8px;
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
