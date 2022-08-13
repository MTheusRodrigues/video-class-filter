import Link from "next/link";
import React from "react";
import { navLinks } from "../../utils/data";
import styles from './TopBar.module.css'

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoConatiner}>

            </div>

            <div className={styles.navbar}>
                <nav>
                    {navLinks.map((link, index) => {
                        return (
                            <ul key={index}>
                                <Link href={link.path}>
                                    <li key={index}>{link.name}</li>
                                </Link>
                            </ul>
                        );
                    })}
                </nav>
            </div>
        </div>
    )
}

export default TopBar;