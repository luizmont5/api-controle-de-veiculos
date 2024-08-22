import styles from "./Container.module.css";

function Container({children}){
    return(
        <section ClassName={styles.container}>
            {children}
        </section>
    );
}

export default Container;
