import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <span>Bypass</span>
            <nav>
                <a href='#'>Home</a>
                
            </nav>
            </header>
    )
}

export default Header;