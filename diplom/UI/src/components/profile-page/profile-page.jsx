import React, { Component } from 'react';



function ProfilePage({ }) { 


    return (

<div class="profile-page">
  <div class="navbar-profile__page">
    <div class="logo__top-left"><svg width="77" height="60" viewBox="0 0 77 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9074 40.159C23.8286 39.6873 23.6932 39.2145 23.5023 38.7551C22.9334 37.3882 22.6222 35.9453 22.4808 34.4797C23.9943 35.38 25.4533 36.3697 26.7931 37.5342C29.3969 39.7952 33.1929 35.971 30.571 33.6914C27.7429 31.2351 24.6006 29.3646 21.2895 27.6698C21.2218 27.6349 21.1551 27.6071 21.0874 27.5794C20.3286 26.9041 19.3435 26.4817 18.3523 26.4756C15.99 26.4591 14.3572 28.3646 14.1945 30.6441C14.1268 31.5783 14.1238 32.4992 14.1622 33.4129C13.2407 34.5516 12.1212 35.5023 10.7198 36.2145C7.6381 37.7788 10.3439 42.4663 13.4165 40.9052C14.0561 40.5814 14.6573 40.196 15.2363 39.7818C15.5565 40.8672 15.9365 41.9422 16.38 43.0069C16.3921 43.0357 16.4083 43.0624 16.4214 43.0891C15.1898 45.3862 14.2764 47.8363 14.1915 50.5013C14.0693 54.2834 16.7549 57.1518 19.8871 58.7027C22.9708 60.2269 25.6807 55.5455 22.5838 54.0121C20.7338 53.0943 19.4799 52.1477 19.5506 49.9442C19.5951 48.5619 20.2054 47.1529 20.947 45.8415C23.1496 49.7171 25.4058 53.5609 27.6711 57.3995C29.4403 60.3995 34.0599 57.6698 32.2826 54.6585C29.4474 49.8497 26.6254 45.0357 23.9074 40.159Z" fill="#FF4C61"/>
      <path d="M17.2115 26.0624C19.4464 26.0624 21.2582 24.2196 21.2582 21.9463C21.2582 19.673 19.4464 17.8301 17.2115 17.8301C14.9767 17.8301 13.1649 19.673 13.1649 21.9463C13.1649 24.2196 14.9767 26.0624 17.2115 26.0624Z" fill="#FF4C61"/>
      <path d="M45.0398 25.679C47.2747 25.679 49.0864 23.8362 49.0864 21.5629C49.0864 19.2896 47.2747 17.4468 45.0398 17.4468C42.8049 17.4468 40.9932 19.2896 40.9932 21.5629C40.9932 23.8362 42.8049 25.679 45.0398 25.679Z" fill="#FF4C61"/>
      <path d="M65.0748 42.5814C63.9877 43.4982 62.8358 44.3296 61.7143 45.197C60.4866 43.4756 59.1782 41.7818 58.1567 39.9514C58.0748 39.5249 57.9384 39.0994 57.7515 38.6893C56.9563 36.9607 56.1884 35.2207 55.4428 33.4704C57.6333 34.1343 59.8895 34.5876 62.2013 34.8897C65.6114 35.3337 65.5699 29.8959 62.2013 29.455C58.4093 28.9596 54.7284 27.8198 51.4093 25.8743C51.4002 25.8702 51.3921 25.8661 51.386 25.862C50.5232 25.2926 49.4693 25.0727 48.2649 25.4005C47.5799 25.5865 46.9141 26.0161 46.3725 26.5794C43.6151 28.0716 41.0477 29.8589 38.7046 31.9802C38.5925 32.0819 38.4965 32.1868 38.4076 32.2926L32.613 28.1158L31.6309 29.5269L37.8579 34.0172C38.0175 35.5269 39.6564 36.8527 41.268 36.4756L41.3357 36.5249L41.3953 36.4406C41.7671 36.3327 42.1329 36.1354 42.4804 35.8219C43.6808 34.7356 44.963 33.7695 46.3048 32.8949C47.5546 35.9514 48.8429 38.9915 50.2019 41.9997C48.363 46.0603 45.8451 49.7921 43.7768 53.753C42.1591 56.8445 46.7726 59.5907 48.3862 56.4941C50.4272 52.5917 52.8117 48.901 54.7011 44.9565C54.8264 44.938 54.9497 44.9185 55.072 44.8928C56.3289 46.7695 57.6747 48.5968 58.8266 50.567C59.7278 52.1045 61.7668 52.3193 63.0207 51.1148C64.8263 49.3841 66.938 48.0295 68.8487 46.4252C71.509 44.1898 67.7079 40.3687 65.0748 42.5814Z" fill="#FF4C61"/>
      <mask id="path-5-inside-1" fill="white">
        <path d="M77 37.4431C77 37.4431 77 3.62353 39.5569 3.62353C0 3.62353 0 36.5372 0 36.5372C0 15.858 18.8776 0 39.5569 0C60.2361 0 77 16.7639 77 37.4431Z"/>
      </mask>
      <path d="M77 37.4431C81 37.4431 81 37.4408 81 37.4384C81 37.4374 81 37.4349 81 37.4329C81 37.429 81 37.4245 80.9999 37.4195C80.9999 37.4096 80.9998 37.3975 80.9997 37.3835C80.9995 37.3553 80.999 37.319 80.9982 37.2747C80.9966 37.1862 80.9937 37.0658 80.9881 36.9158C80.9771 36.6159 80.9557 36.1965 80.9144 35.6746C80.832 34.6322 80.6695 33.1725 80.3485 31.433C79.7097 27.9707 78.4252 23.3037 75.8192 18.5961C73.2005 13.8655 69.2334 9.07377 63.2671 5.48112C57.2942 1.88453 49.5393 -0.376472 39.5569 -0.376472V7.62353C48.296 7.62353 54.5823 9.58997 59.1403 12.3346C63.7048 15.0831 66.7584 18.7463 68.82 22.4706C70.8944 26.2178 71.9501 30.0057 72.4814 32.8847C72.7454 34.3157 72.8755 35.4982 72.9393 36.3053C72.9712 36.7081 72.9864 37.0153 72.9936 37.2108C72.9972 37.3085 72.9988 37.3781 72.9995 37.4175C72.9998 37.4372 73 37.4494 73 37.4538C73 37.4559 73 37.4562 73 37.4544C73 37.4535 73 37.4521 73 37.4503C73 37.4493 73 37.4475 73 37.4471C73 37.4452 73 37.4431 77 37.4431ZM39.5569 -0.376472C18.4262 -0.376472 7.21017 8.54435 1.51603 18.0201C-1.25341 22.6288 -2.62228 27.2054 -3.30402 30.6089C-3.64632 32.3178 -3.81987 33.7533 -3.90808 34.7809C-3.95225 35.2954 -3.97521 35.7098 -3.98714 36.0075C-3.9931 36.1564 -3.99632 36.2764 -3.99804 36.3653C-3.9989 36.4098 -3.99939 36.4465 -3.99967 36.4752C-3.9998 36.4896 -3.99989 36.502 -3.99994 36.5123C-3.99996 36.5175 -3.99998 36.5222 -3.99999 36.5263C-3.99999 36.5284 -4 36.5311 -4 36.5322C-4 36.5348 -4 36.5372 0 36.5372C4 36.5372 4 36.5395 4 36.5416C4 36.5421 3.99999 36.5441 3.99999 36.5452C3.99999 36.5473 3.99998 36.549 3.99997 36.5502C3.99996 36.5525 3.99996 36.553 3.99997 36.5515C4 36.5486 4.00011 36.5382 4.00046 36.5204C4.00115 36.4847 4.00276 36.4199 4.00645 36.3277C4.01384 36.1433 4.02951 35.8506 4.0626 35.4651C4.12891 34.6927 4.2644 33.5568 4.54017 32.1801C5.09459 29.4122 6.19802 25.7604 8.37319 22.1407C12.5683 15.1596 21.1307 7.62353 39.5569 7.62353V-0.376472ZM4 36.5372C4 18.4663 20.6652 4 39.5569 4V-4C17.09 -4 -4 13.2496 -4 36.5372H4ZM39.5569 4C58.027 4 73 18.973 73 37.4431H81C81 14.5547 62.4453 -4 39.5569 -4V4Z" fill="#FF4C61" mask="url(#path-5-inside-1)"/>
    </svg>
    </div>
    <div class="navbar-profile__router-links">
      <div class="profile-page__username">Petr</div>
                    <div class="profile-page__avatar">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <circle cx="25" cy="25" r="25" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0" transform="translate(-2.0528 -1.02724) scale(0.00255)"/>
          </pattern>
        </defs>
      </svg>
      </div>
      <div class="profile-page__notifications"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="18" cy="4" r="3" fill="#6F52ED"/>
      </svg>
      </div>
      <div class="profile-page__logout"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 17L21 12L16 7" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 12H9" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
    </div>
  </div>
  <div class="profile-page__main">
    <div class="left-router">
      <div class="planet-svg"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9875 2.5C8.0875 2.5 2.5 8.1 2.5 15C2.5 21.9 8.0875 27.5 14.9875 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 14.9875 2.5ZM23.65 10H19.9625C19.5625 8.4375 18.9875 6.9375 18.2375 5.55C20.5375 6.3375 22.45 7.9375 23.65 10ZM15 5.05C16.0375 6.55 16.85 8.2125 17.3875 10H12.6125C13.15 8.2125 13.9625 6.55 15 5.05ZM5.325 17.5C5.125 16.7 5 15.8625 5 15C5 14.1375 5.125 13.3 5.325 12.5H9.55C9.45 13.325 9.375 14.15 9.375 15C9.375 15.85 9.45 16.675 9.55 17.5H5.325ZM6.35 20H10.0375C10.4375 21.5625 11.0125 23.0625 11.7625 24.45C9.4625 23.6625 7.55 22.075 6.35 20ZM10.0375 10H6.35C7.55 7.925 9.4625 6.3375 11.7625 5.55C11.0125 6.9375 10.4375 8.4375 10.0375 10ZM15 24.95C13.9625 23.45 13.15 21.7875 12.6125 20H17.3875C16.85 21.7875 16.0375 23.45 15 24.95ZM17.925 17.5H12.075C11.9625 16.675 11.875 15.85 11.875 15C11.875 14.15 11.9625 13.3125 12.075 12.5H17.925C18.0375 13.3125 18.125 14.15 18.125 15C18.125 15.85 18.0375 16.675 17.925 17.5ZM18.2375 24.45C18.9875 23.0625 19.5625 21.5625 19.9625 20H23.65C22.45 22.0625 20.5375 23.6625 18.2375 24.45ZM20.45 17.5C20.55 16.675 20.625 15.85 20.625 15C20.625 14.15 20.55 13.325 20.45 12.5H24.675C24.875 13.3 25 14.1375 25 15C25 15.8625 24.875 16.7 24.675 17.5H20.45Z" fill="#969CBA" fill-opacity="0.87"/>
      </svg>
      </div>
      <div class="statistic-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12V21H6V12H2Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 7V21H22V7H18Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 3V21H14V3H10Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div class="vip-svg">vip</div>
    </div>
    <div class="profile-data">
      <div class="profile-data__header">
        <div class="profile-data__header-title">Профиль</div>
        <div class="profile-data__header-btn">
          <button class="add-data__btn"></button>
        </div>
      </div>
      <div>
        {/* <!--      тут по идее компоненты с результатами, отрисовал один--> */}
        <div class="profile-data__mark">
          <div class="image-mark">5</div>
          <div class="mark-descriptions">отлично</div>
        </div>
        <div>
          <div class="statistics-graph">graph</div>
          <div class="biology-stuff">biology</div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }


export { ProfilePage };