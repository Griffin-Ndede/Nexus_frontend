import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {

	const [categories, setCategories] = useState([])

	const URL = 'http://127.0.0.1:8000/categories/';

    // Fetching data on the categories from the json file
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get(URL);
          console.log(response.data)
          setCategories(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchCategories();
    }, []);

	const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
  return (
    <>
      <Navbar/>
	  <section  className='h-fit'>
        <h1 className="text-4xl font-semibold mb-8 text-custom-orange text-center ">Explore our categories</h1>
            <div id='categories' className="relative">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={2000}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListclassName="absolute bottom-0 left-0 right-0 flex justify-center mb-4 custom-dot-list-style"
                itemclassName="carousel-item-wrapper"
                arrows={true}
                renderButtonGroupOutside={true}
            >
                {categories.map((category) => (
                <div key={category.id} className="carousel-item">
                    <img src={`http://127.0.0.1:8000${category.image}`} alt={category.title} className="m-auto space-x-6 mb-4 items-center w-3/4 md:w-96 md:max-w-xs h-48 rounded-3xl object-cover drop-shadow-xl" />
                    <p className="text-sm font-normal text-center mt-6">{category.title}</p>
                </div>
                ))}
            </Carousel>
            </div>
    </section>
    <Footer/>
    </>
  );
}

export default Home;
