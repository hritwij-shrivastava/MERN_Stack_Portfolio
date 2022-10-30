import React, { useContext, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import assetContext from '../../Context/Home/assetContext'


export default function ControlledCarousel() {

    const context = useContext(assetContext);
    const {webAddress, userdata } = context;

    const [index, setIndex] = useState(0);
    const [pathVal, setPathval] = useState("Home");
    const [heading, setHeading] = useState("");

    const location = useLocation();
    const pathname = location.pathname
    var background = userdata.bg

    if((typeof background !== 'object') || (background === null)){
        background = {}
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        let parts = pathname.split("/");
        let basePath = parts[1];

        if (basePath === "home" || basePath === "") {
            setPathval("Home")
            setHeading("")
        }
        if (basePath === "about") {
            setPathval("About")
            setHeading("Who am I?")
        }
        if (basePath === "services") {
            setPathval("Services")
            setHeading("What I do?")
        }
        if (basePath === "portfolio") {
            setPathval("Portfolio")
            setHeading("My Recent Work")
        }
        if (basePath === "blog") {
            setPathval('Blog')
            setHeading("My Blogs")
        }
        if (basePath === "contact") {
            setPathval("Contact")
            setHeading("Contact Me")
        }
        if (basePath === "loan") {
            setPathval("Apply Now")
            setHeading("Apply Now")
            console.log(basePath)
        }

    }, [pathname])

    


    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="cslid">
            {Object.keys(background).map((key, index) => {
                return (
                    <Carousel.Item className="h-100" key={index}>
                        <a href={`${webAddress}${background[key]}`} target="_blank" rel="noopener noreferrer">
                            <img className="d-block w-100" src={`${webAddress}${background[key]}`} alt="slide" />
                        </a>
                        <Carousel.Caption>
                            <h1 style={{color: "#fff",fontWeight: "400"}}>{heading}</h1>
                            <p>Home &nbsp;<i className="fa fa-chevron-right"></i>&nbsp; {pathVal} &nbsp;<i className="fa fa-chevron-right"></i></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>

    );
}

