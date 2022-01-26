import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import Card from "./Card";
import Navbar from "./Navbar";
import styles from "./Page.module.css"

export default function Page(){

    const [{theme, themeData}, toggleTheme, isDarkMode] = useContext(ThemeContext);

    return (
        <div className={styles.MainLayout}>
            <div>
                <Navbar/>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <div className={styles.HeadDiv}>
                    {theme === "light" ? (
                        <div>
                        <h2 className={styles.dashboardHead}>My Dashboard</h2>
                    </div>
                    ) : (
                        <div>
                        <h2 className={styles.darkDashboardHead}>My Dashboard</h2>
                    </div>
                    )}
                    <div>
                        <button onClick={toggleTheme} className={styles.modeButton}>
                            {theme === "light" ? (
                                <div className={styles.rectangle}>
                                    <div className={styles.ellipse}></div>
                                </div>
                            ) : (
                                <div className={styles.darkRectangle}>
                                    <div className={styles.darkEllipse}></div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                <Card/>
            </div>
        </div>
    )
}