import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import moment from 'moment'

export default function Card2(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true
    };

    var data = props.blogs

    return (
        <>
            <aside className="ps-widget ps-widget--popular-posts">
                <h4 className="ps-widget__heading"><span>Popular Posts</span></h4>
                <div className="ps-widget__content">
                    <div className="card__container">
                        <Slider {...settings} className="card__container--inner">
                            {data.map((item, index) => {
                                return (
                                    <div className="card__container--inner--card" key={index}>
                                        <article className="ps-post ps-post--inside small">
                                            <div className="ps-post__thumbnail">
                                                <Link className="ps-post__overlay" to={item.url}></Link>
                                                <img src={item.textAreaArray[0]} alt="img" />
                                            </div>
                                            <div className="ps-post__content">
                                                <div className="ps-post__meta">
                                                    <span className="ps-post__posted">{moment(item.date).format('MMM DD, YYYY')}</span>
                                                </div>
                                                <h4 className="ps-post__title">
                                                    <Link to={item.url}>
                                                        {item.blogTitle}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </article>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </aside>
        </>


    );
}