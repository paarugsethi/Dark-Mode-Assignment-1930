import { useContext } from "react";
import styles from "./Card.module.css"
import { ThemeContext } from "../Context/ThemeContextProvider"

export default function Card() {

    const [{ theme, themeData }, toggleTheme, isDarkMode] = useContext(ThemeContext);

    return (
        <div>
            {theme === "light" ? (
                <div className={styles.CardDiv}>
                    <div>
                        <h3>Active Users</h3>
                    </div>

                    <div className={styles.personCard}>
                        <div className={styles.personInfo}>
                            <div className={styles.imgDiv}>
                                <img width="100%" src="https://s3-alpha-sig.figma.com/img/0b5d/c448/3e918e0b00219cd737a20b1bbdb4c377?Expires=1644192000&Signature=T0DKvBXUxc3xBWp5tpgJe~Hw-Oeq6TgFY1Y6sphJaQdNAGWv9aqoBUFtVYcYA~S0Wzsf259Q9A2cgdT-ISPKGxho0TYVb28CnzDEbrsPBDl~9BWbeA-rZzdUiklu-xGLVG~g01AFZLm15VcjZlhnBmiPi62jVAG77CP9-FGiRVde98vFuqOWs6fJ1FjxfLoqZTye9RS5Ug9K~AeKcJkC26WDmDnH6752st-Ywl~bgVM9yaWu6GZuGEty92ZxT81WD~zrqhqeJrHWICGbhjCqx~6xLH~YyaCNhgv1flJ3hqlKrFRf6a0XTpknvz7LuCd5rIJ~fzwxrXm0vC9XzGYvWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </div>
                            <div className={styles.userName}>
                                <p className={styles.cardName}>Nrupul Dev</p>
                                <p className={styles.cardPlace}>Bangalore, India</p>
                            </div>
                        </div>
                        <div className={styles.levelBar}>
                            <svg width="402" height="26" viewBox="0 0 402 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="6" width="392" height="4" rx="2" fill="#E5E9F2" />
                                <g filter="url(#filter0_d_2_158)">
                                    <rect x="10" y="5" width="282" height="6" rx="3" fill="#29CB97" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_158" x="0" y="0" width="302" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="5" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_158" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_158" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.levelInfo}>
                            <p className={styles.levelText}>Professional Level 15</p>
                            <p className={styles.pointsText}>4723 Points</p>
                        </div>
                    </div>

                    <div className={styles.personCard}>
                        <div className={styles.personInfo}>
                            <div className={styles.imgDiv}>
                                <img width="100%" src="https://s3-alpha-sig.figma.com/img/d4b7/11c1/4a4d2aaaf15dc88eafe6b3ed557b017b?Expires=1644192000&Signature=aEJVGpcnItHUhh-Y8hKG9mCskq2jSlEghAa8hN4RX1Rj~V1ncfcbQscWypkVAte-ZaT~JHNxwxBBFU9w2TjFX0hxLJXOip2dsuBaSFC5vmU0uqAgYyHNCZglVhIB-O4uO17~aKm4bnBPGTRm~87uYEk30L9qrZv3GwChS9onmRDM6BlAUJH~boMuGcVikZavAO5IszKfC3EbPwF1mDRaDrP-SX6YdJw8mwZ01LkjDux9dNQC5bqdEGHYfNIlX0KxFAx9NKg8Pnnea-tbADOs0vzWAHT~z8yyvf5BBRJPl7ACm4znXDrcpJijIv4CEB0nvIz43hJjWHsWV8Ax2T0QqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </div>
                            <div className={styles.userName}>
                                <p className={styles.cardName}>Sandhya</p>
                                <p className={styles.cardPlace}>Bangalore, India</p>
                            </div>
                        </div>
                        <div className={styles.levelBar}>
                            <svg width="402" height="26" viewBox="0 0 402 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="6" width="392" height="4" rx="2" fill="#E5E9F2" />
                                <g filter="url(#filter0_d_2_177)">
                                    <rect x="10" y="5" width="205" height="6" rx="3" fill="#4072EE" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_177" x="0" y="0" width="225" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="5" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_177" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_177" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.levelInfo}>
                            <p className={styles.levelText}>Professional Level 11</p>
                            <p className={styles.pointsText}>2339 Points</p>
                        </div>
                    </div>

                    <div className={styles.personCard}>
                        <div className={styles.personInfo}>
                            <div className={styles.imgDiv}>
                                <img width="100%" src="https://s3-alpha-sig.figma.com/img/3343/238f/127b50a4148d9e3de79ccc98a97e785d?Expires=1644192000&Signature=SYYcSa0f2KDPe4ISB4GNb3k~E0JVIGEt19DQEAuGF4R-ETH38YVCpQ73Oe7-Kt02nLt7VYHGrSqa7c~fSVdstcdGLRpbQAYRyA0Xo9bb3hRVZ931GWZriIyolAIysI5~hwuiF9X-KYVf8HFKX2sTAN1UG7f2RgAFjiiBE31FBHIFyIN8n-CwLoHuG4fIrBfgKQcyIYoKRNeVRfa5Ir8HRVBKMI~BsN48WPeTlVh5bqgR2FQlNcPDzeS3T~0sQPbEijWTtllM4VhgBI-OTpMVU1u0vUAaDi2sZEBNIp21EXjT469jy39gGrqHJi3q9XDduUaIc4WEdPWR6aG6Eekfjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </div>
                            <div className={styles.userName}>
                                <p className={styles.cardName}>Elon Tusk</p>
                                <p className={styles.cardPlace}>California, USA</p>
                            </div>
                        </div>
                        <div className={styles.levelBar}>
                            <svg width="402" height="26" viewBox="0 0 402 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="6" width="392" height="4" rx="2" fill="#E5E9F2" />
                                <g filter="url(#filter0_d_2_196)">
                                    <rect x="10" y="5" width="145" height="6" rx="3" fill="#B558F6" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_196" x="0" y="0" width="165" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="5" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_196" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_196" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.levelInfo}>
                            <p className={styles.levelText}>Professional Level 6</p>
                            <p className={styles.pointsText}>1884 Points</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.darkCardDiv}>
                    <div>
                        <h3>Active Users</h3>
                    </div>

                    <div className={styles.darkPersonCard}>
                        <div className={styles.personInfo}>
                            <div className={styles.imgDiv}>
                                <img width="100%" src="https://s3-alpha-sig.figma.com/img/0b5d/c448/3e918e0b00219cd737a20b1bbdb4c377?Expires=1644192000&Signature=T0DKvBXUxc3xBWp5tpgJe~Hw-Oeq6TgFY1Y6sphJaQdNAGWv9aqoBUFtVYcYA~S0Wzsf259Q9A2cgdT-ISPKGxho0TYVb28CnzDEbrsPBDl~9BWbeA-rZzdUiklu-xGLVG~g01AFZLm15VcjZlhnBmiPi62jVAG77CP9-FGiRVde98vFuqOWs6fJ1FjxfLoqZTye9RS5Ug9K~AeKcJkC26WDmDnH6752st-Ywl~bgVM9yaWu6GZuGEty92ZxT81WD~zrqhqeJrHWICGbhjCqx~6xLH~YyaCNhgv1flJ3hqlKrFRf6a0XTpknvz7LuCd5rIJ~fzwxrXm0vC9XzGYvWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </div>
                            <div className={styles.userName}>
                                <p className={styles.darkCardName}>Nrupul Dev</p>
                                <p className={styles.cardPlace}>Bangalore, India</p>
                            </div>
                        </div>
                        <div className={styles.levelBar}>
                            <svg width="402" height="26" viewBox="0 0 402 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="6" width="392" height="4" rx="2" fill="#E5E9F2" />
                                <g filter="url(#filter0_d_2_158)">
                                    <rect x="10" y="5" width="282" height="6" rx="3" fill="#29CB97" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_158" x="0" y="0" width="302" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="5" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_158" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_158" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.levelInfo}>
                            <p className={styles.darkLevelText}>Professional Level 15</p>
                            <p className={styles.darkPointsText}>4723 Points</p>
                        </div>
                    </div>

                    <div className={styles.darkPersonCard}>
                        <div className={styles.personInfo}>
                            <div className={styles.imgDiv}>
                                <img width="100%" src="https://s3-alpha-sig.figma.com/img/d4b7/11c1/4a4d2aaaf15dc88eafe6b3ed557b017b?Expires=1644192000&Signature=aEJVGpcnItHUhh-Y8hKG9mCskq2jSlEghAa8hN4RX1Rj~V1ncfcbQscWypkVAte-ZaT~JHNxwxBBFU9w2TjFX0hxLJXOip2dsuBaSFC5vmU0uqAgYyHNCZglVhIB-O4uO17~aKm4bnBPGTRm~87uYEk30L9qrZv3GwChS9onmRDM6BlAUJH~boMuGcVikZavAO5IszKfC3EbPwF1mDRaDrP-SX6YdJw8mwZ01LkjDux9dNQC5bqdEGHYfNIlX0KxFAx9NKg8Pnnea-tbADOs0vzWAHT~z8yyvf5BBRJPl7ACm4znXDrcpJijIv4CEB0nvIz43hJjWHsWV8Ax2T0QqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </div>
                            <div className={styles.userName}>
                                <p className={styles.darkCardName}>Sandhya</p>
                                <p className={styles.cardPlace}>Bangalore, India</p>
                            </div>
                        </div>
                        <div className={styles.levelBar}>
                            <svg width="402" height="26" viewBox="0 0 402 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="6" width="392" height="4" rx="2" fill="#E5E9F2" />
                                <g filter="url(#filter0_d_2_177)">
                                    <rect x="10" y="5" width="205" height="6" rx="3" fill="#4072EE" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_177" x="0" y="0" width="225" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="5" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_177" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_177" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.levelInfo}>
                            <p className={styles.darkLevelText}>Professional Level 11</p>
                            <p className={styles.darkPointsText}>2339 Points</p>
                        </div>
                    </div>

                    <div className={styles.darkPersonCard}>
                        <div className={styles.personInfo}>
                            <div className={styles.imgDiv}>
                                <img width="100%" src="https://s3-alpha-sig.figma.com/img/3343/238f/127b50a4148d9e3de79ccc98a97e785d?Expires=1644192000&Signature=SYYcSa0f2KDPe4ISB4GNb3k~E0JVIGEt19DQEAuGF4R-ETH38YVCpQ73Oe7-Kt02nLt7VYHGrSqa7c~fSVdstcdGLRpbQAYRyA0Xo9bb3hRVZ931GWZriIyolAIysI5~hwuiF9X-KYVf8HFKX2sTAN1UG7f2RgAFjiiBE31FBHIFyIN8n-CwLoHuG4fIrBfgKQcyIYoKRNeVRfa5Ir8HRVBKMI~BsN48WPeTlVh5bqgR2FQlNcPDzeS3T~0sQPbEijWTtllM4VhgBI-OTpMVU1u0vUAaDi2sZEBNIp21EXjT469jy39gGrqHJi3q9XDduUaIc4WEdPWR6aG6Eekfjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </div>
                            <div className={styles.userName}>
                                <p className={styles.darkCardName}>Elon Tusk</p>
                                <p className={styles.cardPlace}>California, USA</p>
                            </div>
                        </div>
                        <div className={styles.levelBar}>
                            <svg width="402" height="26" viewBox="0 0 402 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="6" width="392" height="4" rx="2" fill="#E5E9F2" />
                                <g filter="url(#filter0_d_2_196)">
                                    <rect x="10" y="5" width="145" height="6" rx="3" fill="#B558F6" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_196" x="0" y="0" width="165" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="5" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_196" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_196" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.levelInfo}>
                            <p className={styles.darkLevelText}>Professional Level 6</p>
                            <p className={styles.darkPointsText}>1884 Points</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}