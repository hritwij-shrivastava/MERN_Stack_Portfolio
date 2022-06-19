import React from "react";
import Slider from "react-slick";
import '../../../static/css/tiny.css'
import LeftArrow from "../../../static/img/left-arrow.svg"
import RightArrow from "../../../static/img/right-arrow.svg"

export default function Card(props) {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} className="owl-theme-div owl-div-prev" />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} className="owl-theme-div owl-div-next" />
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <Slider {...settings}>
                {props.data.map((item, index) => {
                    return (
                        <button style={{ padding: "0px" }} onClick={() => { props.update() }} key={index} className="noBorderBtn">
                            <img src={item} alt="" srcSet="" style={{ maxHeight: "300px" }} />
                        </button>
                    );
                })}
            </Slider>
    );
}