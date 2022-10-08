import React, { useContext } from 'react';
import WOW from 'wowjs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';
import $ from 'jquery';
// import eCommerce from '../images/products/Group 170.png';
// import loyaltySystem from '../images/products/Group 163.png';
// import posSystem from '../images/products/Group 162.png';
// import ZariSalon from '../images/products/Group 168.png';
// import ERPSystem from '../images/products/Group 160.png';
// import CRMSystem from '../images/products/Group 161.png';
// import RealEstateManagement from '../images/products/Group 169.png';
// import RestaurantsManagement from '../images/products/Group 159.png';
// import ZariExpresses from '../images/products/Group 158.png';



export default function Products({fetchProducts}) {

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
    };


    let { isEng } = useContext(langContext);

    function changeDir() {
        if (isEng === false) {
            $('.products .product').attr('dir', 'rtl');
            $('.products .product:nth-child(1)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceOneBorderArabic'});
            $('.products .product:nth-child(2)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceTwoBorderArabic'});
            $('.products .product:nth-child(3)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceThreeBorderArabic'});
            $('.products .product:nth-child(4)').css({ 'borderLeft': 'none', 'borderRight': '3px solid', 'animationName': 'serviceOneBorderArabic'});
            $('.products .product').removeClass('ps-4');
            $('.products .product').addClass('pe-4');

            $('.products .product:nth-child(1) h3').css('animationName', 'colorOneArabic');
            $('.products .product:nth-child(2) h3').css('animationName', 'colorTwoArabic');
            $('.products .product:nth-child(3) h3').css('animationName', 'colorThreeArabic');
            $('.products .product:nth-child(4) h3').css('animationName', 'colorOneArabic');

        }

        else {
            $('.products .product').attr('dir', 'ltr');
            $('.products .product:nth-child(1)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceOneBorder'});
            $('.products .product:nth-child(2)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceTwoBorder'});
            $('.products .product:nth-child(3)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceThreeBorder'});
            $('.products .product:nth-child(4)').css({ 'borderRight': 'none', 'borderLeft': '3px solid', 'animationName': 'serviceOneBorder'});
            $('.products .product').removeClass('pe-4');
            $('.products .product').addClass('ps-4');

            $('.products .product:nth-child(1) h3').css('animationName', 'colorOne');
            $('.products .product:nth-child(2) h3').css('animationName', 'colorTwo');
            $('.products .product:nth-child(3) h3').css('animationName', 'colorThree');
            $('.products .product:nth-child(4) h3').css('animationName', 'colorOne');

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
            <header id="products" className="products-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'Our Products' : 'منتجاتنــــا'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* products */}
            <section className="products py-5 mb-5">
                <div className="container">
                    {fetchProducts[0] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
                            {fetchProducts[0].map((item , i) => (
                                <div key={i}  className="product ps-4 mb-5">
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
                                {fetchProducts[0].map((item , i) => (
                                    <img  key={i} src={item.image} className="w-100" alt="web" />
                                ))}
                            </OwlCarousel>
                        </div>
                    </div> : ''}
                    
                    {fetchProducts[1] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1.5s">
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {fetchProducts[1].map((item , i) => (
                                        
                                    <img key={i} src={item.image} className="w-100" alt="Technology-Consultation" />
                                ))}
                            </OwlCarousel>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-duration="1.5s">
                            {fetchProducts[1].map((item , i) => (
                                <div key={i} className="product ps-4 mb-5">
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

                    {fetchProducts[2] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
                            {fetchProducts[2].map((item , i) => (
                                <div key={i}  className="product ps-4 mb-5">
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
                                {fetchProducts[2].map((item , i) => (
                                    <img  key={i} src={item.image} className="w-100" alt="web" />
                                ))}
                            </OwlCarousel>
                        </div>
                    </div> : ''}

                    {fetchProducts[3] ? <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
                            {fetchProducts[3].map((item , i) => (
                                <div key={i}  className="product ps-4 mb-5">
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
                                {fetchProducts[3].map((item , i) => (
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
