import React, {Component} from "react";

function Menu({}) {
    return (
        <div className="menu">
            <div className="menu__logo">
                <svg width="77" height="60">
                    <path
                        d="M23.9074 40.159C23.8286 39.6873 23.6932 39.2145 23.5023 38.7551C22.9334 37.3882 22.6222 35.9453 22.4808 34.4797C23.9943 35.38 25.4533 36.3697 26.7931 37.5342C29.3969 39.7952 33.1929 35.971 30.571 33.6914C27.7429 31.2351 24.6006 29.3646 21.2895 27.6698C21.2218 27.6349 21.1551 27.6071 21.0874 27.5794C20.3286 26.9041 19.3435 26.4817 18.3523 26.4756C15.99 26.4591 14.3572 28.3646 14.1945 30.6441C14.1268 31.5783 14.1238 32.4992 14.1622 33.4129C13.2407 34.5516 12.1212 35.5023 10.7198 36.2145C7.6381 37.7788 10.3439 42.4663 13.4165 40.9052C14.0561 40.5814 14.6573 40.196 15.2363 39.7818C15.5565 40.8672 15.9365 41.9422 16.38 43.0069C16.3921 43.0357 16.4083 43.0624 16.4214 43.0891C15.1898 45.3862 14.2764 47.8363 14.1915 50.5013C14.0693 54.2834 16.7549 57.1518 19.8871 58.7027C22.9708 60.2269 25.6807 55.5455 22.5838 54.0121C20.7338 53.0943 19.4799 52.1477 19.5506 49.9442C19.5951 48.5619 20.2054 47.1529 20.947 45.8415C23.1496 49.7171 25.4058 53.5609 27.6711 57.3995C29.4403 60.3995 34.0599 57.6698 32.2826 54.6585C29.4474 49.8497 26.6254 45.0357 23.9074 40.159Z"
                        fill="#FF4C61"/>
                    <path
                        d="M17.2115 26.0624C19.4464 26.0624 21.2582 24.2196 21.2582 21.9463C21.2582 19.673 19.4464 17.8301 17.2115 17.8301C14.9767 17.8301 13.1649 19.673 13.1649 21.9463C13.1649 24.2196 14.9767 26.0624 17.2115 26.0624Z"
                        fill="#FF4C61"/>
                    <path
                        d="M45.0398 25.679C47.2747 25.679 49.0864 23.8362 49.0864 21.5629C49.0864 19.2896 47.2747 17.4468 45.0398 17.4468C42.8049 17.4468 40.9932 19.2896 40.9932 21.5629C40.9932 23.8362 42.8049 25.679 45.0398 25.679Z"
                        fill="#FF4C61"/>
                    <path
                        d="M65.0748 42.5814C63.9877 43.4982 62.8358 44.3296 61.7143 45.197C60.4866 43.4756 59.1782 41.7818 58.1567 39.9514C58.0748 39.5249 57.9384 39.0994 57.7515 38.6893C56.9563 36.9607 56.1884 35.2207 55.4428 33.4704C57.6333 34.1343 59.8895 34.5876 62.2013 34.8897C65.6114 35.3337 65.5699 29.8959 62.2013 29.455C58.4093 28.9596 54.7284 27.8198 51.4093 25.8743C51.4002 25.8702 51.3921 25.8661 51.386 25.862C50.5232 25.2926 49.4693 25.0727 48.2649 25.4005C47.5799 25.5865 46.9141 26.0161 46.3725 26.5794C43.6151 28.0716 41.0477 29.8589 38.7046 31.9802C38.5925 32.0819 38.4965 32.1868 38.4076 32.2926L32.613 28.1158L31.6309 29.5269L37.8579 34.0172C38.0175 35.5269 39.6564 36.8527 41.268 36.4756L41.3357 36.5249L41.3953 36.4406C41.7671 36.3327 42.1329 36.1354 42.4804 35.8219C43.6808 34.7356 44.963 33.7695 46.3048 32.8949C47.5546 35.9514 48.8429 38.9915 50.2019 41.9997C48.363 46.0603 45.8451 49.7921 43.7768 53.753C42.1591 56.8445 46.7726 59.5907 48.3862 56.4941C50.4272 52.5917 52.8117 48.901 54.7011 44.9565C54.8264 44.938 54.9497 44.9185 55.072 44.8928C56.3289 46.7695 57.6747 48.5968 58.8266 50.567C59.7278 52.1045 61.7668 52.3193 63.0207 51.1148C64.8263 49.3841 66.938 48.0295 68.8487 46.4252C71.509 44.1898 67.7079 40.3687 65.0748 42.5814Z"
                        fill="#FF4C61"/>
                    <mask id="path-5-inside-1" fill="white">
                        <path
                            d="M77 37.4431C77 37.4431 77 3.62353 39.5569 3.62353C0 3.62353 0 36.5372 0 36.5372C0 15.858 18.8776 0 39.5569 0C60.2361 0 77 16.7639 77 37.4431Z"/>
                    </mask>
                    <path
                        d="M77 37.4431C81 37.4431 81 37.4408 81 37.4384C81 37.4374 81 37.4349 81 37.4329C81 37.429 81 37.4245 80.9999 37.4195C80.9999 37.4096 80.9998 37.3975 80.9997 37.3835C80.9995 37.3553 80.999 37.319 80.9982 37.2747C80.9966 37.1862 80.9937 37.0658 80.9881 36.9158C80.9771 36.6159 80.9557 36.1965 80.9144 35.6746C80.832 34.6322 80.6695 33.1725 80.3485 31.433C79.7097 27.9707 78.4252 23.3037 75.8192 18.5961C73.2005 13.8655 69.2334 9.07377 63.2671 5.48112C57.2942 1.88453 49.5393 -0.376472 39.5569 -0.376472V7.62353C48.296 7.62353 54.5823 9.58997 59.1403 12.3346C63.7048 15.0831 66.7584 18.7463 68.82 22.4706C70.8944 26.2178 71.9501 30.0057 72.4814 32.8847C72.7454 34.3157 72.8755 35.4982 72.9393 36.3053C72.9712 36.7081 72.9864 37.0153 72.9936 37.2108C72.9972 37.3085 72.9988 37.3781 72.9995 37.4175C72.9998 37.4372 73 37.4494 73 37.4538C73 37.4559 73 37.4562 73 37.4544C73 37.4535 73 37.4521 73 37.4503C73 37.4493 73 37.4475 73 37.4471C73 37.4452 73 37.4431 77 37.4431ZM39.5569 -0.376472C18.4262 -0.376472 7.21017 8.54435 1.51603 18.0201C-1.25341 22.6288 -2.62228 27.2054 -3.30402 30.6089C-3.64632 32.3178 -3.81987 33.7533 -3.90808 34.7809C-3.95225 35.2954 -3.97521 35.7098 -3.98714 36.0075C-3.9931 36.1564 -3.99632 36.2764 -3.99804 36.3653C-3.9989 36.4098 -3.99939 36.4465 -3.99967 36.4752C-3.9998 36.4896 -3.99989 36.502 -3.99994 36.5123C-3.99996 36.5175 -3.99998 36.5222 -3.99999 36.5263C-3.99999 36.5284 -4 36.5311 -4 36.5322C-4 36.5348 -4 36.5372 0 36.5372C4 36.5372 4 36.5395 4 36.5416C4 36.5421 3.99999 36.5441 3.99999 36.5452C3.99999 36.5473 3.99998 36.549 3.99997 36.5502C3.99996 36.5525 3.99996 36.553 3.99997 36.5515C4 36.5486 4.00011 36.5382 4.00046 36.5204C4.00115 36.4847 4.00276 36.4199 4.00645 36.3277C4.01384 36.1433 4.02951 35.8506 4.0626 35.4651C4.12891 34.6927 4.2644 33.5568 4.54017 32.1801C5.09459 29.4122 6.19802 25.7604 8.37319 22.1407C12.5683 15.1596 21.1307 7.62353 39.5569 7.62353V-0.376472ZM4 36.5372C4 18.4663 20.6652 4 39.5569 4V-4C17.09 -4 -4 13.2496 -4 36.5372H4ZM39.5569 4C58.027 4 73 18.973 73 37.4431H81C81 14.5547 62.4453 -4 39.5569 -4V4Z"
                        fill="#FF4C61" mask="url(#path-5-inside-1)"/>
                </svg>
            </div>
            <div className="menu__router">
                <div className="menu__icon">
                    <svg width="26" height="26">
                        <path
                            d="M12.9875 0.5C6.0875 0.5 0.5 6.1 0.5 13C0.5 19.9 6.0875 25.5 12.9875 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 12.9875 0.5ZM21.65 8H17.9625C17.5625 6.4375 16.9875 4.9375 16.2375 3.55C18.5375 4.3375 20.45 5.9375 21.65 8ZM13 3.05C14.0375 4.55 14.85 6.2125 15.3875 8H10.6125C11.15 6.2125 11.9625 4.55 13 3.05ZM3.325 15.5C3.125 14.7 3 13.8625 3 13C3 12.1375 3.125 11.3 3.325 10.5H7.55C7.45 11.325 7.375 12.15 7.375 13C7.375 13.85 7.45 14.675 7.55 15.5H3.325ZM4.35 18H8.0375C8.4375 19.5625 9.0125 21.0625 9.7625 22.45C7.4625 21.6625 5.55 20.075 4.35 18ZM8.0375 8H4.35C5.55 5.925 7.4625 4.3375 9.7625 3.55C9.0125 4.9375 8.4375 6.4375 8.0375 8ZM13 22.95C11.9625 21.45 11.15 19.7875 10.6125 18H15.3875C14.85 19.7875 14.0375 21.45 13 22.95ZM15.925 15.5H10.075C9.9625 14.675 9.875 13.85 9.875 13C9.875 12.15 9.9625 11.3125 10.075 10.5H15.925C16.0375 11.3125 16.125 12.15 16.125 13C16.125 13.85 16.0375 14.675 15.925 15.5ZM16.2375 22.45C16.9875 21.0625 17.5625 19.5625 17.9625 18H21.65C20.45 20.0625 18.5375 21.6625 16.2375 22.45ZM18.45 15.5C18.55 14.675 18.625 13.85 18.625 13C18.625 12.15 18.55 11.325 18.45 10.5H22.675C22.875 11.3 23 12.1375 23 13C23 13.8625 22.875 14.7 22.675 15.5H18.45Z"
                            fill="#969CBA"/>
                    </svg>
                </div>
                <div className="menu__icon menu__icon--active">
                    <svg width="24" height="24">
                        <path d="M2 12V21H6V12H2Z" fill="#969CBA" fillOpacity="0.2" stroke="#969CBA"
                              strokeWidth="2"/>
                        <path d="M18 7V21H22V7H18Z" fill="#969CBA" fillOpacity="0.2" stroke="#969CBA"
                              strokeWidth="2"/>
                        <path d="M10 3V21H14V3H10Z" fill="#969CBA" fillOpacity="0.2" stroke="#969CBA"
                              strokeWidth="2"/>
                    </svg>
                </div>
                <div className="menu__icon">vip</div>
            </div>
            <div className="menu__settings">
                <div className="menu__icon">
                    <svg width="24" height="24">
                        <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="#969CBA" strokeWidth="2"/>
                        <path
                            d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                            fill="#969CBA" fillOpacity="0.2" stroke="#969CBA" strokeWidth="2"
                            />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export {Menu}