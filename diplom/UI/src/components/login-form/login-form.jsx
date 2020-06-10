import React, { useState } from 'react';



function LoginForm({ }) { 


  const [user, setUser] = useState({
    login: null,
    password:null
  }); 
  const onSubmit = async e => {
    e.preventDefault();
    let resp = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const data = await resp.json();
    if (data.status === 1) {
     setUser({
       login: null,
        password: null
      });
    } else {
      this.props.history.push("/profile/data.login");
    }
  };


    return (
<div class="auth-body">
  <div class="main-page__registration__header">
    <div class="main-logo"><svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.3629 68.0616C40.2298 67.2621 40.0013 66.4608 39.6789 65.6822C38.7185 63.3656 38.1931 60.9201 37.9542 58.4362C40.5096 59.9621 42.9729 61.6394 45.2348 63.6129C49.6308 67.445 56.0397 60.9636 51.613 57.1002C46.8383 52.9372 41.5331 49.7671 35.943 46.8948C35.8287 46.8356 35.7161 46.7885 35.6019 46.7415C34.3208 45.5971 32.6575 44.8812 30.9841 44.8708C26.9958 44.8429 24.2391 48.0723 23.9645 51.9357C23.8502 53.519 23.8451 55.0797 23.9099 56.6282C22.3542 58.5581 20.4641 60.1693 18.0981 61.3764C12.8952 64.0275 17.4635 71.972 22.651 69.3262C23.7308 68.7775 24.7458 68.1243 25.7232 67.4223C26.264 69.2617 26.9054 71.0837 27.6543 72.8882C27.6747 72.937 27.702 72.9823 27.7242 73.0276C25.6448 76.9206 24.1027 81.0731 23.9594 85.5897C23.753 91.9997 28.2871 96.8611 33.5753 99.4895C38.7816 102.073 43.3567 94.1386 38.1282 91.5398C35.0048 89.9843 32.8878 88.3801 33.0072 84.6456C33.0823 82.3028 34.1126 79.9148 35.3647 77.6922C39.0835 84.2607 42.8927 90.7751 46.7172 97.2809C49.7042 102.365 57.5033 97.739 54.5027 92.6354C49.7161 84.4854 44.9517 76.3266 40.3629 68.0616Z" fill="#FF4C61"/>
      <path d="M29.0585 44.1706C32.8317 44.1706 35.8905 41.0473 35.8905 37.1946C35.8905 33.3418 32.8317 30.2185 29.0585 30.2185C25.2853 30.2185 22.2266 33.3418 22.2266 37.1946C22.2266 41.0473 25.2853 44.1706 29.0585 44.1706Z" fill="#FF4C61"/>
      <path d="M76.0409 43.5209C79.8141 43.5209 82.8729 40.3977 82.8729 36.5449C82.8729 32.6921 79.8141 29.5688 76.0409 29.5688C72.2678 29.5688 69.209 32.6921 69.209 36.5449C69.209 40.3977 72.2678 43.5209 76.0409 43.5209Z" fill="#FF4C61"/>
      <path d="M109.866 72.1671C108.031 73.7208 106.086 75.1299 104.193 76.6C102.12 73.6825 99.9108 70.8119 98.1862 67.7097C98.048 66.9869 97.8177 66.2657 97.5022 65.5707C96.1596 62.641 94.8632 59.692 93.6043 56.7257C97.3026 57.8509 101.112 58.6191 105.015 59.1312C110.772 59.8836 110.702 50.6676 105.015 49.9203C98.6127 49.0808 92.3982 47.1491 86.7945 43.8518C86.7791 43.8448 86.7655 43.8379 86.7552 43.8309C85.2984 42.8659 83.5192 42.4932 81.4859 43.0488C80.3293 43.3641 79.2051 44.0922 78.2908 45.0467C73.6355 47.5758 69.3009 50.6049 65.345 54.2C65.1557 54.3725 64.9936 54.5501 64.8435 54.7296L55.0604 47.6507L53.4023 50.0423L63.9155 57.6524C64.1851 60.2111 66.952 62.4581 69.6728 61.8188L69.7871 61.9024L69.8877 61.7596C70.5155 61.5767 71.133 61.2423 71.7198 60.711C73.7464 58.8699 75.9111 57.2326 78.1765 55.7503C80.2866 60.9305 82.4616 66.0828 84.756 71.1812C81.6513 78.0632 77.4003 84.3878 73.9084 91.1008C71.1774 96.3403 78.9663 100.994 81.6906 95.7463C85.1364 89.1325 89.1622 82.8776 92.3522 76.1925C92.5637 76.1611 92.7718 76.128 92.9782 76.0845C95.1003 79.2651 97.3725 82.362 99.3172 85.7011C100.839 88.3069 104.281 88.671 106.398 86.6295C109.447 83.6963 113.012 81.4005 116.238 78.6815C120.729 74.893 114.312 68.4169 109.866 72.1671Z" fill="#FF4C61"/>
      <path d="M38.6292 8.17457C47.2903 4.21032 56.9005 2 66.7843 2C76.7827 2 86.2223 4.40694 94.5588 8.67557C86.9109 5.8338 77.7491 4.14118 66.7843 4.14118C55.7328 4.14118 46.4396 5.64513 38.6292 8.17457Z" stroke="#FF4C61" stroke-width="4"/>
    </svg>
    </div>
    <div class="navbar-router">
      {/* <!--  todo    вот тут поменял классы--> */}
      <a href="/blog" class="navbar-router__btn__blog href">блог</a>
      <a href="/registration" class="navbar-router__btn__registration href">регистрация</a>
      <div class="navbar-router__btn__login">
        <a href="/" class="navbar-router__btn__login-title href">вход</a>
        <div class="navbar-router__btn__login-img"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 22.5C26.6437 22.5 30 19.1437 30 15C30 10.8562 26.6437 7.5 22.5 7.5C18.3562 7.5 15 10.8562 15 15C15 19.1437 18.3562 22.5 22.5 22.5ZM22.5 26.25C17.4937 26.25 7.5 28.7625 7.5 33.75V37.5H37.5V33.75C37.5 28.7625 27.5062 26.25 22.5 26.25Z" fill="#00C9DF" fill-opacity="0.87"/>
        </svg></div>
      </div>
    </div>
  </div>
  <div class="main-page__login__main">
    <div class="main-page__title">ВХОД</div>
    <form action="#" class="registration-form" onSubmit = {onSubmit}>
     <input onChange={(e) => setUser(user.login = e)} type="text" class="main-page__input" placeholder="логин"/>
      <input onChange={(e) => setUser(user.password = e)} type="password" class="main-page__input" placeholder="пароль"/>
      <input type="submit" class="main-page__submit__reg" value="вход"/>
    </form>
  </div>
  <div class="main-page__registration__footer">
    <div class="footer-date">2020</div>
    <div class="social">
      <div class="footer-social__btn"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM33.1269 31.3178V47.6393H26.3738V31.3184H23V25.6939H26.3738V22.317C26.3738 17.7285 28.2789 15 33.6915 15H38.1976V20.6251H35.381C33.274 20.6251 33.1346 21.4112 33.1346 22.8781L33.1269 25.6933H38.2295L37.6324 31.3178H33.1269Z" fill="white"/>
      </svg>
      </div>
      <div class="footer-social__btn"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM23.4041 14.0967C25.1108 14.019 25.6561 14 30.0015 14H29.9965C34.3432 14 34.8866 14.019 36.5932 14.0967C38.2966 14.1747 39.4599 14.4443 40.4799 14.84C41.5333 15.2483 42.4233 15.795 43.3133 16.685C44.2033 17.5744 44.75 18.467 45.16 19.5194C45.5533 20.5367 45.8233 21.6994 45.9033 23.4028C45.98 25.1094 46 25.6548 46 30.0002C46 34.3455 45.98 34.8895 45.9033 36.5962C45.8233 38.2989 45.5533 39.4619 45.16 40.4796C44.75 41.5316 44.2033 42.4243 43.3133 43.3136C42.4243 44.2036 41.533 44.7517 40.4809 45.1603C39.4629 45.556 38.2989 45.8257 36.5956 45.9037C34.8889 45.9813 34.3452 46.0003 29.9995 46.0003C25.6545 46.0003 25.1094 45.9813 23.4028 45.9037C21.6997 45.8257 20.5367 45.556 19.5187 45.1603C18.467 44.7517 17.5744 44.2036 16.6854 43.3136C15.7957 42.4243 15.249 41.5316 14.84 40.4793C14.4447 39.4619 14.175 38.2993 14.0967 36.5959C14.0193 34.8892 14 34.3455 14 30.0002C14 25.6548 14.02 25.1091 14.0963 23.4024C14.173 21.6997 14.443 20.5367 14.8397 19.5191C15.2497 18.467 15.7964 17.5744 16.6864 16.685C17.5757 15.7954 18.4684 15.2487 19.5207 14.84C20.5381 14.4443 21.7007 14.1747 23.4041 14.0967Z" fill="white"/>
      </svg>
      </div>
      <div class="footer-social__btn"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM32.4427 39.4702C32.1469 39.7821 31.5693 39.8451 31.5693 39.8451H29.6567C29.6567 39.8451 25.4372 40.094 21.72 36.2962C17.6664 32.1528 14.0869 23.9319 14.0869 23.9319C14.0869 23.9319 13.8803 23.3927 14.1041 23.133C14.3561 22.8396 15.0432 22.8212 15.0432 22.8212L19.6149 22.792C19.6149 22.792 20.0453 22.8611 20.3537 23.0839C20.6088 23.2682 20.7512 23.6108 20.7512 23.6108C20.7512 23.6108 21.4899 25.4452 22.4681 27.1044C24.3792 30.3445 25.2682 31.0528 25.9161 30.7055C26.8614 30.2001 26.5782 26.1258 26.5782 26.1258C26.5782 26.1258 26.5954 24.6478 26.1024 23.9888C25.7205 23.4787 25.0005 23.3297 24.6828 23.2882C24.4245 23.2544 24.8471 22.6675 25.3949 22.4048C26.2182 22.01 27.6706 21.9869 29.3876 22.0038C30.7257 22.0177 31.1107 22.0991 31.6335 22.2235C32.8467 22.5109 32.8089 23.4319 32.7271 25.4196C32.7027 26.0141 32.6743 26.7039 32.6743 27.5008C32.6743 27.6799 32.669 27.8707 32.6635 28.0671C32.6351 29.0854 32.6027 30.2515 33.2863 30.6856C33.6369 30.9068 34.493 30.7178 36.6356 27.1474C37.6514 25.4544 38.412 23.4649 38.412 23.4649C38.412 23.4649 38.5795 23.11 38.8378 22.9579C39.1023 22.8027 39.4591 22.8504 39.4591 22.8504L44.2703 22.8212C44.2703 22.8212 45.7165 22.6506 45.9497 23.2928C46.1954 23.9642 45.4097 25.5343 43.4439 28.1061C41.5792 30.5463 40.6717 31.4448 40.755 32.2394C40.8159 32.82 41.4058 33.3451 42.5377 34.3758C44.9007 36.5293 45.5341 37.6624 45.6863 37.9346C45.6989 37.9571 45.7082 37.9738 45.7149 37.9846C46.7745 39.7099 44.5395 39.8451 44.5395 39.8451L40.2651 39.9035C40.2651 39.9035 39.348 40.0817 38.1397 39.2674C37.5068 38.8413 36.8883 38.1452 36.2992 37.4823C35.3995 36.4698 34.5685 35.5345 33.8591 35.7554C32.668 36.1272 32.704 38.6452 32.704 38.6452C32.704 38.6452 32.7134 39.1845 32.4427 39.4702Z" fill="white"/>
      </svg>
      </div>
    </div>
  </div>
</div>
    );
  }


export { LoginForm };