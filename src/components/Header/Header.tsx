import { HeaderContainer, StartSongButton, StopSongButton } from './styles'

import { Timer, Scroll, Play, Pause } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import LogoIgnite from '../../assets/logoIgnite.svg'
import { useState } from 'react'
import songTheKing from './theKing.mp3'

const song = new Audio(songTheKing)
export function Header() {
  const [activeSong, setActiveSong] = useState<string | null>(null)
  function playSong() {
    song.play()
    setActiveSong('playing')
  }

  function stopSong() {
    song.pause()
    setActiveSong(null)
  }

  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <li>
          {activeSong ? (
            <StartSongButton onClick={stopSong} type="button">
              <Play size={24} />
            </StartSongButton>
          ) : (
            <StopSongButton onClick={playSong} type="submit">
              <Pause size={24} />
            </StopSongButton>
          )}
        </li>

        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
