import React, { useState } from 'react'
import TwitterFollowCard from './TwitterFollowCard'

export function App () {
  // const addAt = (userName) => `@${userName}`;

  // const formattedUsername = <span>@Paul</span>;
  // const camila = {isFollowing:true,username:'camila'}

  // const [name,setName] = useState("Paul");
  const users = [
    {
      id: 1,
      username: 'Paul',
      name: 'Mallqui Rivera Paul',
      isFollowing: true
    },
    {
      id: 2,
      username: 'Camila',
      name: 'Morales Susanibar Camila',
      isFollowing: false
    },
    {
      id: 3,
      username: 'Piero',
      name: 'Martinez Juan Perez',
      isFollowing: true
    },
    {
      id: 4,
      username: 'Ana',
      name: 'Ana Prieto',
      isFollowing: true
    }
  ]

  return (
    <section className='App'>
      {users.map((user) => {
        const { id, username, name, isFollowing } = user
        return (
          <TwitterFollowCard
            key={id}
            /* {...camila} */ initialisFollowing={isFollowing}
            username={username}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
