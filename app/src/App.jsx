import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {
  const players = [
    {
      name: 'Lionel Messi',
      pos: 'RW',
      flag: 'https://www.flagistrany.ru/data/flags/w1600/ar.png',
      team: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/1280px-Inter_Miami_CF_logo.svg.png',
      photo: 'https://cdn.futbin.com/content/fifa21/img/players/158023.png',
      total: 91,
      stats: {
        pac: 82,
        sho: 91,
        pas: 93,
        dri: 95,
        def: 38,
        phy: 68
      }
    },
    {
      name: 'Erling Haaland',
      pos: 'ST',
      flag: 'https://www.flagistrany.ru/data/flags/w1600/no.png',
      team: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1280px-Manchester_City_FC_badge.svg.png',
      photo: 'https://fifastatic.fifaindex.com/FIFA24/players/239085.png',
      total: 91,
      stats: {
        pac: 91,
        sho: 94,
        pas: 65,
        dri: 80,
        def: 45,
        phy: 88
      }
    },
    {
      name: 'Kylian Mbappé',
      pos: 'ST',
      flag: 'https://www.flagistrany.ru/data/flags/w580/fr.png',
      team: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/960px-Real_Madrid_CF.svg.png',
      photo: 'https://www.fifarosters.com/assets/players/fifa24/faces/231747.png',
      total: 91,
      stats: {
        pac: 97,
        sho: 90,
        pas: 82,
        dri: 92,
        def: 36,
        phy: 78
      }
    },
    {
      name: 'Kevin De Bruyne',
      pos: 'CM',
      flag: 'https://www.flagistrany.ru/data/flags/w580/be.png',
      team: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1280px-Manchester_City_FC_badge.svg.png',
      photo: 'https://fifastatic.fifaindex.com/FIFA23/players/192985.png',
      total: 91,
      stats: {
        pac: 74,
        sho: 86,
        pas: 94,
        dri: 87,
        def: 65,
        phy: 78
      }
    },
    {
      name: 'Virgil van Dijk',
      pos: 'CB',
      flag: 'https://www.flagistrany.ru/data/flags/w580/nl.png',
      team: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/960px-Liverpool_FC.svg.png',
      photo: 'https://fifastatic.fifaindex.com/FIFA24/players/203376.png',
      total: 89,
      stats: {
        pac: 78,
        sho: 60,
        pas: 75,
        dri: 72,
        def: 91,
        phy: 90
      }
    },
    {
      name: 'Jude Bellingham',
      pos: 'CAM',
      flag: 'https://www.flagistrany.ru/data/flags/w580/gb-eng.png',
      team: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/960px-Real_Madrid_CF.svg.png',
      photo: 'https://fifastatic.fifaindex.com/FIFA23/players/252371.png',
      total: 91,
      stats: {
        pac: 84,
        sho: 85,
        pas: 86,
        dri: 87,
        def: 76,
        phy: 82
      }
    }
  ];

  return (
    <div className='content'>
      {players.map(player => (
        <Card total={player.total} name={player.name} pos={player.pos} flag={player.flag} team={player.team} photo={player.photo} stats={player.stats}/>
      ))}
    </div>
  )
}

export default App
