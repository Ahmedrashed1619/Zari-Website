import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { langContext } from '../context/store';
import $ from 'jquery';



export default function Order({baseURL, showNameEn, showNameAr, showTypeEn, showTypeAr}) {


    let { isEng } = useContext(langContext);


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    const [user, setUser] = useState({
        ItemName: '',
        ItemType: '',
        CompanyName:'',
        CompanyPhone:'',
        CompanyEmail:'',
        Note:'',
    })

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);


    function getUserData(e) {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        myUser.ItemName = showNameEn;
        myUser.ItemType = showTypeEn;
        setUser(myUser);
    }

    async function registerContactForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}order`,
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



    return (
        <>
                        
            {/* header */}
            <header id="order" className="order-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'Order Now' : 'اطلــــب الآن'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* form order */}
            <section className="form-contact py-5 mb-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row gx-5 gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-12">
                            <div className="main-title text-center mb-4 pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <h2 className="fw-bold fs-1 mb-1 main-color">{isEng ? 'Ready to Get Started ?' : 'هل مستعــد للبــدء'}</h2>
                                <p className="mx-auto pb-0 mb-0 text-black">{isEng ? 'Your email address will not be published.' : 'لن يتم نشر عنوان بريدك الإلكتروني.'}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form encType="multipart/form-data" onSubmit={registerContactForm} className="p-5 form">

                                <label className="mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="ItemName">{isEng ? 'Order Name' : 'إســــم الطلـــب'}</label>
                                <input type="text" className="form-control p-2 wow fadeInLeft" placeholder={isEng ? showNameEn : showNameAr} data-wow-duration="1.5s" disabled required name="ItemName" id="ItemName"/>

                                <label className=" second-input mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="ItemType">{isEng ? 'Type' : 'النـــوع'}</label>
                                <input type="text" className="form-control p-2 wow fadeInRight" placeholder={isEng ? showTypeEn : showTypeAr} data-wow-duration="1.5s" disabled required name="ItemType" id="ItemType"/>

                                <label className="mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="CompanyName">{isEng ? 'Company Name' : 'إســـم الشركــــة'}</label>
                                <input onChange={getUserData} type="text" className="form-control p-2 wow fadeInRight" data-wow-duration="1.5s" required name="CompanyName" id="CompanyName"/>

                                <label className=" mt-2 mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="CompanyPhone">{isEng ? 'Phone Number' : 'رقــم الهاتـــف'}</label>
                                <input onChange={getUserData} type="tel" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="CompanyPhone" id="CompanyPhone"/>

                                <label className=" mt-2 mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="CompanyEmail">{isEng ? 'Company Email' : 'البريــد الإلكترونــــي'}</label>
                                <input onChange={getUserData} type="email" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="CompanyEmail" id="CompanyEmail"/>

                                <label className=" mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="Note">{isEng ? 'Note' : 'ملاحظــــة'}</label>
                                <input onChange={getUserData} type="text" className="form-control p-2 mb-2 wow fadeInRight" data-wow-duration="1.5s" required name="Note" id="Note"/>

                                {message.length > 0 ? <p id="alertSave" className={`alert ${message === 'Success Send Data' || message === 'تم ارسال البيانات بنجاح' ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                                <div className="buttons text-center mt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <button className="btn black-btn py-3" type="submit" value="Send Message">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Send Message' : 'إرســال رســالــة'}</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
