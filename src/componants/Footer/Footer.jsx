import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { langContext } from '../context/store';
import imgFooter from '../images/home/2 (2).png';
import tiktok from '../images/home/tik-tok.png';
import snapchat from '../images/home/snapchat.png';
import { useEffect } from 'react';
import $ from 'jquery';
import WOW from 'wowjs';



export default function Footer() {


    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    let { isEng } = useContext(langContext);
    
    function changeDir() {
        let width = $('body').width();
        if (isEng === false) {
            $('.icons-footer a').css({'marginLeft' : '15px' , 'marginRight' : '0'});
            if(width > 992 && width < 1200) {
                $('.icons-footer a').css({'marginLeft' : '6px' , 'marginRight' : '0'});
            }
        }

        else {
            $('.icons-footer a').css({'marginLeft' : '0' , 'marginRight' : '15px'});
            if(width > 992 && width < 1200) {
                $('.icons-footer a').css({'marginLeft' : '0' , 'marginRight' : '6px'});
            }
        }
    }

    useEffect(() => {
        changeDir();
    
        return () => {
            changeDir();
        }
    }, [isEng]);

    $(window).on('resize', function() {
        changeDir();
    });



    return (
        <>
            <footer id="footer" className="footer py-5 bg-black position-relative" dir={isEng ? 'ltr' : 'rtl'}>
                <span id="btnTopFooter" className={`position-absolute top-0 end-0 translate-middle text-white`}><i
                        className="fa-solid fa-chevron-up fs-3 p-3 main-bg rounded-circle"></i></span>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="logo-footer wow fadeInRight" data-wow-duration="1.5s">
                                <img src={imgFooter} className="w-50" alt="zari logo"/>
                                <p>{isEng ? `Zari is a Saudi-Egyptian company among a group of companies operating in more than one field
                                    in Saudi Arabia and the Middle East.` : 'حلول زاري لتقنية المعلومات شركة سعودية تعمل علي تطوير الأعمال وأن نكون شركاء نجاح مع قطاعات الأعمال المختلفة لتطوير أعمالهم من خلال تقديم حلول تقنية ةتسويقية. '}</p>
                                <h5 className="mb-4">{isEng ? 'Follow us' : 'تابعنــــا'}</h5>
                                <div className="icons-footer d-flex align-items-center mb-3">
                                    <a target="_blank" rel='noreferrer' href="https://www.facebook.com/ZARISolutionksa"><i
                                            className="fa-brands fa-facebook-f"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://twitter.com/SolutionZari"><i
                                            className="fa-brands fa-twitter"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://www.instagram.com/zarisolutionksa/"><i
                                            className="fa-brands fa-instagram"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://wa.me/+966566770235"><i
                                            className="fa-brands fa-whatsapp"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/zari-solution-ksa-12717623b/"><i
                                            className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                <div className="icons-footer d-flex align-items-center">
                                    <a target="_blank" rel='noreferrer' href="https://www.tiktok.com/@zarisolutionksa"><img
                                            src={tiktok} alt="tik-tok"/></a>
                                    <a target="_blank" rel='noreferrer'
                                        href="https://www.snapchat.com/add/zari_solutions?share_id=osFpGeXWnlE&locale=en-US"><img
                                            src={snapchat} alt="snapchat"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="navigate wow fadeInDown" data-wow-duration="1.5s">
                                <h5 className="mb-5">{isEng ? 'Explore' : 'اكتشــــف'}</h5>
                                <div className="navbar-nav links-navigate d-flex justify-content-center flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link home" aria-current="page" to="home">{isEng ? 'Home' : 'الرئيسيــة'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link about" to="about">{isEng ? 'About' : 'من نحــن'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link services-link" to="services">{isEng ? 'Services' : 'الخدمــــات'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link products-link" to="products">{isEng ? 'Products' : 'المنتجـــات'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link projects-link" to="projects">{isEng ? 'Projects' : 'المشـاريـع'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link previous" to="previous">{isEng ? 'Works' : 'الأعمال السابقة'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link contact" to="contact">{isEng ? 'Contact Us' : 'تواصل معنا'}</NavLink>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="navigate wow fadeInUp" data-wow-duration="1.5s">
                                <h5 className="mb-5">{isEng ? 'Resources' : 'المصـــادر'}</h5>
                                <div className="navbar-nav links-navigate d-flex justify-content-center flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="join">{isEng ? 'Career' : 'السيـــرة'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="faq">{isEng ? 'FAQs' : 'الأسئلة الأكثر تكرارا'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="privacy">{isEng ? 'Privacy Policy' : 'سيـاسة الخصوصيـــة'}</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="terms">{isEng ? 'Terms of Service' : 'شـروط الخدمـــة'}</NavLink>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="navigate wow fadeInLeft" data-wow-duration="1.5s">
                                <h5 className="mb-5 contact">{isEng ? 'Contact us' : 'تواصــل معنـــا'}</h5>
                                <div className="d-flex justify-content-start align-items-center mb-2">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                    <a href="https://www.google.com/maps/place/24%C2%B049'57.9%22N+46%C2%B040'52.1%22E/@24.8327465,46.6789598,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbb9f0e7b1014cb34!8m2!3d24.8327465!4d46.6811485?hl=en" target="_blank" rel="noopener noreferrer"><p className="lh-sm ksa">{isEng ? 'Riyadh Office: 8491 Othman Bin Affaan Road Al Narjas - Riyadh - KSA.' : 'مكتب الرياض: 8491 طريق انس بن مالك تقاطع طريق عثمان بن عفان النرجس - الرياض - المملكة العربية السعودية.'}</p></a>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mb-2">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                    <a href="https://goo.gl/maps/6wBGzU2dcBN5yAFA7" target="_blank" rel="noopener noreferrer"><p className="lh-sm ksa">{isEng ? 'AL-Madina Office: 7865 King Abdullah Bin - Abdulaziz Road - Jasham - AL-Madina - KSA.' : 'مكتب المدينة المنورة: 7865 الملك عبدالله بن عبدالعزيز - جاسم - المدينة المنورة - المملكة العربية السعودية.'}</p></a>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mb-3">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                    <a href="https://www.google.com/maps/place/30%C2%B002'14.9%22N+31%C2%B020'40.5%22E/@30.037473,31.3467786,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.037473!4d31.3445899" target="_blank" rel="noopener noreferrer"><p className="lh-sm egy">{isEng ? 'Cairo Office: 9 Street Saeed Zakaria - Nasr City - Cairo - Egypt.' : 'مكتب القاهرة:9 شارع سعيد زكريا - مدينة نصر - القاهرة - جمهورية مصر العربية.'}</p></a>
                                </div>
                                <div className="phone d-flex justify-content-start align-items-center mb-3">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                    <a rel='noreferrer' target="_blank" href="tel:+966920024403">{isEng ? ' +966 92 002 4403' : '4403 002 92 966+ '}</a>
                                </div>
                                <div className="phone d-flex justify-content-start align-items-center mb-3">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                    <a rel='noreferrer' target="_blank" href="tel:+966566770235">{isEng ? ' +966 56 677 0235' : '0235 677 56 966+ '}</a>
                                </div>
                                <div className="phone d-flex justify-content-start align-items-center mb-3">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                    <a rel='noreferrer' target="_blank" href="tel:+201151300867">{isEng ? ' 01151300867' : '01151300867 '}</a>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-envelope"></i></span>
                                    <a rel='noreferrer' target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=VpCqJKjfgRtcdLcBmXhbSjczqWqGtTzCcxbpGJKzzKgljwnZwSRflMqjZxxLrwCghhGNMlq">info@zarisolution.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
