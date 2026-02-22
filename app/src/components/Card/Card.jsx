import styles from './Card.module.css'
import React from 'react'

export default function Card({total, name, pos, flag, team, photo, stats}) {
  return (
    <div className={styles.card}>
      <div className={styles.upper_half}>
        <img src={photo} alt="player" className={styles.photo}/>
        <div className={styles.player_info}>
          <h1 className={styles.total}>{total}</h1>
          <h3 className={styles.pos}>{pos}</h3>
          <img src={flag} alt="flag" className={styles.flag} />
          <img src={team} alt="team" className={styles.team} />
        </div>
      </div>
      <div className={styles.downer_half}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.stats}>
          <li>
            <ol><b>{stats.pac}</b> PAC</ol>
            <ol><b>{stats.sho}</b> SHO</ol>
            <ol><b>{stats.pas}</b> PAS</ol>
          </li>
          <li>
            <ol><b>{stats.dri}</b> DRI</ol>
            <ol><b>{stats.def}</b> DEF</ol>
            <ol><b>{stats.phy}</b> PHY</ol>
          </li>
        </div>
      </div>
    </div>
  )
}
