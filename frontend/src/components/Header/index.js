import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className={styles.header}>
           <Link to="/">
           <span>Bypass</span>
           </Link>
            
            <nav>
                <Link to="/cadastro">Home</Link>
            </nav>
            </header>
    )
}

export default Header;