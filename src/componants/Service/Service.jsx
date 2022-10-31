import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { langContext } from '../context/store';
import $ from 'jquery';
import { useState } from 'react';
import axios from 'axios';
// import collaboration from '../images/services/Live collaboration-pana 1.png';


export default function Service({baseURL, showNameEn, showNameAr, showTypeEn, showTypeAr}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    useEffect(() => {
        $('.services-link').addClass('active');

        return () => {
            $('.services-link').removeClass('active');
        }
    }, [])

    useEffect(() => {

        new WOW.WOW().init();

    }, [])


    // Service data  
    const { id } = useParams();
    const [fetchServiceData, setFetchServiceData] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}service/${id}`)
        .then($('.dropdown.services-toggle .dropdown-menu').addClass('d-none'))
        .then((res) => {
            setFetchServiceData(res.data);
            $('.dropdown.services-toggle .dropdown-menu').removeClass('d-none');
        })
    }, [id]);


    let { isEng } = useContext(langContext);



    return  fetchServiceData !== null ? ( <>

        {/* header */}
        <header id="serviceSingle" className="serviceSingle-page main-img-bg" dir={isEng ? 'ltr' : 'rtl'}>
            <div className="total-header layer-img d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                        <h2 className="fs-1 text-white fw-bold">{isEng ? fetchServiceData.service.header : fetchServiceData.service.headerAr}</h2>
                    </div>
                </div>
            </div>
        </header>

        {/* serviceSingle */}
        <section className="serviceSingle py-5" dir={isEng ? 'ltr' : 'rtl'}>
            <div className="container">
                <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="caption-wd-page wow fadeInRight" data-wow-duration="1s">
                            <h3 className="fw-bold mb-3 fs-2 wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchServiceData.service.title : fetchServiceData.service.titleAr}</h3>
                            <h5 className="mb-3 main-color fw-bold wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchServiceData.service.subtitle : fetchServiceData.service.subtitleAr}</h5>
                            <p className="mb-3 py-1 text-black wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchServiceData.service.text : fetchServiceData.service.textAr}
                            </p>
                            <div className="headings wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                {isEng ? fetchServiceData.service.features.map((item , i) => (
                                    <h5 key={i}><span className='mr-span'><i className="fa-solid fa-check"></i></span>{item}</h5>
                                )) : fetchServiceData.service.featuresAr.map((itemAr , i) => (
                                    <h5 key={i}><span className='ml-span'><i className="fa-solid fa-check"></i></span>{itemAr}</h5>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-page text-center wow fadeInLeft" data-wow-duration="1s">
                            <img src={fetchServiceData.service.image} className="w-75 mx-auto" alt="website design"/>
                        </div>
                    </div>
                </div>
                <div className="buttons text-center mt-4 wow fadeInUpBig">
                    <Link to="../order" onClick={() => {
                        showNameEn(fetchServiceData.service.header)
                        showNameAr(fetchServiceData.service.headerAr)
                        showTypeEn('Service')
                        showTypeAr('خدمـــة')
                    }} className="btn black-btn px-5" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Order Now' : 'اطلـــب الآن'}</Link>
                </div>
            </div>
        </section>

        {/* we like to start ur project with us */}
        <section className="start-ur-project py-5 mb-5" dir={isEng ? 'ltr' : 'rtl'}>
            <div className="container">
                <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <div className="img-page text-center wow fadeInLeft" data-wow-duration="1s">
                            <img src={fetchServiceData.footer.image}
                                className="w-100 mx-auto" alt="Live collaboration" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="question-title wow fadeInRight" data-wow-duration="1s">
                            <h4 className="fw-bold mb-3 fs-2 main-color wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchServiceData.footer.header : fetchServiceData.footer.headerAr}</h4>
                            <p className="mb-4 py-1 lh-base text-black-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchServiceData.footer.text : fetchServiceData.footer.textAr}</p>
                            <div className="buttons wow fadeInUpBig" data-wow-duration="1s">
                                <Link to="../Contact" className="btn black-btn py-3 px-5">{isEng ? 'Send Message' : 'إرســـال رسـالـــة'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>) : (
        <div id="ready">
            <i className="fa fa-spinner fa-5x fa-spin"></i>
        </div>
    )
}
