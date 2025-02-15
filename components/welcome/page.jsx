import Styles from "./welcome.module.scss";
import Button from "../button/page";
import BannerWelcome from "/public/images/bannerWelcome.svg";
import Image from "next/image";

const Welcome = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.text}>
                <h2>Melhor agência de marketing do bairro</h2>
                <p>
                    Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.
                </p>
                <Button title="Aumentar vendas" kind={"secondary"} />
            </div>
            <div className={Styles.image}>
                <Image src={BannerWelcome} alt="Banner Welcome" />
            </div>
        </div>
    );
};

export default Welcome