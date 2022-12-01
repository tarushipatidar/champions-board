import React from 'react';

export default function ChampionModal({ champion }) {
  const {
    id, name, armor, armorperlevel, attackrange, attackdamageperlevel, videogame_versions,
    big_image_url, crit, hp, hpperlevel, mp, movespeed, mpregen, spellblock, spellblockperlevel
  } = champion;

  return (
    <>
      {/* The Modal */}
      <div className="modal" id={"myModal" + String(id)}>
        <div className="modal-dialog">
          <div className="modal-content">

            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{name}</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            {/* Modal body */}
            <div className="modal-body">
              <img src={big_image_url} className="image-padding" alt="image not found" />

              <table className='table'>
                <tbody>
                  <tr>
                    <th>Id :</th>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>Armor (Armor Per Level) :</th>
                    <td>{armor || '-'} ({armorperlevel})</td>
                  </tr>
                  <tr>
                    <th>Attackrange (Attack Damage Per Level) :</th>
                    <td>{attackrange} ({attackdamageperlevel})</td>
                  </tr>
                  <tr>
                    <th>Spellblock (Spell Block Per Level) :</th>
                    <td>{spellblock} ({spellblockperlevel})</td>
                  </tr>
                  <tr>
                    <th>Crit | Hp | Hpper Level :</th>
                    <td>{crit} | {hp} | {hpperlevel} </td>
                  </tr>
                  <tr>
                    <th>Mp | Move Speed | Mpregen :</th>
                    <td>{mp} | {movespeed} | {mpregen} </td>
                  </tr>
                  <tr>
                    <th>VideoGame Versions :</th>
                    <td>{videogame_versions.join(' * ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='modal-footer'>
              <button type="button" className="champ-remove-button" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
