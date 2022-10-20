import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
// import previousImg from '../images/previous/Vector 8.png';
// import tweesel2 from '../images/home/Tawseel 2.png';
// import tweesel3 from '../images/home/Tawseel 3.png';
// import tweesel4 from '../images/home/Tawseel 4.png';
// import edita from '../images/home/edita 1.png';
// import Avaris from '../images/home/Avaris 1.png';
// import AlfaRomeo from '../images/home/Alfa Romeo 1.png';
// import SlaughterModel from '../images/home/Slaughter Model 1.png';
// import Tawseel from '../images/home/Arabic Textile 1.png';
// import Avaris2 from '../images/previous/Avaris 2.png';
// import AlfaRomeo2 from '../images/previous/Alfa Romeo 2 (1).png';
// import SlaughterModel2 from '../images/previous/Slaughter Model 2.png';
// import ArabicTextile2 from '../images/previous/Arabic Textile 2.png';



export default function Previous({fetchWorks}) {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])

    let state = {
        0 : 'fadeInLeft',
        1 : 'fadeInDown',
        2 : 'fadeInDown',
        3 : 'fadeInRight',
        4 : 'fadeInLeft',
        5 : 'fadeInUp',
        6 : 'fadeInUp',
        7 : 'fadeInRight',
        8 : 'fadeInLeft',
        9 : 'fadeInUp',
        10 : 'fadeInUp',
        11 : 'fadeInRight'
    }


    let { isEng } = useContext(langContext);

    function changeDir() {
        let width = $('body').width();
        if (isEng === false) {
            $('.previous-join').attr('dir', 'rtl');

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
            $('.previous-join').attr('dir', 'ltr');

            if ($('body').width() > 1600) {
                $('.join-caption').css({ 'marginRight': 'auto', 'marginLeft': '9.5rem' });
            }
        
            if (width < 1600 && width > 1500) {
                $('.join-caption').css({ 'marginRight': 'auto', 'marginLeft': '8rem' });
            }
        
            if ($('body').width() > 992) {
                $('.join-caption').css({ 'marginRight': 'auto', 'marginLeft': '6rem' });
            }
        
            if ($('body').width() < 992) {
                $('.join-caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
            }
        }
    }

    $(window).on('resize', function() {
        changeDir();
    });

    useEffect(() => {
        changeDir();
    
        return () => {
            changeDir();
        }
    }, [isEng]);


    
    return (
        <>

            {/* header */}
            <header id="previous" className="previous-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'Our Works' : 'أعمالنـــا'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* join */}
            <section className="previous-join py-5">
                <div className="container-fluid">
                    <div className="row gx-0 gy-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="join-caption wow fadeInLeft" data-wow-duration="1.5s">
                                <h2 className="fw-bold mb-4 main-color wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchWorks.top.title : fetchWorks.top.titleAr}</h2>
                                <p className="mb-4 py-1 lh-base text-black wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchWorks.top.text : fetchWorks.top.textAr}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="join-img wow fadeInRight" data-wow-duration="1.5s">
                                <img src={isEng ? fetchWorks.top.image : fetchWorks.top.imageAr} className="w-100" alt="join" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* previous */}
            <section className="home-previous py-5 mb-5">
                    <div className="container">
                        <div className="row gx-4 gy-5 d-flex justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="main-title text-center pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h2 className="fw-bold mb-2 fs-1">{isEng ? 'Our Works' : 'أعمالنـــا'}</h2>
                                </div>
                            </div>
                            {fetchWorks.works.map((work , i) => (
                                <div key={i} className="col-lg-3 col-md-6">
                                    <div className={`previo wow ${state[i]}`} data-wow-duration="1.5s">
                                        <img src={work.image} alt="Tawseel" className="mx-auto mb-5"/>
                                        <h5 className="fw-bold">{isEng ? work.title : work.titleAr}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </>
    )
}
