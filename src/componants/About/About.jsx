import React, { useContext } from 'react';
import WOW from 'wowjs';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import vector from '../images/home/Vector 5 (1).png';
// import { Link } from 'react-router-dom';
// import AlfaRomeo2 from '../images/home/Alfa Romeo 2.png';
// import Texmar2 from '../images/home/Texmar 2.png';
// import Texmar1 from '../images/home/Texmar 1.png';
// import Chrysler1 from '../images/home/Chrysler 1.png';
// import Dodge from '../images/home/dodge 1.png';
// import imgAboutLarge from '../images/home/Ellipse 31.png';
// import imgAboutSmall1 from '../images/home/Ellipse 32.png';
// import imgAboutSmall2 from '../images/home/Ellipse 33.png';


export default function About({fetchAbout}) {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);


    useEffect(() => {

        new WOW.WOW().init();

    }, []);

    let { isEng } = useContext(langContext);

    
    function changeDir() {
        if (isEng === false) {

            $('.about').attr('dir', 'rtl');
            $('.about .caption-about h2').css('animationName' , 'headerArabic');

            $('.mission-goals .d-flex').removeClass('me-3');
            $('.mission-goals .d-flex').addClass('ms-3');
            $('.mission-goals .mission').css({'borderLeft' : 'none' , 'borderRight' : '3px solid var(--mainColor)' , 'animationName' : 'missionArabic'});
            $('.mission-goals .mission').removeClass('ps-2');
            $('.mission-goals .mission').addClass('pe-2');

            $('.mission-goals .goals').css({'borderLeft' : 'none' , 'borderRight' : '3px solid var(--mainColor)' , 'animationName' : 'goalsArabic'});
            $('.mission-goals .goals').removeClass('ps-2');
            $('.mission-goals .goals').addClass('pe-2');
            $('.mission-goals p').css({'borderLeft' : 'none' , 'borderRight' : '3px solid var(--mainColor)' , 'animationName' : 'paragraphArabic'});
            $('.mission-goals p').removeClass('ps-2');
            $('.mission-goals p').addClass('pe-2');

            // $('.our-story').attr('dir', 'rtl');

            $('.carousel-inner').attr('dir', 'rtl');
            $('.carousel-item .one').removeClass('fa-quote-left');
            $('.carousel-item .one').addClass('fa-quote-right');
            $('.carousel-item .two').removeClass('fa-quote-right');
            $('.carousel-item .two').addClass('fa-quote-left');
        }

        else {

            $('.about').attr('dir', 'ltr');
            $('.about .caption-about h2').css('animationName' , 'header');

            $('.mission-goals .d-flex').removeClass('ms-3');
            $('.mission-goals .d-flex').addClass('me-3');
            $('.mission-goals .mission').css({'borderLeft' : '3px solid var(--mainColor)' , 'borderRight' : 'none' , 'animationName' : 'mission'});
            $('.mission-goals .mission').removeClass('pe-2');
            $('.mission-goals .mission').addClass('ps-2');

            $('.mission-goals .goals').css({'borderLeft' : '3px solid var(--mainColor)' , 'borderRight' : 'none' , 'animationName' : 'goals'});
            $('.mission-goals .goals').removeClass('pe-2');
            $('.mission-goals .goals').addClass('ps-2');
            $('.mission-goals p').css({'borderLeft' : '3px solid var(--mainColor)' , 'borderRight' : 'none' , 'animationName' : 'paragraph'});
            $('.mission-goals p').removeClass('pe-2');
            $('.mission-goals p').addClass('ps-2');

            // $('.our-story').attr('dir', 'ltr');

            $('.carousel-inner').attr('dir', 'ltr');
            $('.carousel-item .one').removeClass('fa-quote-right');
            $('.carousel-item .one').addClass('fa-quote-left');
            $('.carousel-item .two').removeClass('fa-quote-left');
            $('.carousel-item .two').addClass('fa-quote-right');
        }
    }

    useEffect(() => {
        changeDir();
    
        return () => {
            changeDir();
        }
    }, [isEng]);


    let state = {
        0: 'fadeInLeft',
        1: 'fadeInRight',
        2: 'fadeInLeft',
        3: 'fadeInRight',
        4: 'fadeInLeft',
        5: 'fadeInRight',
        6: 'fadeInLeft',
        7: 'fadeInRight',
        8: 'fadeInLeft',
        9: 'fadeInRight',
        10: 'fadeInLeft',
        11: 'fadeInRight'
    }


    return (
        <>

            {/* header */}
            <header id="about" className="about-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'About Us' : 'مـن نحـن؟ '}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* about */}
            <section className="about py-5">
                <div className="container">
                    <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center py-5">
                        <div className="col-lg-6">
                            <div className="caption-about wow fadeInLeft" data-wow-duration="1.5s">
                                <h2 className="fw-bold mb-2 fs-1">{isEng ? fetchAbout.top.header : fetchAbout.top.headerAr}</h2>
                                <p className="mb-2 py-1 parag-1">{isEng ? fetchAbout.top.text : fetchAbout.top.textAr}</p>
                                <p className="mb-4 py-1 parag-2">{isEng ? fetchAbout.top.text2 : fetchAbout.top.text2Ar}</p>
                                <div className="mission-goals d-flex justify-content-center align-items-center">
                                    <div className={`d-flex flex-column ${isEng ? 'w-75' : 'w-25'} me-3`}>
                                        <h6 className="ps-2 py-2 mission mb-3">{isEng ? fetchAbout.mission.header : fetchAbout.mission.headerAr}</h6>
                                        <h6 className="m-0 ps-2 py-2 goals">{isEng ? fetchAbout.mission.title : fetchAbout.mission.titleAr}</h6>
                                    </div>
                                    <div>
                                        <p className="m-0 ps-2 py-2">{isEng ? fetchAbout.mission.text : fetchAbout.mission.textAr}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="imgs-about d-flex justify-content-center align-items-center wow fadeInRight" data-wow-duration="1.5s">
                                <div className="gb-img d-flex flex-column align-items-end">
                                    <img src={fetchAbout.top.image2} className="w-60 top-img" alt="Ellipse"/>
                                    <img src={fetchAbout.top.image3} className="w-60" alt="Ellipse"/>
                                </div>
                                <img src={fetchAbout.top.image1} className="w-50 large-scale" alt="Ellipse"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our story */}
            <section className="our-story py-5">
                <div className="container">
                    <div className="main-title text-center w-25 mx-auto mb-0 wow fadeInDown" data-wow-duration="1.5s">
                        <h2 className="fw-bold mb-1 fs-1">{isEng ? fetchAbout.story.header : fetchAbout.story.headerAr}</h2>
                        <p className="mx-auto pb-0 mb-0">{isEng ? fetchAbout.story.title : fetchAbout.story.titleAr}</p>
                    </div>
                    <div className="timeline-section">
                        <div className="timeline-items">
                            {fetchAbout.story.date.map((date , i) => (
                                <div key={i} className="item">
                                    <div className="item-dot"></div>
                                    <div className={`item-content wow ${state[i]}`} data-wow-duration="1.5s">
                                        <h5 className="mb-3 main-color fs-4">{isEng ? date.title : date.titleAr}</h5>
                                        <p className="pb-0 mb-0">{isEng ? date.text : date.textAr}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* carousel */}
            <section className="home-works-carousel py-5 mb-5">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide pt-5" data-bs-ride="carousel">

                        <div
                            className="carousel-indicators position-static d-flex justify-content-between mt-2 mb-0 position-relative">
                            <img src={vector}
                                className="vector position-absolute bottom-0 start-0 end-0 w-100" alt="vector"/>
                            <div className="indicator-item align-self-end indicator-side indicator-side-first position-relative">
                                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="life"
                                    aria-label="Slide 1" src={fetchAbout.carousel[4].image} alt="Alfa Romeo"/>
                            </div>
                            <div className="indicator-item align-self-center indicator-deep indicator-deep-first position-relative">
                                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    className="attraction" aria-label="Slide 2" src={fetchAbout.carousel[2].image} alt="Texmar"/>
                            </div>
                            <div className="indicator-item indicator-center position-relative">
                                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    className="active spa" aria-label="Slide 3" src={fetchAbout.carousel[0].image} alt="Texmar"/>
                            </div>
                            <div
                                className="indicator-item align-self-center indicator-deep indicator-deep-second position-relative">
                                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                    className="attraction" aria-label="Slide 4" src={fetchAbout.carousel[1].image} alt="Chrysler"/>
                            </div>
                            <div className="indicator-item align-self-end indicator-side indicator-side-second position-relative">
                                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="life"
                                    aria-label="Slide 5" src={fetchAbout.carousel[3].image} alt="dodge"/>
                            </div>
                        </div>

                        <div className="carousel-inner mt-0">
                            <div className="carousel-item">
                                <h3 className='fs-2'>{isEng ? fetchAbout.carousel[4].title : fetchAbout.carousel[4].titleAr}</h3>
                                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchAbout.carousel[4].text : fetchAbout.carousel[4].textAr} <i
                                        className="two fa-solid fa-quote-right"></i> </blockquote>
                            </div>
                            <div className="carousel-item">
                                <h3 className='fs-2'>{isEng ? fetchAbout.carousel[2].title : fetchAbout.carousel[2].titleAr}</h3>
                                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchAbout.carousel[4].text : fetchAbout.carousel[4].textAr} <i
                                        className="two fa-solid fa-quote-right"></i> </blockquote>
                            </div>
                            <div className="carousel-item active">
                                <h3 className='fs-2'>{isEng ? fetchAbout.carousel[0].title : fetchAbout.carousel[0].titleAr}</h3>
                                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchAbout.carousel[0].text : fetchAbout.carousel[0].textAr} <i
                                        className="two fa-solid fa-quote-right"></i> </blockquote>
                            </div>
                            <div className="carousel-item">
                                <h3 className='fs-2'>{isEng ? fetchAbout.carousel[1].title : fetchAbout.carousel[1].titleAr}</h3>
                                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchAbout.carousel[1].text : fetchAbout.carousel[1].textAr} <i className="two fa-solid fa-quote-right"></i> </blockquote>
                            </div>
                            <div className="carousel-item">
                                <h3 className='fs-2'>{isEng ? fetchAbout.carousel[3].title : fetchAbout.carousel[3].titleAr}</h3>
                                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchAbout.carousel[3].text : fetchAbout.carousel[3].textAr}
                                    <i className="two fa-solid fa-quote-right"></i>
                                </blockquote>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <i className="fa-solid fa-angle-left fs-3 " aria-hidden="true"></i>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <i className="fa-solid fa-angle-right fs-3" aria-hidden="true"></i>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}
