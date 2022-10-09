import React, { useContext } from 'react';
import WOW from 'wowjs';
import websiteDesign from '../images/home/website design.png';
import mobileApp from '../images/home/mobile app.png';
import zariOnTime from '../images/home/iPhone 12 Pro (1).png';
import zariJumla from '../images/home/iPhone 12 Pro (2).png';
import zariGifts from '../images/home/iPhone 12 Pro (3).png';
import zariExpress from '../images/home/Group 32.png';
import goDaddy from '../images/home/7.png';
import year10 from '../images/home/5.png';
import stc from '../images/home/4.png';
import ovhCloud from '../images/home/3.png';
import oddo from '../images/home/2 (1).png';
import hostgator from '../images/home/1.png';
import vector from '../images/home/Vector 5 (1).png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { langContext } from '../context/store';
// import imgHeader from '../images/home/co-workers.png';
// import imgAboutLarge from '../images/home/Ellipse 31.png';
// import imgAboutSmall1 from '../images/home/Ellipse 32.png';
// import imgAboutSmall2 from '../images/home/Ellipse 33.png';
// import Rectangle1 from '../images/home/Rectangle 12.png';
// import Rectangle2 from '../images/home/Rectangle 12 (1).png';
// import Rectangle3 from '../images/home/Rectangle 12 (2).png';
// import joinCut from '../images/home/VectorEng.png';
// import joinCutRight from '../images/home/VectorAr.png';
// import axios from 'axios';
// import { useState } from 'react';
// import tweesel2 from '../images/home/Tawseel 2.png';
// import tweesel3 from '../images/home/Tawseel 3.png';
// import tweesel4 from '../images/home/Tawseel 4.png';
// import edita from '../images/home/edita 1.png';
// import Avaris from '../images/home/Avaris 1.png';
// import AlfaRomeo from '../images/home/Alfa Romeo 1.png';
// import SlaughterModel from '../images/home/Slaughter Model 1.png';
// import Tawseel from '../images/home/Arabic Textile 1.png';
// import AlfaRomeo2 from '../images/home/Alfa Romeo 2.png';
// import Texmar2 from '../images/home/Texmar 2.png';
// import Texmar1 from '../images/home/Texmar 1.png';
// import Chrysler1 from '../images/home/Chrysler 1.png';
// import Dodge from '../images/home/dodge 1.png';



export default function Home({ fetchHome }) {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
}, []);


  const clients = {
    items: 6,
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      700: {
        items: 3,
      },
      900: {
        items: 4
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      }
    },
  }

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

  let state = {
    0: 'fadeInLeft',
    1: 'fadeInDown',
    2: 'fadeInDown',
    3: 'fadeInRight',
    4: 'fadeInLeft',
    5: 'fadeInUp',
    6: 'fadeInUp',
    7: 'fadeInRight',
    8: 'fadeInLeft',
    9: 'fadeInUp',
    10: 'fadeInUp',
    11: 'fadeInRight',
    12: 'fadeInLeft',
    13: 'fadeInUp',
    14: 'fadeInUp',
    15: 'fadeInRight'
  }

  let state2 = {
    0: 'fadeInLeft',
    1: 'fadeInUp',
    2: 'fadeInDown',
    3: 'fadeInLeft',
    4: 'fadeInUp',
    5: 'fadeInDown',
    6: 'fadeInLeft',
    7: 'fadeInUp',
    8: 'fadeInDown',
  };


  // let card = {
  //   0: 'first-card',
  //   1: 'second-card',
  //   2: 'last-card',
  // }


  // let marg = {
  //   0: 'mt-2',
  //   1: 'mt-4',
  //   2: '',
  // }


  useEffect(() => {
    $('.home').addClass('active');

    return () => {
      $('.home').removeClass('active');
    }
  }, [])


  useEffect(() => {

    new WOW.WOW().init();

  }, []);


  let { isEng } = useContext(langContext);


  useEffect(() => {
    // if ($('.caption-details h2').text() === 'Zari Express') {
    //   if(isEng === true) {
    //       $('.caption-details p').text(`Zari Express is one of the projects of Zari Company, a Saudi-Egyptian company Present in Saudi Arabia since 2014.Zari Express aims to spread the Egyptian industry in Saudi Arabia and the Gulf.`);
    //   }
    //   else{
    //       $('.caption-details p').text(`Zari Express هو أحد مشاريع شركة Zari ، وهي شركة سعودية مصرية موجودة في المملكة العربية السعودية منذ عام 2014 ، وتهدف Zari Express إلى نشر الصناعة المصرية في المملكة العربية السعودية والخليج.`);
    //   }
    //   $('.show-details .buttons a').attr('href', '#/projects/4');
    // }

    if ($('.caption-details h2').text() === fetchHome.projects.date[0].title || $('.caption-details h2').text() === fetchHome.projects.date[0].titleAr) {
      if(isEng === true) {
          $('.caption-details p').text(fetchHome.projects.date[0].text);
      }
      else{
          $('.caption-details p').text(fetchHome.projects.date[0].textAr);
      }
      $('.show-details .buttons a').attr('href', '#/projects/1');
    }
  
  }, [])
  

  function changeDir() {
    let width = $('body').width();

    if (isEng === false) {
      $('#home').attr('dir', 'rtl');

      if ($('body').width() > 992) {
        $('.caption').css({ 'marginRight': '6rem', 'marginLeft': 'auto' });
      }
      else {
        $('.caption').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
      }

      $('.home-about').attr('dir', 'rtl');

      $('.home-services .service-1').attr('dir', 'rtl');
      $('.home-services .service-2').attr('dir', 'rtl');
      $('.home-services .service-1').css({ 'borderLeft': 'none', 'borderRight': '3px solid var(--secondColor)', 'animationName': 'changeColorBorderRight', 'paddingLeft': '0', 'paddingRight': '30px' });
      $('.home-services .service-2').css({ 'borderLeft': 'none', 'borderRight': '3px solid var(--secondColor)', 'animationName': 'changeColorBorderRight2', 'paddingLeft': '0', 'paddingRight': '30px' });
      $('.service-1 h3').css('animationName', 'changeColorRight');
      $('.service-2 h3').css('animationName', 'changeColorRight2');


      $('.home-projects .imgs').attr('dir', 'rtl');
      $('.show-details .caption-details').attr('dir', 'rtl');

      $('.carousel-inner').attr('dir', 'rtl');
      $('.carousel-item .one').removeClass('fa-quote-left');
      $('.carousel-item .one').addClass('fa-quote-right');
      $('.carousel-item .two').removeClass('fa-quote-right');
      $('.carousel-item .two').addClass('fa-quote-left');
      
      $('.home-share').attr('dir', 'rtl');
      $('.part .caption-part').css({ 'marginLeft': 'auto', 'marginRight': '8px' });
      $('.caption-part p').css({ 'marginLeft': 'auto', 'marginRight': '12px' });
      $('.caption-part .buttons').css({ 'marginLeft': 'auto', 'marginRight': '12px' });
      $('.home-join').attr('dir', 'rtl');

      if (width > 1600) {
        $('.join-caption').css({ 'marginLeft': 'auto', 'marginRight': '9.5rem' });
      }

      if (width < 1600 && width > 1500) {
        $('.join-caption').css({ 'marginLeft': 'auto', 'marginRight': '8rem' });
      }

      if (width > 992) {
        $('.join-caption').css({ 'marginLeft': 'auto', 'marginRight': '6rem' });
      }

      if (width < 992) {
        $('.join-caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
      }

    }

    else {
      $('#home').attr('dir', 'ltr');

      if ($('body').width() > 992) {
        $('.caption').css({ 'marginLeft': '6rem', 'marginRight': 'auto' });
      }
      else {
        $('.caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
      }

      $('.home-about').attr('dir', 'ltr');

      $('.home-services .service-1').attr('dir', 'ltr');
      $('.home-services .service-2').attr('dir', 'ltr');
      $('.home-services .service-1').css({ 'borderLeft': '3px solid var(--secondColor)', 'borderRight': 'none', 'animationName': 'changeColorBorder', 'paddingLeft': '0', 'paddingRight': '30px' });
      $('.home-services .service-2').css({ 'borderLeft': '3px solid var(--secondColor)', 'borderRight': 'none', 'animationName': 'changeColorBorder2', 'paddingLeft': '0', 'paddingRight': '30px' });
      $('.service-1 h3').css('animationName', 'changeColor');
      $('.service-2 h3').css('animationName', 'changeColor2');

      $('.home-projects .imgs').attr('dir', 'ltr');
      $('.show-details .caption-details').attr('dir', 'ltr');

      $('.carousel-inner').attr('dir', 'ltr');
      $('.carousel-item .one').removeClass('fa-quote-right');
      $('.carousel-item .one').addClass('fa-quote-left');
      $('.carousel-item .two').removeClass('fa-quote-left');
      $('.carousel-item .two').addClass('fa-quote-right');

      $('.home-share').attr('dir', 'ltr');
      $('.part .caption-part').css({ 'marginLeft': '8px', 'marginRight': 'auto' });
      $('.caption-part p').css({ 'marginLeft': '12px', 'marginRight': 'auto' });
      $('.caption-part .buttons').css({ 'marginLeft': '12px', 'marginRight': 'auto' });
      $('.home-join').attr('dir', 'ltr');

      if (width > 1600) {
        $('.join-caption').css({ 'marginRight': 'auto', 'marginLeft': '9.5rem' });
      }

      if (width < 1600 && width > 1500) {
        $('.join-caption').css({ 'marginRight': 'auto', 'marginLeft': '8rem' });
      }

      if (width > 992) {
        $('.join-caption').css({ 'marginRight': 'auto', 'marginLeft': '6rem' });
      }

      if (width < 992) {
        $('.join-caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
      }

    }
  }


  function widthBody() {
    let width = $('body').width();
    if (width > 992 && isEng === true) {
      $('.caption').css({ 'marginLeft': '6rem', 'marginRight': 'auto' });
    }
    else if (width < 992 && isEng === true) {
      $('.caption').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
    }
    else if (width > 992 && isEng === false) {
      $('.caption').css({ 'marginRight': '6rem', 'marginLeft': 'auto' });
    }
    else if (width < 992 && isEng === false) {
      $('.caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
    }
  }

  $(window).on('resize', function() {
      widthBody();
      changeDir();
  });


  useEffect(() => {
    changeDir();

    return () => {
      changeDir();
    }
  }, [isEng]);


//   useEffect(() => {
//     $('.imgs .img-group').click(function () {
//         let clickSrc = $(this).children('img').attr('src');
//         let clickTitle = $(this).children('h4').text();
//         $('.img-details img').attr('src', clickSrc);
//         $('.caption-details h2').text(clickTitle);
//         changeDetails();
//     })

//     const changeDetails = () => {
//         if ($('.caption-details h2').text() === fetchHome.projects.date[0].title || $('.caption-details h2').text() === fetchHome.projects.date[0].titleAr) {
//             if(isEng === true) {
//                 $('.caption-details p').text(fetchHome.projects.date[0].text);
//             }
//             else{
//               $('.caption-details p').text(fetchHome.projects.date[0].textAr);
//             }
//             $('.show-details .buttons a').attr('href', '#/projects/1');
//         }
    
//         else if ($('.caption-details h2').text() === fetchHome.projects.date[1].title || $('.caption-details h2').text() === fetchHome.projects.date[1].titleAr) {
//           if(isEng === true) {
//             $('.caption-details p').text(fetchHome.projects.date[1].text);
//           }
//           else{
//             $('.caption-details p').text(fetchHome.projects.date[1].textAr);
//           }
//           $('.show-details .buttons a').attr('href', '#/projects/2');
//         }
    
//         else if ($('.caption-details h2').text() === fetchHome.projects.date[2].title || $('.caption-details h2').text() === fetchHome.projects.date[2].titleAr) {
//           if(isEng === true) {
//             $('.caption-details p').text(fetchHome.projects.date[2].text);
//           }
//           else{
//             $('.caption-details p').text(fetchHome.projects.date[2].textAr);
//           }
//           $('.show-details .buttons a').attr('href', '#/projects/3');
//         }
    
//         else if ($('.caption-details h2').text() === fetchHome.projects.date[3].title || $('.caption-details h2').text() === fetchHome.projects.date[3].titleAr) {
//           if(isEng === true) {
//             $('.caption-details p').text(fetchHome.projects.date[3].text);
//           }
//           else{
//             $('.caption-details p').text(fetchHome.projects.date[3].textAr);
//           }
//           $('.show-details .buttons a').attr('href', '#/projects/4');
//         }
//     }
    
// }, [isEng]);
  


  return (

    <>

      {/* header */}
      <header id="home" className="home position-relative">
        <div className="total-header bg-light min-vh-70 d-flex justify-content-center align-items-end">
          <div className="container-fluid">
            <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
              <div className="col-lg-7">
                <div className="caption wow fadeInLeft" data-wow-duration="1.5s">
                  <h5 className="mb-4 main-color fw-bold wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchHome.top.header : fetchHome.top.headerAr}</h5>
                  <h1 className="fw-bold mb-4 wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchHome.top.title : fetchHome.top.titleAr}</h1>
                  <p className="mb-4 py-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchHome.top.text : fetchHome.top.textAr}</p>
                  <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                    <Link to='../Contact' className="btn black-btn py-3 px-5">{isEng ? 'Get Started' : 'ابدأ معنــــا'}</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img-header wow fadeInRight" data-wow-duration="1.5s">
                  <img src={fetchHome.top.image} className="w-100"
                    alt="co-workers" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* about-home */}
      <section className="home-about py-5">
        <div className="container">
          <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center py-5">
            <div className="col-lg-6">
              <div className="imgs-about d-flex justify-content-center align-items-center wow fadeInLeft" data-wow-duration="1.5s">
                <img src={fetchHome.about.image1} className="w-50 large-scale" alt="Ellipse" />
                <div className="gb-img d-flex flex-column">
                  <img src={fetchHome.about.image2} className="w-60 top-img" alt="Ellipse" />
                  <img src={fetchHome.about.image3} className="w-60" alt="Ellipse" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="caption-about wow fadeInRight" data-wow-duration="1.5s">
                <h2 className="fw-bold mb-2 fs-1 wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchHome.about.header : fetchHome.about.headerAr}</h2>
                <h3 className="mb-3 main-color fw-bold wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchHome.about.title : fetchHome.about.titleAr}</h3>
                <p className="mb-3 py-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchHome.about.text : fetchHome.about.textAr}
                </p>
                <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <Link to="../About" className="btn black-btn px-5">{isEng ? 'Read More' : 'اقـرأ المزيــد'}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services-home */}
      <section className="home-services pb-5">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-center align-items-center">
            <div className="col-12">
              <div className="main-title text-center pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <h2 className="fw-bold fs-1 mb-2">{isEng ? fetchHome.services.header : fetchHome.services.headerAr}</h2>
                <p className="mx-auto">{isEng ? fetchHome.services.title : fetchHome.services.titleAr}</p>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1.5s">
              <div className="service service-1 ps-4 mb-5">
                <h3 className="fw-bold mb-4 second-color">{isEng ? fetchHome.services.date[0].title : fetchHome.services.date[0].titleAr}</h3>
                <p>{isEng ? fetchHome.services.date[0].text : fetchHome.services.date[0].textAr}</p>
              </div>
              <div className="service service-2 ps-4">
                <h3 className="fw-bold mb-4 second-color">{isEng ? fetchHome.services.date[1].title : fetchHome.services.date[1].titleAr}</h3>
                <p>{isEng ? fetchHome.services.date[1].text : fetchHome.services.date[1].textAr}</p>
              </div>
            </div>
            <div className="col-lg-5">
              <OwlCarousel className="slider-items owl-carousel wow fadeInRight" data-wow-duration="1.5s" {...options}>
                <img src={fetchHome.services.date[0].image ? fetchHome.services.date[0].image : websiteDesign} className="w-100" alt="web" />
                <img src={fetchHome.services.date[1].image ? fetchHome.services.date[1].image : mobileApp} className="w-100" alt="mobile" />
              </OwlCarousel>
            </div>
            <div className="buttons text-center mt-0 wow fadeInUpBig">
              <Link to="../Services" className="btn second-btn px-5" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'All Services' : 'كـل الخدمـــات'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* projects-home */}
      <section className="home-projects py-5">
        <div className="row gx-0 gy-4">
          <div className="col-12">
            <div className="main-title text-center pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <h2 className="fw-bold fs-1 mb-2">{isEng ? fetchHome.projects.header : fetchHome.projects.headerAr}</h2>
              <p className="mx-auto pb-0 mb-0">{isEng ? fetchHome.projects.title : fetchHome.projects.titleAr}</p>
            </div>
          </div>
          {/* <div className="w-85 mx-auto pb-3">
            <div className="cont-imgs">
              <div className="imgs d-flex justify-content-center align-items-start">
                <div className="img-group d-flex flex-column text-center wow fadeInRight" data-wow-duration="1.5s">
                  <img src={fetchHome.projects.date[0].image ? fetchHome.projects.date[0].image : zariOnTime} className="w-75 mx-auto mb-3"
                    alt="zari on time" />
                  <h4 className="fw-bold">{isEng ? fetchHome.projects.date[0].title : fetchHome.projects.date[0].titleAr}</h4>
                </div>
                <div className="img-group d-flex flex-column text-center jomla wow fadeInDown" data-wow-duration="1.5s">
                  <img src={fetchHome.projects.date[1].image ? fetchHome.projects.date[1].image : zariJumla} className="w-75 mx-auto mb-3"
                    alt="zari jomla" />
                  <h4 className="fw-bold">{isEng ? fetchHome.projects.date[1].title : fetchHome.projects.date[1].titleAr}</h4>
                </div>
                <div className="img-group d-flex flex-column text-center gift wow fadeInUp" data-wow-duration="1.5s">
                  <img src={fetchHome.projects.date[2].image ? fetchHome.projects.date[2].image : zariGifts} className="w-75 mx-auto mb-3"
                    alt="zari gifts" />
                  <h4 className="fw-bold">{isEng ? fetchHome.projects.date[2].title : fetchHome.projects.date[2].titleAr}</h4>
                </div>
                <div className="img-group d-flex flex-column text-center wow fadeInLeft" data-wow-duration="1.5s">
                  <img src={fetchHome.projects.date[3].image ? fetchHome.projects.date[3].image : zariExpress} className="w-75 mx-auto mb-3" alt="zari Express" />
                  <h4 className="fw-bold">{isEng ? fetchHome.projects.date[3].title : fetchHome.projects.date[3].titleAr}</h4>
                </div>
              </div>
            </div>
          </div> */}
          <div className="show-details mt-5">
            <div className="w-85 mx-auto">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-8">
                  <div className="caption-details wow fadeInLeft" data-wow-duration="1.5s">
                    <h2 className="fw-bold mb-3 text-white wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchHome.projects.date[0].title : fetchHome.projects.date[0].titleAr}</h2>
                    <p className="mb-3 py-1 lh-base text-white wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"></p>
                    <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                      <a href={`#/projects/1`} className="btn btn-light py-3 px-5 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Read More' : 'اقـرأ المزيــد'}</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="img-details text-center wow fadeInRight" data-wow-duration="1.5s">
                    <img src={fetchHome.projects.date[0].image ? fetchHome.projects.date[0].image : zariExpress} className="mx-auto" alt="zari Express" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients-home */}
      <section className="home-clients py-4">
        <div className="container">
          <div className="row gx-0 gy-5 d-flex justify-content-center align-items-center">
            <div className="col-12">
              <div className="main-title text-center pt-3 w-75 mx-auto">
                <p className="mx-auto text-black fw-bold fs-5">{isEng ? 'Trusted by over +550 happy client text-centers, Including' : 'شركـــاء نجـاحنــــا'}</p>
              </div>
            </div>
            <OwlCarousel className="slider-items owl-carousel wow fadeInRight" data-wow-duration="1.5s" {...clients}>
              <div className="client text-center">
                <img src={goDaddy} alt="go daddy" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={year10} alt="2010" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={stc} alt="stc" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={ovhCloud} alt="ovh cloud" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={oddo} alt="oddo" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={hostgator} alt="host gator" className="w-75 mx-auto" />
              </div>
            </OwlCarousel>

          </div>
        </div>
      </section>

      {/* works-home */}
      <section className="home-previous py-5">
        <div className="container">
          <div className="row gx-4 gy-5 d-flex justify-content-center align-items-center">
            <div className="col-12">
              <div className="main-title text-center pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <h2 className="fw-bold mb-2 fs-1"> {isEng ? fetchHome.works.header : fetchHome.works.headerAr}</h2>
              </div>
            </div>
            {fetchHome.works.date.map((work, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className={`previo wow ${state[i]}`} data-wow-duration="1.5s">
                  <img src={work.image} alt="Tawseel" className="mx-auto mb-5" />
                  <h5 className="fw-bold">{isEng ? work.title : work.titleAr}</h5>
                </div>
              </div>
            ))}
            <div className="buttons text-center mt-5">
              <Link to="../Previous" className="btn second-btn py-3 px-5 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'All Previous Work' : 'كـل الأعمــــال السابقــة'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* carousel */}
      <section className="home-works-carousel py-5">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide pt-5" data-bs-ride="carousel">

            <div
              className="carousel-indicators position-static d-flex justify-content-between mt-2 mb-0 position-relative">
              <img src={vector}
                className="vector position-absolute bottom-0 start-0 end-0 w-100" alt="vector" />
              <div className="indicator-item align-self-end indicator-side indicator-side-first position-relative">
                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="life"
                  aria-label="Slide 1" src={fetchHome.carousel[4].image} alt="Alfa Romeo" />
              </div>
              <div className="indicator-item align-self-center indicator-deep indicator-deep-first position-relative">
                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  className="attraction" aria-label="Slide 2" src={fetchHome.carousel[2].image} alt="Texmar" />
              </div>
              <div className="indicator-item indicator-center position-relative">
                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  className="active spa" aria-label="Slide 3" src={fetchHome.carousel[0].image} alt="Texmar" />
              </div>
              <div
                className="indicator-item align-self-center indicator-deep indicator-deep-second position-relative">
                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                  className="attraction" aria-label="Slide 4" src={fetchHome.carousel[1].image} alt="Chrysler" />
              </div>
              <div className="indicator-item align-self-end indicator-side indicator-side-second position-relative">
                <img type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="life"
                  aria-label="Slide 5" src={fetchHome.carousel[3].image} alt="dodge" />
              </div>
            </div>

            <div className="carousel-inner mt-0">
              <div className="carousel-item">
                <h3 className='fs-2'>{isEng ? fetchHome.carousel[4].title : fetchHome.carousel[4].titleAr}</h3>
                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchHome.carousel[4].text : fetchHome.carousel[4].textAr} <i
                  className="two fa-solid fa-quote-right"></i> </blockquote>
              </div>
              <div className="carousel-item">
                <h3 className='fs-2'>{isEng ? fetchHome.carousel[2].title : fetchHome.carousel[2].titleAr}</h3>
                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchHome.carousel[2].text : fetchHome.carousel[2].textAr} <i
                  className="two fa-solid fa-quote-right"></i> </blockquote>
              </div>
              <div className="carousel-item active">
                <h3 className='fs-2'>{isEng ? fetchHome.carousel[0].title : fetchHome.carousel[0].titleAr}</h3>
                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchHome.carousel[0].text : fetchHome.carousel[0].textAr} <i
                  className="two fa-solid fa-quote-right"></i> </blockquote>
              </div>
              <div className="carousel-item">
                <h3 className='fs-2'>{isEng ? fetchHome.carousel[1].title : fetchHome.carousel[1].titleAr}</h3>
                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchHome.carousel[1].text : fetchHome.carousel[1].textAr} <i className="two fa-solid fa-quote-right"></i> </blockquote>
              </div>
              <div className="carousel-item">
                <h3 className='fs-2'>{isEng ? fetchHome.carousel[3].title : fetchHome.carousel[3].titleAr}</h3>
                <blockquote> <i className="one fa-solid fa-quote-left"></i> {isEng ? fetchHome.carousel[3].text : fetchHome.carousel[3].textAr}
                  <i className="two fa-solid fa-quote-right"></i>
                </blockquote>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <i className="fa-solid fa-angle-left fs-3" aria-hidden="true"></i>
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

      {/* share-home */}
      <section className="home-share py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-12">
              <div className="main-title mb-4 text-center w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <h2 className="fw-bold fs-1">{isEng ? fetchHome.share.header : fetchHome.share.headerAr}</h2>
              </div>
            </div>
            {fetchHome.share.data.map((share , i) => (
                <div key={i} className="col-lg-4">
                  <div className={`part wow ${state2[i]}`} data-wow-duration="1.5s">
                    <img src={share.image} className="w-100 mb-3" alt="Rectangle" />
                    <div className="caption-part">
                      <p className="text-black fs-5 lh-sm">{isEng ? share.text : share.textAr}</p>
                      <div className={`buttons`}>
                      {/* ${card[i]} ${ marg[i]} */}
                        <Link to="../Contact" className="btn second-btn py-3 px-5">{isEng ? 'Contact Us' : 'تواصـــل معنـــــا'}</Link>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* join-home */}
      <section className="home-join py-5 mb-4">
        <div className="container-fluid">
          <div className="row gx-0 gy-5 d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="join-caption wow fadeInLeft" data-wow-duration="1.5s">
                <h2 className="fw-bold mb-4 fs-1 wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchHome.join.header : fetchHome.join.headerAr}</h2>
                <p className="mb-4 py-1 lh-base wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchHome.join.text : fetchHome.join.textAr}
                </p>
                <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <Link to="../Join" className="btn black-btn py-3 px-5">{isEng ? 'Join us' : 'انضم إلينــا'}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-img wow fadeInRight" data-wow-duration="1.5s">
                <img src={isEng ? fetchHome.join.image : fetchHome.join.imageAr} className="w-100" alt="join" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
