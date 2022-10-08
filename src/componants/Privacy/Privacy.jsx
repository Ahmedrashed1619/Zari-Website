import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import { Fragment } from 'react';


export default function Privacy({fetchPolicy}) {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();

    }, [])

    useEffect(() => {

        $('.privacy-policy .group-quiz .quiz div').eq(0).addClass('add');
        let answerPrivacyPolicy = Array.from($('.privacy-policy .group-quiz .answer'));
        
        for(let i = 0; i < answerPrivacyPolicy.length; i++){
            $(answerPrivacyPolicy[0]).slideDown();
            if(i > 0)
            {
                $(answerPrivacyPolicy[i]).slideUp();
            }
        };

        $('.privacy-policy .group-quiz .quiz').click(function(){
            $(this).children('div').toggleClass('add');
            $(this).parent().siblings().children().children('div').removeClass('add');
            $(this).siblings().slideToggle(300);
            $(this).parent().siblings().children('.answer').slideUp(300);
        })

        // return () => {
        //     $('.privacy-policy .group-quiz .quiz').click(function(){
        //         $(this).children('div').toggleClass('add');
        //         $(this).parent().siblings().children().children('div').removeClass('add');
        //         $(this).siblings().slideToggle(300);
        //         $(this).parent().siblings().children('.answer').slideUp(300);
        //     })
        // }

    }, [])


    let { isEng } = useContext(langContext);

    function changeDir() {
        if (isEng === false) {
            $('.privacy-policy').attr('dir', 'rtl');
            $('.group-quiz .quiz div').css({'marginRight' : '0' , 'marginLeft' : '10px'});
        }

        else {
            $('.privacy-policy').attr('dir', 'ltr');
            $('.group-quiz .quiz div').css({'marginRight' : '10px' , 'marginLeft' : '0'});
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
            <header id="privacy-policy" className="privacy-policy-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'Privacy Policy' : 'سيـاسيـــة الخصوصيـــة'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* privacy-policy page */}
            <section className="privacy-policy py-5">
                <div className="container py-4">
                    <div className="main-title text-center w-75 mx-auto mb-5 mt-2 wow fadeInUp" data-wow-duration="1.5s">
                        <h2 className="fw-bold fs-6 main-color">{isEng ? 'This Privacy Policy was last updated on April 4, 2022.' : 'تـم التحديــث الأخيــر لسيــاســة الخصوصيـــة هذه فـي 4 إبريـــل, 2022.'}</h2>
                    </div>
                    {fetchPolicy.map((policy , i) => (
                        <Fragment key={i}>
                            <div className="group-quiz">
                                <div className="quiz">
                                    <h4 className="fw-bold w-75">{isEng ? policy.Title : policy.TitleAr}</h4>
                                    <div></div>
                                </div>
                                <div className="answer">
                                    <p className="mb-0">{isEng ? policy.Text : policy.TextAr}</p>
                                </div>
                            </div>
                            <hr style={{height: "15px", marginTop: "1.25rem", marginBottom: "1.25rem"}}/>
                        </Fragment>
                    ))}
                </div>
            </section>
        </>
    )
}
