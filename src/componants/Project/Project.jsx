import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import ReactPlayer from 'react-player';
import $ from 'jquery';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import projectImg from '../images/projects/Group 164.png';
// import vid from '../images/projects/001 Welcome.mp4';


export default function Project() {

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
        axios.get(`http://66.29.139.205/zarimain/public/api/project/${id}`)
        .then((res) => {
            setFetchProjectData(res.data);
        })
    }, [id]);

    let { isEng } = useContext(langContext);


    return ( 
        <>
            {Object.keys(fetchProjectData).length > 0 ?  <>

                {/* header */}
                <header id="projectSingle" className="projectSingle-page main-img-bg">
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
                                <ReactPlayer controls width='100%' height='600px' url={fetchProjectData.project.video} config={{file: {attributes: {poster: fetchProjectData.project.thumbnail}}}} className="mx-auto my-5 wow fadeInDown" data-wow-duration="1s" />
                                <p className="mb-3 py-1 text-black wow fadeIn" data-wow-duration="1s">{isEng ? fetchProjectData.project.text : fetchProjectData.project.textAr}
                                </p>
                                <p className="mb-5 py-1 text-black wow fadeIn" data-wow-duration="1s">{isEng ? fetchProjectData.project.text2 : fetchProjectData.project.text2Ar}
                                </p>
                                <img src={fetchProjectData.project.banner} className="mx-auto wow fadeInUp" data-wow-duration="1s" alt="Group"/>
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
