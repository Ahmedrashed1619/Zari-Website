import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { langContext } from '../context/store';
import $ from 'jquery';


export default function Contact({baseURL}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    const [user, setUser] = useState({
        Name:'',
        Email:'',
        Phone:'',
        Subject:'',
        Message:''
    })

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);


    // let inputs =Array.from(document.querySelectorAll('input'));

    // let tex = document.querySelector('textarea')

    // if(message === 'Success') {
    //     inputs.map((i) => {
    //         i.value = '';
    //     })
    //     tex.value = '';
    // }


    function getUserData(e) {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }

    async function registerContactForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}contact`,
            data: user,
            headers: { "Content-Type": "multipart/form-data" },
        });
        if(isEng === true) {
            setMessage(data.messagesEn);
            setLoadind(false);
        }
        else {
            setMessage(data.messagesAr);
            setLoadind(false);
        }    
    }

    
    let { isEng } = useContext(langContext);



    return (
            <>
            
                {/* header */}
                <header id="contact" className="contact-page main-img-bg">
                    <div className="total-header layer-img d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                                <h2 className="fs-1 text-white fw-bold">{isEng ? 'Contact Us' : 'تواصـــل معنــــا'}</h2>
                            </div>
                        </div>
                    </div>
                </header>

                {/* form contact */}
                <section className="form-contact py-5 mb-5" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="container">
                        <div className="row gx-5 gy-4 d-flex justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="main-title text-center mb-4 pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h2 className="fw-bold fs-1 mb-1 main-color">{isEng ? 'Ready to Get Started ?' : 'هل مستعــد للبــدء'}</h2>
                                    <p className="mx-auto pb-0 mb-0 text-black">{isEng ? 'Your email address will not be published.' : 'لن يتم نشر عنوان بريدك الإلكتروني.'}</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form encType="multipart/form-data" onSubmit={registerContactForm} className="p-5 form">

                                    <label className="mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="Name">{isEng ? 'Full Name' : 'الإســــم كامــل'}</label>
                                    <input onChange={getUserData} type="text" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="Name" id="Name"/>

                                    <label className=" second-input mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="Email">{isEng ? 'Email Address' : 'البريــد الإلكترونــــي'}</label>
                                    <input onChange={getUserData} type="email" className="form-control p-2 wow fadeInRight" data-wow-duration="1.5s" required name="Email" id="Email"/>

                                    <label className=" mt-2 mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="Phone">{isEng ? 'Phone Number' : 'رقــم الهاتـــف'}</label>
                                    <input onChange={getUserData} type="tel" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="Phone" id="Phone"/>

                                    <label className="mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="Subject">{isEng ? 'Subject' : 'الموضــوع'}</label>
                                    <input onChange={getUserData} type="text" className="form-control p-2 wow fadeInRight" data-wow-duration="1.5s" required name="Subject" id="Subject"/>

                                    <label className=" mt-2 mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="Message">{isEng ? 'Message' : 'رســالة'}</label>
                                    <textarea name="Message" onChange={getUserData} id="Message" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" cols="30" rows="5" required></textarea>

                                    {message.length > 0 ? <p id="alertSave" className={`alert ${message === 'Success Send Data' || message === 'تم ارسال البيانات بنجاح' ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                                    <div className="buttons text-center mt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <button className="btn black-btn py-3" type="submit" value="Send Message">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Send Message' : 'إرســال رســالــة'}</button>
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="col-lg-5">
                                <div className="p-4 form text-center mb-5 wow fadeInDown" data-wow-duration="1.5s">
                                    <h4 className="main-color fw-bold mb-4">{isEng ? 'Our Addresses' : 'عناوينـــا'}</h4>
                                    <div className={`d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'} mb-4`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? '7865 King Abdullah Bin - Abdulaziz Road - Jasham - AL-Madina - KSA' : '7865 الملك عبدالله بن عبدالعزيز - جاسم - المدينة المنورة - المملكة العربية السعودية.'}</p>
                                    </div>
                                    <div className={`d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'} mb-4`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? 'Anas bin Malik Road - intersection of Othman bin Affan Road - AL-Riyadh - KSA' : 'طريق انس بن مالك - تقاطع طريق عثمان بن عفان - الرياض - المملكة العربية السعودية.'}</p>
                                    </div>
                                    <div className={`d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'}`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? '9 Street Saeed Zakaria - 8th District - Nasr City - Cairo - Egypt' : '9 شارع سعيد زكريا - المنطقة الثامنة - مدينة نصر - القاهرة - جمهورية مصر العربية.'}</p>
                                    </div>
                                </div>
                                <div className="p-4 form text-center wow fadeInUp" data-wow-duration="1.5s">
                                    <h4 className="main-color fw-bold mb-4">{isEng ? 'Contact' : 'التواصـــل'}</h4>
                                    <div className={`phone d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'} mb-4`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? 'KSA Mobile: (+966) 920024403' : 'رقـم الهـاتــف السعودي: 920024403 (966+) '}</p>
                                    </div>
                                    <div className={`phone d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'} mb-4`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? 'Egypt Mobile: (+20) 1151300867' : 'رقـم الهـاتــف المصري: 1151300867 (20+) '}</p>
                                    </div>
                                    <div className={`d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'} mb-4`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-envelope"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? 'Email: info@zarisolution.com' : 'البريــد الإلكترونــي: info@zarisolution.com'}</p>
                                    </div>
                                    <div className={`d-flex justify-content-start ${isEng ? 'text-start' : 'text-end'}`}>
                                        <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-regular fa-clock"></i></span>
                                        <p className="lh-sm mb-0">{isEng ? 'Hours of Operation: Sun - Thurs 09:00 A.M - 17:00 P.M' : 'سـاعــات العمـــل: الأحــد - الخميــس 09:00 صباحـــا - 17:00 مســـاءا'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}