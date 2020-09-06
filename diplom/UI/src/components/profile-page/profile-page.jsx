import React, {Component} from 'react';
import {Menu} from "../menu";
import {Navbar} from "../navbar";


function ProfilePage({}) {


    return (
        <div className="flex flex--fdc h-100vh">
            <Navbar/>
            <div className="profile">
                <div className="profile__header">
                    <div className="profile__title">Профиль</div>
                    <button className="profile__button" type="button">
                        <div className="profile__button-svg">
                            <svg width="20" height="20">
                                <path
                                    d="M18 11.1429H11.1429V18H8.85714V11.1429H2V8.85714H8.85714V2H11.1429V8.85714H18V11.1429Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <div className="profile__button-add">
                            Добавить данные
                        </div>
                    </button>
                </div>
                <div className="profile__marks">
                    <div className="profile__achievement mgn--bottom-28px">
                        <div className="profile__img-mark">
                            Отлично
                        </div>
                        <div>
                            <div className="profile__quantity">
                                62
                            </div>
                            <div className="profile__drill">
                                Отжимания (кол-во)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex--g-1 flex--ai-fs flex--jc-sb">
                    <div className="profile__graph">
                        Здесь должен быть график Здесь должен быть график Здесь должен быть график Здесь должен быть
                        график Здесь должен быть график Здесь должен быть график Здесь должен быть график Здесь должен
                        быть график Здесь должен быть график Здесь должен быть график
                    </div>
                    <div className="profile__result">
                        <div className="profile__time-result">
                            <div className="profile__achievement-res">
                                <div className="profile__img-res">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8FF" strokeWidth="2" strokeLinecap="square"/>
                                        <path d="M12 5V12L16 16" stroke="#4CB8FF" strokeWidth="2" strokeLinecap="square"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="profile__quantity">
                                        62
                                    </div>
                                    <div className="profile__drill">
                                        Ваш биологический возраст
                                    </div>
                                </div>
                            </div>
                            <div className="profile__achievement-res">
                                <div className="profile__img-res">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8FF" strokeWidth="2" strokeLinecap="square"/>
                                        <path d="M12 5V12L16 16" stroke="#4CB8FF" strokeWidth="2" strokeLinecap="square"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="profile__quantity">
                                        62
                                    </div>
                                    <div className="profile__drill">
                                        Разница между календарным и биологическим возрастом (+/-)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile__trophy-result">
                            <div className="profile__achievement-res">
                                <div className="profile__img-res">
                                    <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 30.625H21.25M7.5 2.91667H22.5V16.0417C22.5 20.8742 19.1421 24.7917 15 24.7917C10.8579 24.7917 7.5 20.8742 7.5 16.0417V2.91667Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 24.7917V30.625" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.5 7.29166V16.0417H6.25C4.17893 16.0417 2.5 14.0829 2.5 11.6667C2.5 9.25041 4.17893 7.29166 6.25 7.29166H7.5ZM22.5 16.0417V7.29166H23.75C25.8211 7.29166 27.5 9.25041 27.5 11.6667C27.5 14.0829 25.8211 16.0417 23.75 16.0417H22.5Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="profile__quantity">
                                        62
                                    </div>
                                    <div className="profile__drill">
                                        Общий уровений физической кондиции
                                    </div>
                                </div>
                            </div>
                            <div className="profile__achievement-res">
                                <div className="profile__img-res">
                                    <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 30.625H21.25M7.5 2.91667H22.5V16.0417C22.5 20.8742 19.1421 24.7917 15 24.7917C10.8579 24.7917 7.5 20.8742 7.5 16.0417V2.91667Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 24.7917V30.625" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.5 7.29166V16.0417H6.25C4.17893 16.0417 2.5 14.0829 2.5 11.6667C2.5 9.25041 4.17893 7.29166 6.25 7.29166H7.5ZM22.5 16.0417V7.29166H23.75C25.8211 7.29166 27.5 9.25041 27.5 11.6667C27.5 14.0829 25.8211 16.0417 23.75 16.0417H22.5Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="profile__quantity">
                                        62
                                    </div>
                                    <div className="profile__drill">
                                        Общая оценка
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu/>
        </div>
    );
}


export {ProfilePage};