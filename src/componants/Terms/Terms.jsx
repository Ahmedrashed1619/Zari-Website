import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import { Fragment } from 'react';


export default function Terms({fetchTerms}) {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    useEffect(() => {

        $('.terms-of-service .group-quiz .quiz div').eq(0).addClass('add');
        let answerTermsOfService = Array.from($('.terms-of-service .group-quiz .answer'));
        
        for(let i = 0; i < answerTermsOfService.length; i++){
            $(answerTermsOfService[0]).slideDown();
            if(i > 0)
            {
                $(answerTermsOfService[i]).slideUp();
            }
        };

        $('.terms-of-service .group-quiz .quiz').click(function(){
            $(this).children('div').toggleClass('add');
            $(this).parent().siblings().children().children('div').removeClass('add');
            $(this).siblings().slideToggle(300);
            $(this).parent().siblings().children('.answer').slideUp(300);
        })

        // return () => {
        //     $('.terms-of-service .group-quiz .quiz').click(function(){
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
            $('.terms-of-service').attr('dir', 'rtl');
            $('.group-quiz .quiz div').css({'marginRight' : '0' , 'marginLeft' : '10px'});
        }

        else {
            $('.terms-of-service').attr('dir', 'ltr');
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
            <header id="terms-of-service" className="terms-of-service-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'Terms Of Service' : 'شــروط الخـدمـــة'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* terms-of-service page */}
            <section className="terms-of-service py-5">
                <div className="container py-4">
                    <div className="main-title text-center w-75 mx-auto mb-5 mt-2 wow fadeInUp" data-wow-duration="1.5s">
                        <h2 className="fw-bold fs-6 main-color">{isEng ? 'This Terms of service was last updated on April 4, 2022.' : 'تـم التحديــث الأخيــر لشــروط الخــدمـــة هذه فـي 4 إبريـــل, 2022.'}</h2>
                    </div>
                    {fetchTerms.map((term , i) => (
                        <Fragment key={i}>
                            <div className="group-quiz">
                                <div className="quiz">
                                    <h4 className="fw-bold w-75">{isEng ? term.Title : term.TitleAr}</h4>
                                    <div></div>
                                </div>
                                <div className="answer">
                                    <p className="mb-0">{isEng ? term.Text : term.TextAr}</p>
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

