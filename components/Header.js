export default function Header({ title }) {
  return (
      <>
          <div className="d-flex justify-content-between align-items-center bg-dark">
            <h className="nav-link text-white user-select-none mx-4">Portfolio</h>
            <div className="mx-auto">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <div className="baniere nav-link text-black active" id="profil-link">Mon profil</div>
                </li>
                <li className="nav-item">
                  <div className="baniere nav-link text-white-50" id="but-link">BUT informatique</div>
                </li>
                <li className="nav-item">
                  <div className="baniere nav-link text-white-50" id="stage-link">Stage</div>
                </li>
                <li className="nav-item">
                  <div className="baniere nav-link text-white-50" id="passion-link">Passion</div>
                </li>
              </ul>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid justify-content-center d-none" id="nav-but">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
                  <label className="btn btn-outline-secondary" htmlFor="btnradio1">1er année</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn-outline-secondary" htmlFor="btnradio2">2ème année</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                      <label className="btn btn-outline-secondary" htmlFor="btnradio3">3ème année</label>
              </div>
            </div>
            <div className="container-fluid justify-content-center d-none" id="nav-stage">
            </div>
          </nav>
      </>
  )
}
