import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className={styles.header}>
           <Link to="/home">
           <span>GMI Pass</span>
           </Link>
            
            <nav>
                <Link to="/home">Home</Link>
            </nav>
            </header>
    )
}

export default Header;