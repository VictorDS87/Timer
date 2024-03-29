import { HeaderContainer, StartSongButton, StopSongButton } from './styles'

import { Timer, Scroll, Play, Pause } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import LogoIgnite from '../../assets/logoIgnite.svg'
import { useState } from 'react'
import lofi from './lofi.mp3'

const song = new Audio(lofi)
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
            <StopSongButton onClick={stopSong} type="submit">
              <Pause size={24} />
            </StopSongButton>
          ) : (
            <StartSongButton onClick={playSong} type="button">
              <Play size={24} />
            </StartSongButton>
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
