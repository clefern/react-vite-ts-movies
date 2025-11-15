import FooterLogo from "./FooterLogo"
import styles from './Footer.module.css'
import FooterInfo from "./FooterInfo"
import FooterInstitucional from "./FooterInstitucional"
import FooterSocial from "./FooterSocial"
import FooterDevelopedBy from "./FooterDevelopedBy"

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitucional />
          <FooterSocial />
        </div>
      </footer>
      <FooterDevelopedBy />
    </>
  )
}

export default Footer