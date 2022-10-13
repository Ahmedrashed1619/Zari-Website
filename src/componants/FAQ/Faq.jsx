import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
// import Questions from '../images/faq/Questions-bro 1.png';



export default function Faq({fetchFaqs}) {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])

    useEffect(() => {

        $('.faq .group-quiz .quiz div').eq(0).addClass('add');
        let answerFaq = Array.from($('.faq .group-quiz .answer'));
        
        for(let i = 0; i < answerFaq.length; i++){
            $(answerFaq[0]).slideDown();
            if(i > 0)
            {
                $(answerFaq[i]).slideUp();
            }
        };

        $('.faq .group-quiz .quiz').click(function(){
            $(this).children('div').toggleClass('add');
            $(this).parent().siblings().children().children('div').removeClass('add');
            $(this).siblings().slideToggle(300);
            $(this).parent().siblings().children('.answer').slideUp(300);
        })

        // return () => {
        //     $('.faq .group-quiz .quiz').click(function(){
        //         $(this).children('div').addClass('add');
        //         $(this).parent().siblings().children().children('div').removeClass('add');
        //         $(this).siblings().slideDown(300);
        //         $(this).parent().siblings().children('.answer').slideUp(300);
        //     })
        // }

    }, [])


    let { isEng } = useContext(langContext);

    function changeDir() {
        if (isEng === false) {
            $('.faq').attr('dir', 'rtl');
            $('.group-quiz .quiz div').css({'marginRight' : '0' , 'marginLeft' : '10px'});
            $('.question').attr('dir', 'rtl');
        }

        else {
            $('.faq').attr('dir', 'ltr');
            $('.group-quiz .quiz div').css({'marginRight' : '10px' , 'marginLeft' : '0'});
            $('.question').attr('dir', 'ltr');
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
            <header id="faq" className="faq-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? 'FAQs' : 'الأسئلـة الأكثـر تكـرارا'}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* faq page */}
            <section className="faq py-5">
                <div className="container py-4">
                    {fetchFaqs.data.map((faq , i) => (
                        <Fragment key={i}>
                            <div className="group-quiz">
                                <div className="quiz">
                                    <h4 className="fw-bold w-75">{isEng ? faq.Title : faq.TitleAr}</h4>
                                    <div></div>
                                </div>
                                <div className="answer">
                                    <p className="mb-0">{isEng ? faq.Text : faq.TextAr}</p>
                                </div>
                            </div>
                            <hr style={{height: "15px", marginTop: "1.25rem", marginBottom: "1.25rem"}}/>
                        </Fragment>
                    ))}
                </div>
            </section>

            {/* question */}
            <section className="question pt-4 mb-5">
                <div className="container">
                    <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <div className="question-title wow fadeInLeft" data-wow-duration="1.5s">
                                <h4 className="fw-bold mb-3 fs-2 main-color wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchFaqs.footer.header : fetchFaqs.footer.headerAr}</h4>
                                <p className="mb-4 py-1 lh-base text-black-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchFaqs.footer.text : fetchFaqs.footer.textAr}</p>
                                <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <Link to="../Contact" className="btn black-btn py-3 px-5">{isEng ? 'Send Message' : 'إرســال رســـالـة'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-question wow fadeInRight" data-wow-duration="1.5s">
                                <img src={fetchFaqs.footer.image} className="w-100 mx-auto" alt="Questions-bro"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
