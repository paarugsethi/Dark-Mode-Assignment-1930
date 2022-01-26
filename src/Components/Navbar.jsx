import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContextProvider"
import styles from "./Navbar.module.css"

export default function Navbar() {

    const [{ theme, themeData }, toggleTheme, isDarkMode] = useContext(ThemeContext);

    return (
        <div>
            {theme === "light" ? (
                <div className={styles.NavbarBg}>
                    <div className={styles.hover}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24507 18.5H5.6307V15H4.24507V18.5ZM6.6103 20.5H3.26548C2.72426 20.5 2.28589 20.055 2.28589 19.5V14C2.28589 13.45 2.72426 13 3.26548 13H6.6103C7.15103 13 7.58989 13.45 7.58989 14V19.5C7.58989 20.055 7.15103 20.5 6.6103 20.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3887 18.5H12.7744V8.5H11.3887V18.5ZM13.754 20.5H10.4092C9.86842 20.5 9.42957 20.055 9.42957 19.5V7.5C9.42957 6.95 9.86842 6.5 10.4092 6.5H13.754C14.2952 6.5 14.7336 6.95 14.7336 7.5V19.5C14.7336 20.055 14.2952 20.5 13.754 20.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5329 18.5H19.9185V2H18.5329V18.5ZM20.8981 20.5H17.5533C17.0126 20.5 16.5737 20.055 16.5737 19.5V1C16.5737 0.45 17.0126 0 17.5533 0H20.8981C21.4389 0 21.8777 0.45 21.8777 1V19.5C21.8777 20.055 21.4389 20.5 20.8981 20.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8573 24H1.30625C0.765517 24 0.32666 23.555 0.32666 23C0.32666 22.45 0.765517 22 1.30625 22H22.8573C23.398 22 23.8369 22.45 23.8369 23C23.8369 23.555 23.398 24 22.8573 24Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0485 12H2.0835V5H16.0485L18.3815 8.5L16.0485 12ZM20.4155 7.945L17.4155 3.445C17.23 3.17 16.918 3 16.5835 3H10.3335V1C10.3335 0.45 9.8855 0 9.3335 0C8.7815 0 8.3335 0.45 8.3335 1V3H1.0835C0.531496 3 0.0834961 3.45 0.0834961 4V13C0.0834961 13.555 0.531496 14 1.0835 14H8.3335V22H6.974C6.422 22 5.974 22.45 5.974 23C5.974 23.555 6.422 24 6.974 24H11.693C12.245 24 12.693 23.555 12.693 23C12.693 22.45 12.245 22 11.693 22H10.3335V14H16.5835C16.918 14 17.23 13.835 17.4155 13.555L20.4155 9.055C20.6395 8.72 20.6395 8.28 20.4155 7.945Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6529 18H5.51066L4.01237 11.5H20.1511L18.6529 18ZM2.28584 9.5H21.8777V7H2.28584V9.5ZM22.8573 5H21.2145L15.1038 0.500004C14.6649 0.180004 14.0522 0.280004 13.7363 0.730004C13.4199 1.175 13.5188 1.8 13.9577 2.125L17.8653 5H6.29825L10.2058 2.125C10.6447 1.8 10.7436 1.175 10.4272 0.730004C10.1113 0.280004 9.49907 0.180004 9.05972 0.500004L2.94903 5H1.30625C0.765517 5 0.32666 5.45 0.32666 6V10.5C0.32666 11.055 0.765517 11.5 1.30625 11.5H1.9998L3.78119 19.23C3.88552 19.68 4.28029 20 4.73482 20H19.4287C19.8832 20 20.278 19.68 20.3823 19.23L22.1637 11.5H22.8573C23.398 11.5 23.8369 11.055 23.8369 10.5V6C23.8369 5.45 23.398 5 22.8573 5Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6124 16.75C11.0184 16.75 11.3471 16.415 11.3471 16V13.5C11.3471 13.085 11.0184 12.75 10.6124 12.75C10.2063 12.75 9.87769 13.085 9.87769 13.5V16C9.87769 16.415 10.2063 16.75 10.6124 16.75" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5511 16.75C13.9571 16.75 14.2858 16.415 14.2858 16V13.5C14.2858 13.085 13.9571 12.75 13.5511 12.75C13.1451 12.75 12.8164 13.085 12.8164 13.5V16C12.8164 16.415 13.1451 16.75 13.5511 16.75" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4899 16.75C16.896 16.75 17.2246 16.415 17.2246 16V13.5C17.2246 13.085 16.896 12.75 16.4899 12.75C16.0839 12.75 15.7552 13.085 15.7552 13.5V16C15.7552 16.415 16.0839 16.75 16.4899 16.75" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67366 16.75C8.0797 16.75 8.40835 16.415 8.40835 16V13.5C8.40835 13.085 8.0797 12.75 7.67366 12.75C7.26762 12.75 6.93896 13.085 6.93896 13.5V16C6.93896 16.415 7.26762 16.75 7.67366 16.75" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8777 17.72L19.6393 15.665C19.4581 15.495 19.223 15.405 18.983 15.405H6.78217V13.405H18.3609C18.8997 13.405 19.3405 12.96 19.3405 12.405V6.33H21.8777V17.72ZM4.52421 11.665L2.28584 13.72V2.33H17.3814V11.405H5.18054C5.05809 11.405 4.93564 11.43 4.82299 11.475C4.71523 11.52 4.61237 11.58 4.52421 11.665ZM22.8573 4.33H19.3405V1.33C19.3405 0.775002 18.8997 0.330002 18.3609 0.330002H1.30625C0.767476 0.330002 0.32666 0.775002 0.32666 1.33V15.965C0.32666 16.36 0.551966 16.72 0.909517 16.88C1.03686 16.94 1.16911 16.965 1.30625 16.965C1.54135 16.965 1.77646 16.88 1.96258 16.71L4.82299 14.08V16.405C4.82299 16.96 5.2638 17.405 5.80258 17.405H18.6058L22.2009 20.71C22.3871 20.88 22.6222 20.965 22.8573 20.965C22.9944 20.965 23.1267 20.94 23.254 20.88C23.6116 20.72 23.8369 20.36 23.8369 19.965V5.33C23.8369 4.775 23.396 4.33 22.8573 4.33Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1623 17.6331V1.95967H11.0272V5.88686C11.0272 6.42808 11.4631 6.86645 12.0001 6.86645H15.892V17.6331H6.1623ZM12.4866 21.5515H2.27041V5.87804H4.21635V18.6127C4.21635 19.154 4.65225 19.5923 5.18933 19.5923H12.4866V21.5515ZM12.9731 3.3453L14.5245 4.90726H12.9731V3.3453ZM17.5529 5.18547L12.688 0.287509C12.5056 0.103835 12.258 0.000488281 12.0001 0.000488281H5.18933C4.65225 0.000488281 4.21635 0.439345 4.21635 0.98008V3.91886H1.29744C0.760355 3.91886 0.324463 4.35771 0.324463 4.89845V22.5311C0.324463 23.0723 0.760355 23.5107 1.29744 23.5107H13.4596C13.9967 23.5107 14.4326 23.0723 14.4326 22.5311V19.5923H16.865C17.4021 19.5923 17.838 19.154 17.838 18.6127V5.87804C17.838 5.61845 17.7353 5.36914 17.5529 5.18547Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59472 10.0413H11.0272C11.4304 10.0413 11.7569 9.71265 11.7569 9.30661C11.7569 8.90106 11.4304 8.57191 11.0272 8.57191H8.59472C8.19142 8.57191 7.86499 8.90106 7.86499 9.30661C7.86499 9.71265 8.19142 10.0413 8.59472 10.0413Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4596 11.5107H8.59472C8.19142 11.5107 7.86499 11.8398 7.86499 12.2454C7.86499 12.6514 8.19142 12.9801 8.59472 12.9801H13.4596C13.8629 12.9801 14.1893 12.6514 14.1893 12.2454C14.1893 11.8398 13.8629 11.5107 13.4596 11.5107Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4596 14.4495H8.59472C8.19142 14.4495 7.86499 14.7786 7.86499 15.1842C7.86499 15.5902 8.19142 15.9189 8.59472 15.9189H13.4596C13.8629 15.9189 14.1893 15.5902 14.1893 15.1842C14.1893 14.7786 13.8629 14.4495 13.4596 14.4495Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.09276 16.634C3.09276 16.634 3.09276 16.634 3.09276 16.6344C3.09276 16.634 3.09276 16.634 3.09276 16.634ZM3.11233 16.6624V16.6673C3.11233 16.6677 3.11233 16.6677 3.11233 16.6677C3.11233 16.6677 3.11233 16.6658 3.11233 16.6624ZM10.0955 21.4369C11.0694 21.5897 12.097 21.5897 13.0708 21.4369V19.7657C13.0708 19.3357 13.3498 18.9561 13.7608 18.8292C14.8032 18.5079 15.7525 17.9593 16.5796 17.1992C16.8928 16.9082 17.3625 16.8573 17.7345 17.0738L19.183 17.9206C19.4668 17.5758 19.7213 17.2124 19.9513 16.8338C20.01 16.73 20.0736 16.6183 20.1421 16.5061C20.3477 16.1349 20.5336 15.7469 20.6902 15.3482L19.2368 14.5009C18.8698 14.2844 18.6789 13.8514 18.7768 13.4331C18.9089 12.8645 18.9774 12.3002 18.9774 11.7556C18.9774 11.2237 18.9138 10.6731 18.7866 10.1202C18.6936 9.70138 18.8845 9.26938 19.2564 9.05534L20.7098 8.21828C20.5434 7.77893 20.3379 7.35085 20.103 6.93942C20.0981 6.93256 20.0785 6.89387 20.0736 6.88701C20.0638 6.87036 20.0442 6.83852 20.0345 6.82089C19.7947 6.41044 19.5255 6.01469 19.2221 5.63901L17.7687 6.47607C17.3968 6.69012 16.927 6.63673 16.6138 6.34383C15.7917 5.57877 14.8032 5.00375 13.7608 4.68195C13.3498 4.5551 13.0708 4.1755 13.0708 3.74546V2.07477C12.097 1.92195 11.0694 1.92195 10.0955 2.07477V3.74546C10.0955 4.1755 9.81169 4.5551 9.40063 4.68195C8.35829 5.00375 7.40893 5.55232 6.5868 6.31248C6.26871 6.60342 5.79893 6.65436 5.42701 6.43787L3.9785 5.59101C3.69956 5.93583 3.4451 6.29975 3.2151 6.67787C2.92148 7.1515 2.6768 7.64865 2.47616 8.16342L3.92467 9.01077C4.29659 9.22726 4.48254 9.66024 4.38467 10.0785C4.25254 10.6472 4.18893 11.2114 4.18893 11.7556C4.18893 12.288 4.25254 12.8385 4.37488 13.3915C4.46786 13.8103 4.2819 14.2423 3.90999 14.4563L2.45169 15.2934C2.5985 15.6661 2.76978 16.0389 2.96552 16.4077L3.10744 16.6565C3.11233 16.6677 3.12212 16.6795 3.12701 16.6908C3.3668 17.1012 3.64084 17.497 3.93935 17.8726L5.39765 17.0356C5.76956 16.8215 6.23446 16.8749 6.55254 17.1678C7.36978 17.9329 8.35829 18.5079 9.40063 18.8292C9.81169 18.9561 10.0955 19.3357 10.0955 19.7657V21.4369ZM11.5832 23.5107C10.6632 23.5107 9.75786 23.4034 8.8819 23.1913C8.44637 23.0846 8.13807 22.6917 8.13807 22.2397V20.4578C7.29148 20.1203 6.49382 19.6535 5.76956 19.08L4.21829 19.9729C3.8268 20.1992 3.32765 20.1252 3.01935 19.7941C2.41744 19.152 1.88893 18.4482 1.45339 17.7012C1.42893 17.666 1.40446 17.6277 1.38488 17.5817L1.24297 17.3412C0.851479 16.6051 0.543181 15.8606 0.327862 15.119C0.200628 14.6846 0.391479 14.2207 0.782969 13.9954L2.32935 13.104C2.26573 12.6504 2.23148 12.1993 2.23148 11.7556C2.23148 11.2952 2.26573 10.826 2.33914 10.3533L0.792756 9.45012C0.401267 9.22187 0.220203 8.75461 0.347437 8.32065C0.631267 7.38465 1.03254 6.48881 1.54148 5.65861C1.97212 4.94644 2.48595 4.27395 3.06829 3.66318C3.38148 3.33452 3.87573 3.26301 4.26722 3.49224L5.8185 4.39542C6.52808 3.83265 7.30616 3.38301 8.13807 3.05289V1.27199C8.13807 0.819912 8.44637 0.427095 8.8819 0.32032C10.6289 -0.103844 12.5374 -0.103844 14.2796 0.32032C14.72 0.427095 15.0283 0.819912 15.0283 1.27199V3.05387C15.87 3.39134 16.6725 3.85763 17.3919 4.43167L18.9432 3.53877C19.3396 3.31199 19.8338 3.38644 20.147 3.71754C20.7489 4.36114 21.2774 5.06644 21.713 5.81485C21.7423 5.86089 21.7717 5.9084 21.7962 5.95542C22.2415 6.7342 22.5889 7.54971 22.8336 8.39118C22.9608 8.82563 22.7749 9.29044 22.3834 9.51624L20.8321 10.4077C20.9006 10.8612 20.9349 11.3123 20.9349 11.7556C20.9349 12.2165 20.8957 12.6857 20.8223 13.1584L22.3687 14.0615C22.7602 14.2898 22.9462 14.7561 22.814 15.1895C22.5791 15.9796 22.2513 16.7481 21.8402 17.4749C21.7668 17.6062 21.6983 17.7277 21.6249 17.8447C21.1894 18.5652 20.6755 19.2382 20.0981 19.848C19.7849 20.1771 19.2857 20.2477 18.8942 20.0189L17.3479 19.1162C16.6334 19.679 15.8602 20.1286 15.0283 20.4588V22.2397C15.0283 22.6917 14.72 23.0846 14.2796 23.1913C13.4085 23.4034 12.4983 23.5107 11.5832 23.5107Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5832 9.32718C10.2423 9.32718 9.15595 10.417 9.15595 11.7556C9.15595 13.0947 10.2423 14.1845 11.5832 14.1845C12.9191 14.1845 14.0104 13.0947 14.0104 11.7556C14.0104 10.417 12.9191 9.32718 11.5832 9.32718ZM11.5832 15.6539C9.43489 15.6539 7.68787 13.9053 7.68787 11.7556C7.68787 9.60636 9.43489 7.85779 11.5832 7.85779C13.7315 7.85779 15.4785 9.60636 15.4785 11.7556C15.4785 13.9053 13.7315 15.6539 11.5832 15.6539Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                </div>
            ) : (
                <div className={styles.darkNavbarBg}>
                    <div className={styles.darkHover}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24507 18.5H5.6307V15H4.24507V18.5ZM6.6103 20.5H3.26548C2.72426 20.5 2.28589 20.055 2.28589 19.5V14C2.28589 13.45 2.72426 13 3.26548 13H6.6103C7.15103 13 7.58989 13.45 7.58989 14V19.5C7.58989 20.055 7.15103 20.5 6.6103 20.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3887 18.5H12.7744V8.5H11.3887V18.5ZM13.754 20.5H10.4092C9.86842 20.5 9.42957 20.055 9.42957 19.5V7.5C9.42957 6.95 9.86842 6.5 10.4092 6.5H13.754C14.2952 6.5 14.7336 6.95 14.7336 7.5V19.5C14.7336 20.055 14.2952 20.5 13.754 20.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5329 18.5H19.9185V2H18.5329V18.5ZM20.8981 20.5H17.5533C17.0126 20.5 16.5737 20.055 16.5737 19.5V1C16.5737 0.45 17.0126 0 17.5533 0H20.8981C21.4389 0 21.8777 0.45 21.8777 1V19.5C21.8777 20.055 21.4389 20.5 20.8981 20.5Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8573 24H1.30625C0.765517 24 0.32666 23.555 0.32666 23C0.32666 22.45 0.765517 22 1.30625 22H22.8573C23.398 22 23.8369 22.45 23.8369 23C23.8369 23.555 23.398 24 22.8573 24Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0485 12H2.0835V5H16.0485L18.3815 8.5L16.0485 12ZM20.4155 7.945L17.4155 3.445C17.23 3.17 16.918 3 16.5835 3H10.3335V1C10.3335 0.45 9.8855 0 9.3335 0C8.7815 0 8.3335 0.45 8.3335 1V3H1.0835C0.531496 3 0.0834961 3.45 0.0834961 4V13C0.0834961 13.555 0.531496 14 1.0835 14H8.3335V22H6.974C6.422 22 5.974 22.45 5.974 23C5.974 23.555 6.422 24 6.974 24H11.693C12.245 24 12.693 23.555 12.693 23C12.693 22.45 12.245 22 11.693 22H10.3335V14H16.5835C16.918 14 17.23 13.835 17.4155 13.555L20.4155 9.055C20.6395 8.72 20.6395 8.28 20.4155 7.945Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6529 18H5.51066L4.01237 11.5H20.1511L18.6529 18ZM2.28584 9.5H21.8777V7H2.28584V9.5ZM22.8573 5H21.2145L15.1038 0.500004C14.6649 0.180004 14.0522 0.280004 13.7363 0.730004C13.4199 1.175 13.5188 1.8 13.9577 2.125L17.8653 5H6.29825L10.2058 2.125C10.6447 1.8 10.7436 1.175 10.4272 0.730004C10.1113 0.280004 9.49907 0.180004 9.05972 0.500004L2.94903 5H1.30625C0.765517 5 0.32666 5.45 0.32666 6V10.5C0.32666 11.055 0.765517 11.5 1.30625 11.5H1.9998L3.78119 19.23C3.88552 19.68 4.28029 20 4.73482 20H19.4287C19.8832 20 20.278 19.68 20.3823 19.23L22.1637 11.5H22.8573C23.398 11.5 23.8369 11.055 23.8369 10.5V6C23.8369 5.45 23.398 5 22.8573 5Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6124 16.75C11.0184 16.75 11.3471 16.415 11.3471 16V13.5C11.3471 13.085 11.0184 12.75 10.6124 12.75C10.2063 12.75 9.87769 13.085 9.87769 13.5V16C9.87769 16.415 10.2063 16.75 10.6124 16.75" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5511 16.75C13.9571 16.75 14.2858 16.415 14.2858 16V13.5C14.2858 13.085 13.9571 12.75 13.5511 12.75C13.1451 12.75 12.8164 13.085 12.8164 13.5V16C12.8164 16.415 13.1451 16.75 13.5511 16.75" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4899 16.75C16.896 16.75 17.2246 16.415 17.2246 16V13.5C17.2246 13.085 16.896 12.75 16.4899 12.75C16.0839 12.75 15.7552 13.085 15.7552 13.5V16C15.7552 16.415 16.0839 16.75 16.4899 16.75" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67366 16.75C8.0797 16.75 8.40835 16.415 8.40835 16V13.5C8.40835 13.085 8.0797 12.75 7.67366 12.75C7.26762 12.75 6.93896 13.085 6.93896 13.5V16C6.93896 16.415 7.26762 16.75 7.67366 16.75" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8777 17.72L19.6393 15.665C19.4581 15.495 19.223 15.405 18.983 15.405H6.78217V13.405H18.3609C18.8997 13.405 19.3405 12.96 19.3405 12.405V6.33H21.8777V17.72ZM4.52421 11.665L2.28584 13.72V2.33H17.3814V11.405H5.18054C5.05809 11.405 4.93564 11.43 4.82299 11.475C4.71523 11.52 4.61237 11.58 4.52421 11.665ZM22.8573 4.33H19.3405V1.33C19.3405 0.775002 18.8997 0.330002 18.3609 0.330002H1.30625C0.767476 0.330002 0.32666 0.775002 0.32666 1.33V15.965C0.32666 16.36 0.551966 16.72 0.909517 16.88C1.03686 16.94 1.16911 16.965 1.30625 16.965C1.54135 16.965 1.77646 16.88 1.96258 16.71L4.82299 14.08V16.405C4.82299 16.96 5.2638 17.405 5.80258 17.405H18.6058L22.2009 20.71C22.3871 20.88 22.6222 20.965 22.8573 20.965C22.9944 20.965 23.1267 20.94 23.254 20.88C23.6116 20.72 23.8369 20.36 23.8369 19.965V5.33C23.8369 4.775 23.396 4.33 22.8573 4.33Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1623 17.6331V1.95967H11.0272V5.88686C11.0272 6.42808 11.4631 6.86645 12.0001 6.86645H15.892V17.6331H6.1623ZM12.4866 21.5515H2.27041V5.87804H4.21635V18.6127C4.21635 19.154 4.65225 19.5923 5.18933 19.5923H12.4866V21.5515ZM12.9731 3.3453L14.5245 4.90726H12.9731V3.3453ZM17.5529 5.18547L12.688 0.287509C12.5056 0.103835 12.258 0.000488281 12.0001 0.000488281H5.18933C4.65225 0.000488281 4.21635 0.439345 4.21635 0.98008V3.91886H1.29744C0.760355 3.91886 0.324463 4.35771 0.324463 4.89845V22.5311C0.324463 23.0723 0.760355 23.5107 1.29744 23.5107H13.4596C13.9967 23.5107 14.4326 23.0723 14.4326 22.5311V19.5923H16.865C17.4021 19.5923 17.838 19.154 17.838 18.6127V5.87804C17.838 5.61845 17.7353 5.36914 17.5529 5.18547Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59472 10.0413H11.0272C11.4304 10.0413 11.7569 9.71265 11.7569 9.30661C11.7569 8.90106 11.4304 8.57191 11.0272 8.57191H8.59472C8.19142 8.57191 7.86499 8.90106 7.86499 9.30661C7.86499 9.71265 8.19142 10.0413 8.59472 10.0413Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4596 11.5107H8.59472C8.19142 11.5107 7.86499 11.8398 7.86499 12.2454C7.86499 12.6514 8.19142 12.9801 8.59472 12.9801H13.4596C13.8629 12.9801 14.1893 12.6514 14.1893 12.2454C14.1893 11.8398 13.8629 11.5107 13.4596 11.5107Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4596 14.4495H8.59472C8.19142 14.4495 7.86499 14.7786 7.86499 15.1842C7.86499 15.5902 8.19142 15.9189 8.59472 15.9189H13.4596C13.8629 15.9189 14.1893 15.5902 14.1893 15.1842C14.1893 14.7786 13.8629 14.4495 13.4596 14.4495Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                    <div>
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.09276 16.634C3.09276 16.634 3.09276 16.634 3.09276 16.6344C3.09276 16.634 3.09276 16.634 3.09276 16.634ZM3.11233 16.6624V16.6673C3.11233 16.6677 3.11233 16.6677 3.11233 16.6677C3.11233 16.6677 3.11233 16.6658 3.11233 16.6624ZM10.0955 21.4369C11.0694 21.5897 12.097 21.5897 13.0708 21.4369V19.7657C13.0708 19.3357 13.3498 18.9561 13.7608 18.8292C14.8032 18.5079 15.7525 17.9593 16.5796 17.1992C16.8928 16.9082 17.3625 16.8573 17.7345 17.0738L19.183 17.9206C19.4668 17.5758 19.7213 17.2124 19.9513 16.8338C20.01 16.73 20.0736 16.6183 20.1421 16.5061C20.3477 16.1349 20.5336 15.7469 20.6902 15.3482L19.2368 14.5009C18.8698 14.2844 18.6789 13.8514 18.7768 13.4331C18.9089 12.8645 18.9774 12.3002 18.9774 11.7556C18.9774 11.2237 18.9138 10.6731 18.7866 10.1202C18.6936 9.70138 18.8845 9.26938 19.2564 9.05534L20.7098 8.21828C20.5434 7.77893 20.3379 7.35085 20.103 6.93942C20.0981 6.93256 20.0785 6.89387 20.0736 6.88701C20.0638 6.87036 20.0442 6.83852 20.0345 6.82089C19.7947 6.41044 19.5255 6.01469 19.2221 5.63901L17.7687 6.47607C17.3968 6.69012 16.927 6.63673 16.6138 6.34383C15.7917 5.57877 14.8032 5.00375 13.7608 4.68195C13.3498 4.5551 13.0708 4.1755 13.0708 3.74546V2.07477C12.097 1.92195 11.0694 1.92195 10.0955 2.07477V3.74546C10.0955 4.1755 9.81169 4.5551 9.40063 4.68195C8.35829 5.00375 7.40893 5.55232 6.5868 6.31248C6.26871 6.60342 5.79893 6.65436 5.42701 6.43787L3.9785 5.59101C3.69956 5.93583 3.4451 6.29975 3.2151 6.67787C2.92148 7.1515 2.6768 7.64865 2.47616 8.16342L3.92467 9.01077C4.29659 9.22726 4.48254 9.66024 4.38467 10.0785C4.25254 10.6472 4.18893 11.2114 4.18893 11.7556C4.18893 12.288 4.25254 12.8385 4.37488 13.3915C4.46786 13.8103 4.2819 14.2423 3.90999 14.4563L2.45169 15.2934C2.5985 15.6661 2.76978 16.0389 2.96552 16.4077L3.10744 16.6565C3.11233 16.6677 3.12212 16.6795 3.12701 16.6908C3.3668 17.1012 3.64084 17.497 3.93935 17.8726L5.39765 17.0356C5.76956 16.8215 6.23446 16.8749 6.55254 17.1678C7.36978 17.9329 8.35829 18.5079 9.40063 18.8292C9.81169 18.9561 10.0955 19.3357 10.0955 19.7657V21.4369ZM11.5832 23.5107C10.6632 23.5107 9.75786 23.4034 8.8819 23.1913C8.44637 23.0846 8.13807 22.6917 8.13807 22.2397V20.4578C7.29148 20.1203 6.49382 19.6535 5.76956 19.08L4.21829 19.9729C3.8268 20.1992 3.32765 20.1252 3.01935 19.7941C2.41744 19.152 1.88893 18.4482 1.45339 17.7012C1.42893 17.666 1.40446 17.6277 1.38488 17.5817L1.24297 17.3412C0.851479 16.6051 0.543181 15.8606 0.327862 15.119C0.200628 14.6846 0.391479 14.2207 0.782969 13.9954L2.32935 13.104C2.26573 12.6504 2.23148 12.1993 2.23148 11.7556C2.23148 11.2952 2.26573 10.826 2.33914 10.3533L0.792756 9.45012C0.401267 9.22187 0.220203 8.75461 0.347437 8.32065C0.631267 7.38465 1.03254 6.48881 1.54148 5.65861C1.97212 4.94644 2.48595 4.27395 3.06829 3.66318C3.38148 3.33452 3.87573 3.26301 4.26722 3.49224L5.8185 4.39542C6.52808 3.83265 7.30616 3.38301 8.13807 3.05289V1.27199C8.13807 0.819912 8.44637 0.427095 8.8819 0.32032C10.6289 -0.103844 12.5374 -0.103844 14.2796 0.32032C14.72 0.427095 15.0283 0.819912 15.0283 1.27199V3.05387C15.87 3.39134 16.6725 3.85763 17.3919 4.43167L18.9432 3.53877C19.3396 3.31199 19.8338 3.38644 20.147 3.71754C20.7489 4.36114 21.2774 5.06644 21.713 5.81485C21.7423 5.86089 21.7717 5.9084 21.7962 5.95542C22.2415 6.7342 22.5889 7.54971 22.8336 8.39118C22.9608 8.82563 22.7749 9.29044 22.3834 9.51624L20.8321 10.4077C20.9006 10.8612 20.9349 11.3123 20.9349 11.7556C20.9349 12.2165 20.8957 12.6857 20.8223 13.1584L22.3687 14.0615C22.7602 14.2898 22.9462 14.7561 22.814 15.1895C22.5791 15.9796 22.2513 16.7481 21.8402 17.4749C21.7668 17.6062 21.6983 17.7277 21.6249 17.8447C21.1894 18.5652 20.6755 19.2382 20.0981 19.848C19.7849 20.1771 19.2857 20.2477 18.8942 20.0189L17.3479 19.1162C16.6334 19.679 15.8602 20.1286 15.0283 20.4588V22.2397C15.0283 22.6917 14.72 23.0846 14.2796 23.1913C13.4085 23.4034 12.4983 23.5107 11.5832 23.5107Z" fill="#B8C5D3" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5832 9.32718C10.2423 9.32718 9.15595 10.417 9.15595 11.7556C9.15595 13.0947 10.2423 14.1845 11.5832 14.1845C12.9191 14.1845 14.0104 13.0947 14.0104 11.7556C14.0104 10.417 12.9191 9.32718 11.5832 9.32718ZM11.5832 15.6539C9.43489 15.6539 7.68787 13.9053 7.68787 11.7556C7.68787 9.60636 9.43489 7.85779 11.5832 7.85779C13.7315 7.85779 15.4785 9.60636 15.4785 11.7556C15.4785 13.9053 13.7315 15.6539 11.5832 15.6539Z" fill="#B8C5D3" />
                        </svg>
                    </div>

                </div>
            )}
        </div>
    )
}