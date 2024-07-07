import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import '../Cards/Cards.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:5002/book");

                const data = res.data.filter((data) => data.category === "Free");
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '3rem',
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <h1 className="">Free Offered Courses</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                corporis nulla non suscipit, iure neque earum?
            </p>
            <hr />
            <div className={`card`}>
                <Link to='/course' className="custom-link">
                    <Slider {...settings}>
                        {book.map((item) => (
                            <>
                                <div className="custom-card">
                                    <figure>
                                        <img src={item.image} alt="Images" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-name">
                                            {item.name}
                                        </h2>
                                        <p className="card-title">{item.title}</p>
                                        <div className="card-actions">
                                            <p className="">${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </Link>
            </div>
        </>
    );
}

export default Freebook;