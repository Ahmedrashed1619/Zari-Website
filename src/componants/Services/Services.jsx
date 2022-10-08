import React, { useContext } from 'react';
import WOW from 'wowjs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';
import $ from 'jquery';
// import websiteDesign from '../images/home/website design.png';
// import mobileApp from '../images/home/mobile app.png';
// import Marketing from '../images/services/Marketing-pana.png';
// import Technology from '../images/services/Group 80.png';
// import Graphic from '../images/services/Group 150.png';
// import Testing from '../images/services/Group 149.png';
// import clouding from '../images/services/Group 167.png';
// import domainHosting from '../images/services/Group 147.png';
// import csc from '../images/services/Group 148.png';


export default function Services({ fetchServices }) {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();

    }, [])

    const options = {
        items: 1,
        animateIn: ' flipOutX',
        animateOut: ' flipOutY',
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
    };


    let { isEng } = useContext(langContext);

    function changeDir() {
        if (isEng === false) {
            $('.services .service').attr('dir', 'rtl');
            $('.services .service:nth-child(1)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceOneBorderArabic'});
            $('.services .service:nth-child(2)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceTwoBorderArabic'});
            $('.services .service:nth-child(3)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceThreeBorderArabic'});
            $('.services .service:nth-child(4)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceOneBorderArabic'});
            $('.services .service').removeClass('ps-4');
            $('.services .service').addClass('pe-4');

            $('.services .service:nth-child(1) h3').css('animationName', 'colorOneArabic');
            $('.services .service:nth-child(2) h3').css('animationName', 'colorTwoArabic');
            $('.services .service:nth-child(3) h3').css('animationName', 'colorThreeArabic');
            $('.services .service:nth-child(4) h3').css('animationName', 'colorOneArabic');

        }

        else {
            $('.services .service').attr('dir', 'ltr');
            $('.services .service:nth-child(1)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceOneBorder'});
            $('.services .service:nth-child(2)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceTwoBorder'});
            $('.services .service:nth-child(3)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceThreeBorder'});
            $('.services .service:nth-child(4)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceOneBorder'});
            $('.services .service').removeClass('pe-4');
            $('.services .service').addClass('ps-4');

            $('.services .service:nth-child(1) h3').css('animationName', 'colorOne');
            $('.services .service:nth-child(2) h3').css('animationName', 'colorTwo');
            $('.services .service:nth-child(3) h3').css('animationName', 'colorThree');
            $('.services .service:nth-child(4) h3').css('animationName', 'colorOne');

        }
    }

    useEffect(() => {
        changeDir();
    
        return () => {
            changeDir();
        }
    }, [isEng]);



    return (
        <>

            {/* header */}
            <header id="services" className="services-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'Our Services' : 'خدماتنـــــا'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* services */}
            <section className="services py-5 mb-5">
                <div className="container">
                    {fetchServices[0] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
                            {fetchServices[0].map((item , i) => (
                                <div key={i}  className="service ps-4 mb-5">
                                    <h3 className="fw-bold mb-2 second-color">{isEng ? item.title : item.titleAr}</h3>
                                    <p>{isEng ? item.text : item.textAr}
                                    </p>
                                    <div className="buttons">
                                        <Link to={`${item.id}`} className="btn black-btn py-3 px-5">{isEng ? 'More Details' : 'تفاصيــل أكثـــر'}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-duration="1.5s">
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {fetchServices[0].map((item , i) => (
                                    <img  key={i} src={item.image} className="w-100" alt="web" />
                                ))}
                            </OwlCarousel>
                        </div>
                    </div> : ''}
                    
                    {fetchServices[1] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1.5s">
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {fetchServices[1].map((item , i) => (
                                        
                                    <img key={i} src={item.image} className="w-100" alt="Technology-Consultation" />
                                ))}
                            </OwlCarousel>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-duration="1.5s">
                            {fetchServices[1].map((item , i) => (
                                <div key={i} className="service ps-4 mb-5">
                                    <h3 className="fw-bold mb-2 second-color">{isEng ? item.title : item.titleAr}</h3>
                                    <p>{isEng ? item.text : item.textAr}
                                    </p>
                                    <div className="buttons">
                                        <Link to={`${item.id}`} className="btn black-btn py-3 px-5">{isEng ? 'More Details' : 'تفاصيــل أكثـــر'}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> : ''}

                    {fetchServices[2] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
                            {fetchServices[2].map((item , i) => (
                                <div key={i}  className="service ps-4 mb-5">
                                    <h3 className="fw-bold mb-2 second-color">{isEng ? item.title : item.titleAr}</h3>
                                    <p>{isEng ? item.text : item.textAr}
                                    </p>
                                    <div className="buttons">
                                        <Link to={`${item.id}`} className="btn black-btn py-3 px-5">{isEng ? 'More Details' : 'تفاصيــل أكثـــر'}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-duration="1.5s">
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {fetchServices[2].map((item , i) => (
                                    <img  key={i} src={item.image} className="w-100" alt="web" />
                                ))}
                            </OwlCarousel>
                        </div>
                    </div> : ''}

                    {fetchServices[3] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
                            {fetchServices[3].map((item , i) => (
                                <div key={i}  className="service ps-4 mb-5">
                                    <h3 className="fw-bold mb-2 second-color">{isEng ? item.title : item.titleAr}</h3>
                                    <p>{isEng ? item.text : item.textAr}
                                    </p>
                                    <div className="buttons">
                                        <Link to={`${item.id}`} className="btn black-btn py-3 px-5">{isEng ? 'More Details' : 'تفاصيــل أكثـــر'}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-duration="1.5s">
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {fetchServices[3].map((item , i) => (
                                    <img  key={i} src={item.image} className="w-100" alt="web" />
                                ))}
                            </OwlCarousel>
                        </div>
                    </div> : ''}
                </div>
            </section>
        </>
    )
}
