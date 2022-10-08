import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { langContext } from '../context/store';
import $ from 'jquery';


export default function Project() {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {
        new WOW.WOW().init();
    }, [])


    const [user, setUser] = useState({
        FirstName:'',
        LastName:'',
        Phone:'',
        Email:'',
        Job:'',
        Experience:'',
        Country:'',
        City:'',
        JobTitle:'',
        CompanyName:'',
        CV: [],
        Note:''
    })

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);


    function getUserData(e) {
        let myUser = {...user};
        if(e.target.name === 'CV'){
            myUser[e.target.name] = e.target.files[0];
        }
        else{
            myUser[e.target.name] = e.target.value;
        }
        setUser(myUser);
    }

    // let inputs =Array.from(document.querySelectorAll('input'));

    // if(message === 'Success') {
    //     inputs.map((i) => {
    //         i.value = '';
    //     })
    // }

    async function registerJoinForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: 'http://66.29.139.205/zarimain/public/api/join',
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
                <header id="join" className="join-page main-img-bg">
                    <div className="total-header layer-img d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                                <h2 className="fs-1 text-white fw-bold">{isEng ? 'Join Us' : 'انضم إلينـــا'}</h2>
                            </div>
                        </div>
                    </div>
                </header>

                {/* form join */}
                <section className="form-join py-5" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="container">
                        <div className="row gx-0 gy-4">
                            <div className="col-12">
                                <div className="main-title text-center mb-4 pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h2 className="fw-bold fs-1 mb-1 main-color">{isEng ? 'Job Application' : 'طلب وظيفـــي'}</h2>
                                    <p className="mx-auto pb-0 mb-0 text-black">{isEng ? 'Want to be one of Zari Family ?' : 'تريد أن تكون أحد أفراد عائلتنــــا ؟'}</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <form encType="multipart/form-data" onSubmit={registerJoinForm} className="row gx-5 gy-2 p-5 form mb-5">

                                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                                        <label className="mb-1" htmlFor="FirstName">{isEng ? 'First Name' : 'الإســــم الأول'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" name="FirstName" id="FirstName"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                                        <label className=" second-input mb-1" htmlFor="LastName">{isEng ? 'Last Name' : 'إســــم العائلــــة'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" required name="LastName" id="LastName"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="Phone">{isEng ? 'Phone Number' : 'رقــم الهاتـــف'}</label>
                                        <input onChange={getUserData} type="tel" className="form-control p-2" required name="Phone" id="Phone"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="Email">{isEng ? 'Email Address' : 'البريــد الإلكترونــــي'}</label>
                                        <input onChange={getUserData} type="email" className="form-control p-2" required name="Email" id="Email"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="Job">{isEng ? 'Job Position' : 'الوظيـفــة'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" required name="Job" id="Job"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="Experience">{isEng ? 'Experience Level' : 'مستـــوي الخبـــرة'}</label>
                                        <input onChange={getUserData} type="number" className="form-control p-2" required name="Experience" id="Experience"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="Country">{isEng ? 'Country' : 'البلـــد'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" required name="Country" id="Country"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="City">{isEng ? 'City' : 'المدينــــة'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" required name="City" id="City"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="JobTitle">{isEng ? 'Current Job Title' : 'المسمــي الوظيفـــي الحالـــي'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" required name="JobTitle" id="JobTitle"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="CompanyName">{isEng ? 'Current Company Name' : 'إســـم الشركة'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2" required name="CompanyName" id="CompanyName"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="CV">{isEng ? 'CV' : 'السيـــرة الذاتيــــة'}</label>
                                        <input onChange={getUserData} type="file" className="form-control p-2 mb-2" required multiple name="CV" id="CV"/>
                                    </div>

                                    <div className="col-lg-6 wow fadeInRight" data-wow-duration="1.5s">
                                        <label className=" mt-2 mb-1" htmlFor="Note">{isEng ? 'Note' : 'ملاحظــــة'}</label>
                                        <input onChange={getUserData} type="text" className="form-control p-2 mb-2" name="Note" id="Note"/>
                                    </div>

                                    {message.length > 0 ? <p id="alertSave" className={`alert ${message === 'Success Send Data' || message === 'تم ارسال البيانات بنجاح' ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                                    <div className="buttons text-center mt-3 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <button className="btn black-btn py-3" type="submit" value="Save">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Save' : 'حفــــظ'}</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}