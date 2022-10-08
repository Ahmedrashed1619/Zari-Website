import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import $ from 'jquery';
import { langContext } from '../context/store';
// import { Link } from 'react-router-dom';
// import zariOnTime from '../images/home/iPhone 12 Pro (1).png';
// import zariJumla from '../images/home/iPhone 12 Pro (2).png';
// import zariGifts from '../images/home/iPhone 12 Pro (3).png';
// import zariExpress from '../images/home/Group 32.png';


export default function Projects({fetchProjects}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    let { isEng } = useContext(langContext);


    useEffect(() => {
        if ($('.caption-details h2').text() === 'Zari Express') {
            if(isEng === true) {
                $('.caption-details p').text(`Zari Express is one of the projects of Zari Company, a Saudi-Egyptian company Present in Saudi Arabia since 2014.Zari Express aims to spread the Egyptian industry in Saudi Arabia and the Gulf.`);
            }
            else{
                $('.caption-details p').text(`Zari Express هو أحد مشاريع شركة Zari ، وهي شركة سعودية مصرية موجودة في المملكة العربية السعودية منذ عام 2014 ، وتهدف Zari Express إلى نشر الصناعة المصرية في المملكة العربية السعودية والخليج.`);
            }
            $('.show-details .buttons a').attr('href', '#/projects/4');
        }
    }, [])


    useEffect(() => {

        new WOW.WOW().init();

    }, []);


    function changeDir() {
        if (isEng === false) {

            $('.home-projects .imgs').attr('dir', 'rtl');
            $('.show-details .caption-details').attr('dir', 'rtl');
            $('.show-details .caption-details .buttons a').html('اقـرأ المزيــد');

        }
    
        else {
    
            $('.home-projects .imgs').attr('dir', 'ltr');
            $('.show-details .caption-details').attr('dir', 'ltr');
            $('.show-details .caption-details .buttons a').html('Read More');
    
        }
    }


    useEffect(() => {
        changeDir();
    
        return () => {
            changeDir();
        }
    }, [isEng]);


    useEffect(() => {
        $('.imgs .img-group').click(function () {
            let clickSrc = $(this).children('img').attr('src');
            let clickTitle = $(this).children('h4').text();
            $('.img-details img').attr('src', clickSrc);
            $('.caption-details h2').text(clickTitle);
            changeDetails();
        })
        
        const changeDetails = () => {
            if ($('.caption-details h2').text() === fetchProjects[0].title || $('.caption-details h2').text() === fetchProjects[0].titleAr) {
                if(isEng === true) {
                    $('.caption-details p').text(fetchProjects[0].text);
                }
                else{
                    $('.caption-details p').text(fetchProjects[0].textAr);
                }
                $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[0].id}`);
            }
        
            else if ($('.caption-details h2').text() === fetchProjects[1].title || $('.caption-details h2').text() === fetchProjects[1].titleAr) {
                if(isEng === true) {
                    $('.caption-details p').text(fetchProjects[1].text);
                }
                else{
                    $('.caption-details p').text(fetchProjects[1].textAr);
                }
                $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[1].id}`);
            }
        
            else if ($('.caption-details h2').text() === fetchProjects[2].title || $('.caption-details h2').text() === fetchProjects[2].titleAr) {
                if(isEng === true) {
                    $('.caption-details p').text(fetchProjects[2].text);
                }
                else{
                    $('.caption-details p').text(fetchProjects[2].textAr);
                }
                $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[2].id}`);
            }
        
            else if ($('.caption-details h2').text() === fetchProjects[3].title || $('.caption-details h2').text() === fetchProjects[3].titleAr) {
                if(isEng === true) {
                    $('.caption-details p').text(fetchProjects[3].text);
                }
                else{
                    $('.caption-details p').text(fetchProjects[3].textAr);
                }
                $('.show-details .buttons a').attr('href', `#/projects/${fetchProjects[3].id}`);
            }
        }
        
    }, [isEng]);
    

    return (
            <>

                {/* header */}
                <header id="projects" className="projects-page main-img-bg">
                    <div className="total-header layer-img d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                                <h2 className="fs-1 text-white fw-bold">{isEng ? 'Our Projects' : 'مشـاريعنـــا'}</h2>
                            </div>
                        </div>
                    </div>
                </header>
                
                {/* projects */}
                <section className="home-projects py-5">
                    <div className="row gx-0 gy-4">
                        <div className="col-12">
                            <div className="main-title text-center pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <h2 className="fw-bold fs-1 mb-2">{isEng ? 'Our Projects' : 'مشـاريعنـــا'}</h2>
                                <p className="mx-auto pb-0 mb-0">{isEng ? 'Let’s see our Projects' : 'دعنــا نريك مشـاريعنـــا'}</p>
                            </div>
                        </div>
                        <div className="w-85 mx-auto pb-3">
                            <div className="cont-imgs">
                                <div className="imgs d-flex justify-content-center align-items-start">
                                    <div className="img-group d-flex flex-column text-center wow fadeInRight" data-wow-duration="1.5s">
                                        <img src={fetchProjects[0].image} className="w-75 mx-auto mb-3"
                                            alt="zari on time"/>
                                        <h4 className="fw-bold">{isEng ? fetchProjects[0].title : fetchProjects[0].titleAr}</h4>
                                    </div>
                                    <div className="img-group d-flex flex-column text-center jomla wow fadeInDown" data-wow-duration="1.5s">
                                        <img src={fetchProjects[1].image} className="w-75 mx-auto mb-3"
                                            alt="zari jomla"/>
                                        <h4 className="fw-bold">{isEng ? fetchProjects[1].title : fetchProjects[1].titleAr}</h4>
                                    </div>
                                    <div className="img-group d-flex flex-column text-center gift wow fadeInUp" data-wow-duration="1.5s">
                                        <img src={fetchProjects[2].image} className="w-75 mx-auto mb-3"
                                            alt="zari gifts"/>
                                        <h4 className="fw-bold">{isEng ? fetchProjects[2].title : fetchProjects[2].titleAr}</h4>
                                    </div>
                                    <div className="img-group d-flex flex-column text-center wow fadeInLeft" data-wow-duration="1.5s">
                                        <img src={fetchProjects[3].image} className="w-75 mx-auto mb-3" alt="zari Express"/>
                                        <h4 className="fw-bold">{isEng ? fetchProjects[3].title : fetchProjects[3].titleAr}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="show-details mt-5">
                            <div className="w-85 mx-auto">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-8">
                                        <div className="caption-details wow fadeInLeft" data-wow-duration="1.5s">
                                            <h2 className="fw-bold mb-3 text-white wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchProjects[3].title : fetchProjects[3].titleAr}</h2>
                                            <p className="mb-3 py-1 lh-base text-white wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"></p>
                                            {/* <p className="mb-3 py-1 lh-base text-white wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchHome.projects.date[3].text : fetchHome.projects.date[3].textAr}</p> */}
                                            <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                                <a href={`#/projects/${fetchProjects[3].id}`} className="btn btn-light py-3 px-5 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Read More' : 'اقـرأ المزيــد'}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img-details text-center wow fadeInRight" data-wow-duration="1.5s">
                                            <img src={fetchProjects[3].image} className="mx-auto" alt="zari Express"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}
