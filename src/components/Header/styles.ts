import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }

  li {
    display: flex;
    list-style: none;
    align-items: center;

    margin-right: 25.7rem;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }
  }
`

export const BaseSongButton = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;
`

export const StartSongButton = styled(BaseSongButton)``

export const StopSongButton = styled(BaseSongButton)``
