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
                <div className="baniere nav-link text-white-50" id="alternance-link">Alternance</div>
              </li>
            </ul>
          </div>
        </div>

      </>
  )
}
