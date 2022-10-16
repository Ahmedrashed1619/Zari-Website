import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import ReactPlayer from 'react-player';
import $ from 'jquery';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import onImg from '../images/Group 25.png'
// import projectImg from '../images/projects/Group 164.png';
// import vid from '../images/projects/001 Welcome.mp4';


export default function Project({baseURL}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {
        $('.projects-link').addClass('active');
    
        return () => {
            $('.projects-link').removeClass('active');
        }
    }, [])


    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    // Project data  
    const { id } = useParams();
    const [fetchProjectData, setFetchProjectData] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}project/${id}`)
        .then((res) => {
            setFetchProjectData(res.data);
        })
    }, [id]);

    let { isEng } = useContext(langContext);


    return ( 
        <>
            {Object.keys(fetchProjectData).length > 0 ?  <>

                {/* header */}
                <header id="projectSingle" className="projectSingle-page main-img-bg" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="total-header layer-img d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                                <h2 className="fs-1 text-white fw-bold">{fetchProjectData.project.header}</h2>
                            </div>
                        </div>
                    </div>
                </header>

                {/* project page */}
                <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="container">
                        <div className="project-single mb-5">
                            <div className="row">
                                {fetchProjectData.project.video !== null ? <ReactPlayer controls width='100%' height='600px' url={fetchProjectData.project.video} config={{file: {attributes: {poster: fetchProjectData.project.thumbnail}}}} className="mx-auto my-5 wow fadeInDown" data-wow-duration="1s" /> : ''}
                                <p className="mb-3 py-1 text-black wow fadeIn" data-wow-duration="1s">{isEng ? fetchProjectData.project.text : fetchProjectData.project.textAr}
                                </p>
                                <p className="mb-5 py-1 text-black wow fadeIn" data-wow-duration="1s">{isEng ? fetchProjectData.project.text2 : fetchProjectData.project.text2Ar}
                                </p>
                                <div className="buttons text-center mb-5">
                                        <a target='_blank' href='https://zariontime.com/' className="btn black-btn py-3 px-5">{isEng ? 'More Details' : 'تفاصيــل أكثـــر'}</a>
                                </div>
                                <img src={fetchProjectData.project.banner} className="mx-auto mt-5 wow fadeInUp" data-wow-duration="1s" alt="Group"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* get our app section  */}
                <section id="get" className="get" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="container">
                        <div className="main-title text-center pb-5 wow fadeInDownBig" data-wow-duration="1s">
                            <h5 className="main-color mb-2">{isEng ? 'Do you have our app?' : 'الحصول على التطبيق؟'}</h5>
                            <h2 className="fw-bold mb-3">{isEng ? 'Get Our Applications' : 'حمل التطبيق احجز موعدك وريح بالك!'}</h2>
                            <p className="mx-auto mb-0">{isEng ? 'Our applications are available now on App store & Play store' : 'تطبيقاتنا متاحة الآن علي App store & Play store'}</p>
                        </div>
                        <div className="row gy-5 gx-0 d-flex justify-content-center align-items-center wow fadeInUpBig" data-wow-duration="1s">
                            <div className="col-lg-4">
                                <div className="client text-center d-flex flex-column">
                                    <h4 className="mb-4 fw-bold">{isEng ? 'Zari on Time (Client App)' : 'Zari on Time (تطبيق العميل)'}</h4>
                                    <a target="_blank" href="https://apps.apple.com/eg/app/zari-on-time/id1625508325"
                                        className="btn mx-auto rounded-pill main-btn-p mb-4 d-flex justify-content-center align-items-center">
                                        <i className={`fa-brands fa-apple ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                        <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                            <p className="mb-0 available">{isEng ? 'Available on' : 'متاح علي'}</p>
                                            <p className="mb-0 app">App Store</p>
                                        </div>
                                    </a>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zari.zariontime"
                                        className="btn mx-auto rounded-pill second-btn-p mb-4 d-flex justify-content-center align-items-center">
                                        <i className={`fa-brands fa-google-play ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                        <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                            <p className="mb-0 get-on">{isEng ? 'Get On' : 'الذهاب لــ'}</p>
                                            <p className="mb-0 app">Google Play</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="img-apps text-center">
                                    <img src={onImg} alt="Group"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="manager text-center d-flex flex-column">
                                    <h4 className="mb-4 fw-bold">{isEng ? 'Zari on Time (Manager App)' : 'Zari on Time (تطبيق المدير)'}</h4>
                                    <a target="_blank" href="https://apps.apple.com/eg/app/zari-on-time-manager/id1637906978"
                                        className="btn mx-auto rounded-pill main-btn-p mb-4 d-flex justify-content-center align-items-center">
                                        <i className={`fa-brands fa-apple ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                        <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                            <p className="mb-0 available">{isEng ? 'Available on' : 'متاح علي'}</p>
                                            <p className="mb-0 app">App Store</p>
                                        </div>
                                    </a>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zari.zari_manager"
                                        className="btn mx-auto rounded-pill second-btn-p mb-4 d-flex justify-content-center align-items-center">
                                        <i className={`fa-brands fa-google-play ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                        <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                            <p className="mb-0 get-on">{isEng ? 'Get On' : 'الذهاب لــ'}</p>
                                            <p className="mb-0 app">Google Play</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </> :   <div id="ready">
                            <i className="fa fa-spinner fa-5x fa-spin"></i>
                    </div>
            }
        </>
    )
}
