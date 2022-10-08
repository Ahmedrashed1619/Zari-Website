import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import productImg from '../images/products/Group 170.png';


export default function Product() {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);

    }, []);

    useEffect(() => {
        $('.products-link').addClass('active');
    
        return () => {
            $('.products-link').removeClass('active');
        }
    }, [])
    

    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])


    const state = {
        0 : 'fadeInRight',
        1 : 'fadeInLeft',
        2 : 'fadeInRight',
        3 : 'fadeInLeft',
        4 : 'fadeInRight',
        5 : 'fadeInLeft',
        6 : 'fadeInRight',
        7 : 'fadeInLeft',
        8 : 'fadeInRight',
        9 : 'fadeInLeft',
        10 : 'fadeInRight',
        11 : 'fadeInLeft',
    }


      // Product data  
    const { id } = useParams();
    const [fetchProductData, setFetchProductData] = useState([]);

    useEffect(() => {
        axios.get(`http://66.29.139.205/zarimain/public/api/product/${id}`)
        .then((res) => {
            setFetchProductData(res.data);
        })
    }, [id]);


    let { isEng } = useContext(langContext);


    return (
        <>
        {Object.keys(fetchProductData).length > 0  ? <>

            {/* header */}
            <header id="productSingle" className="productSingle-page main-img-bg">
                <div className="total-header layer-img d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="main-title-page d-flex justify-content-center align-items-center wow fadeIn" data-wow-duration="1s">
                            <h2 className="fs-1 text-white fw-bold">{isEng ? fetchProductData.product.header : fetchProductData.product.headerAr}</h2>
                        </div>
                    </div>
                </div>
            </header>

            {/* productSingle */}
            <section className="e-commerce single-product py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="caption-product-page wow fadeInLeft" data-wow-duration="1.5s">
                                <h3 className="fw-bold mb-3 fs-1 main-color wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchProductData.product.title : fetchProductData.product.titleAr}</h3>
                                <p className="mb-3 py-1 text-black wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">{isEng ? fetchProductData.product.text : fetchProductData.product.textAr}
                                </p>
                                <h5 className="fw-bold mb-3 wow fadeInLeft" data-wow-duration="1.5s">{isEng ? 'SKU' : 'وحدة حفـــظ'}: {isEng ? fetchProductData.product.sku : fetchProductData.product.skuAr}</h5>
                                <h5 className="fw-bold mb-3 wow fadeInLeft" data-wow-duration="1.5s">{isEng ? 'Availability' : 'مدي التـوفــر'}: {isEng ? fetchProductData.product.availability : fetchProductData.product.availabilityAr}</h5>
                                <h5 className="fw-bold mb-3 wow fadeInLeft" data-wow-duration="1.5s">{isEng ? 'Category' : 'الفئــــة'}: {isEng ? fetchProductData.product.category : fetchProductData.product.categoryAr}</h5>
                                <h5 className="fw-bold mb-4 wow fadeInLeft" data-wow-duration="1.5s">{isEng ? 'Tag' : 'التعـريـــف'}: {isEng ? fetchProductData.product.tag : fetchProductData.product.tagAr}</h5>
                                <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <a href="#" className="btn black-btn py-3 px-5">{isEng ? 'Demo' : 'عـرض تجريبـــي'}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-page text-center wow fadeInRight" data-wow-duration="1.5s">
                                <img src={fetchProductData.product.image} className="w-75 mx-auto" alt="e-commerce"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* description product */}
            <section className="descrip-product pb-5 mb-4" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="description py-5 px-4 wow fadeIn" data-wow-duration="1.5s">
                        <h4 className="fw-bold mb-3 fs-2 main-color wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Description' : 'الوصــــف'}</h4>
                        <p className="mb-2 py-1 text-black wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchProductData.product.desc : fetchProductData.product.descAr}
                        </p>
                        <p className="py-1 text-black mb-5 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? fetchProductData.product.desc2 : fetchProductData.product.desc2Ar}
                        </p>
                        <div className="row gx-0 gy-4 d-flex justify-content-center">
                            {isEng ? fetchProductData.product.features.map((feature, i) => (
                                <div key={i} className="col-md-6">
                                    <div className={`headings wow ${state[i]}`} data-wow-duration="1s" data-wow-delay="0.5s">
                                        <h5><span className='mr-span'><i className="fa-solid fa-check"></i></span>{feature}</h5>
                                    </div>
                                </div>
                            )) : fetchProductData.product.featuresAr.map((feature, i) => (
                                <div key={i} className="col-md-6">
                                    <div className={`headings wow ${state[i]}`} data-wow-duration="1s" data-wow-delay="0.5s">
                                        <h5><span className='ml-span'><i className="fa-solid fa-check"></i></span>{feature}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            </> :   <div id="ready">
                        <i className="fa fa-spinner fa-5x fa-spin"></i>
                    </div>
        }    </>
    )
}