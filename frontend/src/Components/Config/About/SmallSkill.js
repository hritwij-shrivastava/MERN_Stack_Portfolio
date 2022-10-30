import React, { useContext } from 'react';
import Slider from "react-slick";

import assetContext from '../../../Context/Home/assetContext'

import LeftArrow from "../../../static/img/simple-prev.svg"
import RightArrow from "../../../static/img/simple-next.svg"


const data = []
export default function SmallSkill() {

    const context = useContext(assetContext);
    const {webAddress,userdata} = context;

    var skill = userdata.skills
    
    if((skill !==null) && (typeof skill !== 'undefined')){
        for (var key of Object.keys(skill)) {
            var onj = {
                url : `${webAddress}${skill[key]}`
            }
            data.push(onj)
        }
    }

    
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} className="simple-slide simpleSlide-prev"/>
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} className="simple-slide simpleSlide-next" />
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="card__container">
            {(data !==null)?
            <Slider {...settings} className="card__container--inner">
                {data.map((item, index) => {
                    return (
                        <div className="card__container--inner--card" key={index}>
                           <div className="clients-content ">
                                <a href={`${item.url}`} rel="noreferrer" target="_blank">
                                    <img src={`${item.url}`} className="attachment-image" alt="" loading="lazy"/>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            :null}
            </div>

    );
}