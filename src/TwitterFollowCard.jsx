import React, { useState } from 'react'

export default function TwitterFollowCard ({ children, username = 'unknow', initialisFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialisFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassname = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='avatar de paul'
          src={`https://unavatar.io/${username}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
