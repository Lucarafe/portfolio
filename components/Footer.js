import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
        <footer className={styles.footer}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <div>
                <h4>Contact</h4>
                <p>Téléphone : +33 7 71 87 09 03</p>
                <p>Email : luc.bonin0903@gmail.com</p>
            </div>
            <div>
                <h4>Suivez-moi</h4>
                <ul>
                    <li><a href="https://www.instagram.com/lucarafe/"><i className="fab fa-instagram fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/lucas-bonin-334836234/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a href="https://github.com/Lucarafe"><i className="fab fa-github fa-2x"></i></a></li>
                </ul>
            </div>

        </footer>
    </>
  )
}
