import Styles from "./features.module.scss";
import Icon from "/public/images/icon.svg";
import Image from "next/image";

const Features = () => {
    return (
        <div className={Styles.container}>
            <h2>Neste bairro, não há agência melhor. Garantimos.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className={Styles.features}>
                <div className={Styles.feature}>
                    <Image src={Icon} alt="Icone" className={Styles.Icon} />
                    <h2>Digital Strategy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className={Styles.feature}>
                    <Image src={Icon} alt="Icone" className={Styles.Icon} />
                    <h2>Estratégia Digital</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className={Styles.feature}>
                    <Image src={Icon} alt="Icone" className={Styles.Icon} />
                    <h2>Social Midia</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className={Styles.feature}>
                    <Image src={Icon} alt="Icone" className={Styles.Icon} />
                    <h2>Social Midia</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
        </div>
    );
}

export default Features