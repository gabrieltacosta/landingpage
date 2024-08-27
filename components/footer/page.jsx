import Image from "next/image";
import Link from "next/link";
import Styles from "./footer.module.scss";
import Logo from "/public/images/logo.svg";
import Instagram from "/public/images/Icon-instagram.svg";
import Facebook from "/public/images/Icon-facebook.svg";
import Linkedin from "/public/images/Icon-linkedin.svg";
import Youtube from "/public/images/Icon-youtube.svg";


const Footer = () => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo" />
                <h2 className={Styles.title}>0800 800 800</h2>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={Styles.column}>
                <h2>MENU</h2>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={Styles.column}>
                <h2>CONTEÚDO</h2>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${Styles.column} ${Styles.alignRight}`}>
                <h2>SOCIAL</h2>
                <div className={Styles.icons}>
                    <Link href="/">
                        <Image src={Instagram} alt="Logo" />
                    </Link>
                    <Link href="/">
                        <Image src={Facebook} alt="Logo" />
                    </Link>
                    <Link href="/">
                        <Image src={Linkedin} alt="Logo" />
                    </Link>
                    <Link href="/">
                        <Image src={Youtube} alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className={Styles.allRightReserved}>
            ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Footer;
