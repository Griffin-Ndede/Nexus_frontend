import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {

	const [categories, setCategories] = useState([])

	const URL = 'https://nexus-backend-kia6.onrender.com/categories/';

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
      <section className="flex min-h-screen bg-gray-300 font-poppins pt-10 sm:pt-10">
  <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg p-8 items-center w-full">
    <div className="md:ml-10 sm:mt-10 text-center md:text-left w-full md:w-2/3">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-12 text-custom-blue">
        Empowering future<span className="text-custom-orange"> minds,</span> one lesson<span className="text-custom-orange"> at a time.</span>
      </h1>
      <p className="text-lg font-normal">Rent any item, any time, from neighbors near you. Embrace experiences, save resources, and own memories on our platform.</p>
    </div>
    <div className="md:block w-2/3">
      <img
        src="https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="sharing"
        className="rounded-[39%_61%_38%_62%/42%_47%_53%_58%] mx-auto"
      />
    </div>
  </div>
</section>

    <section className="h-fit">
      <h2 className="text-4xl font-semibold mb-8 text-custom-orange text-center">Dive into our vast video library</h2>
      <div id="categories" className="relative">
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
          containerClassName="carousel-container" // Corrected casing
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClassName="absolute bottom-0 left-0 right-0 flex justify-center mb-4 custom-dot-list-style"
          itemClassName="carousel-item-wrapper"
          arrows={true}
          renderButtonGroupOutside={true}
        >
          {categories.map((category) => (
            // attaches links to the categories section that lead to the dashboard
            <Link to="dashboard" key={category.id}> 
              <div className="carousel-item">
                <img
                  src={`https://res.cloudinary.com/dfycvaiv7/${category.image}`}
                  alt={category.title}
                  className="p-4 items-center w-3/4 md:w-96 md:max-w-xs h-48 rounded-3xl object-cover drop-shadow-xl"
                />
                <p className="text-sm font-normal text-center mt-6">{category.title}</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>

    <section id='how-it-works' className="py-16 px-4 h-auto mt-16">
    {/* <h1 className="text-4xl font-semibold mb-8 text-center text-custom-orange">How it works</h1> */}
    <div className="flex flex-col md:flex-row items-center justify-around mx-auto">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src='/images/experiments.webp' className="mx-auto w-1/2 object-cover rounded-[58%_42%_88%_12%/44%_37%_63%_56%]" alt='earn' />
        </div>
        <div className="lg:w-1/3 md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-medium mb-4 text-custom-orange">Explain concepts faster with learning resources</h2>
            <p className="text-base font-normal mb-6 mx-auto md:mx-0">Use pre-made visuals to clarify concepts quickly, capture students' attention, and reduce the need for repeated explanations.</p>
            <Link to="/dashboard">
                <button className="bg-custom-orange hover:bg-custom-orange text-white text-base font-medium py-2 px-2.5 rounded-3xl">
                    Learn more
                </button>
            </Link>
        </div>
    </div>
    <div className="flex flex-col md:flex-row mt-12 space-x-0 md:space-x-4 items-center justify-around mx-auto">
        <div className="lg:w-1/3 md:w-1/2 text-center md:text-right mb-8 md:mb-0">
            <h2 className="text-2xl font-medium mb-4 text-custom-orange">Students can now revisit your science experiments anytime.</h2>
            <p className="text-base font-normal mb-6 mx-auto md:mx-0">Students can now access your science experiments on demand, enabling them to review concepts anytime they need.</p>
            <Link to="/products">
                <button className="bg-custom-orange hover:bg-custom-orange text-white text-base font-medium py-2 px-2.5 rounded-3xl">
                    Learn more
                </button>
            </Link>
        </div>
        <div className="w-full md:w-1/2">
            <img src='/images/experiments.webp' className="mx-auto w-1/2 object-cover rounded-[58%_42%_88%_12%/44%_37%_63%_56%]" alt='experiments' />
        </div>
    </div>
</section>

    <Footer/>
    </>
  );
}

export default Home;
