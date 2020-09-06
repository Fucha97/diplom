import React, {Component} from "react";

function Navbar({}) {
    return (
        <div className="navbar">
        <div className="navbar__link">Petr</div>
    <div className="navbar__avatar">
        <img src="https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-63-650x525.jpg" alt=""/>
    </div>
    <div className="navbar__border">
        {/*todo не придумал как лучше сделать вертикальную палку в навбаре поэтому сделал так*/}
    </div>
    <div className="navbar__link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#C9CED6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#C9CED6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {/*todo Добавлять cricle снизу если есть уведомления*/}
            {/*<circle cx="18" cy="4" r="3" fill="#6F52ED"/>*/}
        </svg>
    </div>
    <div className="navbar__link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#C9CED6" strokeWidth="2"/>
            <path d="M16 17L21 12L16 7" stroke="#C9CED6" strokeWidth="2"/>
            <path d="M21 12H9" stroke="#C9CED6" strokeWidth="2"/>
        </svg>
    </div>
</div>
    )
}

export {Navbar};