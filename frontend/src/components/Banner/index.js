import styles from "./Banner.module.css";

function Banner({ image }) {
    return(
        <div
            className={styles.banner}
            style={{ backgroundImage: `url('/images/banner3.jpg')` }}
        ></div>
    );
}

export default Banner;
