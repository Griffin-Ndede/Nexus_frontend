import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <section>
        <div className="bg-black text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">TechFest</h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Space : The Timeless Infinity
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Explore your favourite events and register now to showcase your talent and win exciting prizes.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>

            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
              <div className="h-48 flex flex-wrap content-center">
               
                <img
                  className="inline-block mt-28 hidden xl:block"
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  alt="First Image"
                />
              
                <img
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  alt="Second Image"
                />
                
                <img
                  className="inline-block mt-28 hidden lg:block"
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  alt="Third Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Home;
