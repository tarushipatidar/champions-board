import React from 'react';

export default function ChampionModal({champion}) {
  const {id, name, armor, attackrange, videogame_versions, big_image_url} = champion;

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
                    <th>ID:</th>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>ARMOR:</th>
                    <td>{armor}</td>
                  </tr>
                  <tr>
                    <th>ATTACKRANGE:</th>
                    <td>{attackrange}</td>
                  </tr>
                  <tr>
                    <th>VIDEO GAME VERSIONS:</th>
                    <td>{videogame_versions.join(' * ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
