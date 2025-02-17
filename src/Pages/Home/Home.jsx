import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import DiscountedProducts from './DiscountedProducts';
import useCategory from '../../Hooks/useCategory';
import WhyChooseUs from './ExtraSection2/WhyChooseUs';
import OurServices from './ExtraSection1/OurServices';
import SectionTitle from '../../Components/SectionTitle';
import { Link } from 'react-router-dom';
import FeaturedBrandsSellers from './FeaturedBrandsSellers';
import CustomersReviews from './CustomersReviews';
import HealthWellnessTips from './HealthWellnessTips';

const Home = () => {

    const [category] = useCategory();
    // console.log(category);

    const uniqueItems = category.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.category === value.category
        ))
    );

    // console.log(uniqueItems);

    return (
        <div>
            <Helmet>
                <title>MediEase | Home</title>
            </Helmet>

            <Slider></Slider>

            <div className='w-11/12 mx-auto my-10'>
                <SectionTitle heading="Category Medicines" subHeading="Explore a Wide Range of Medicines by Category"></SectionTitle>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                    {
                        uniqueItems.map(unique =>
                            <Link to={`category/${unique.category}`} key={unique._id}>
                                <div className="card card-compact bg-base-100 border shadow-md hover:shadow-xl transition duration-300">
                                    <figure>
                                        <img
                                            className="w-full h-52 object-cover"
                                            src={unique.image}
                                            alt={unique?.category} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{unique.category}</h2>
                                        <p className='line-clamp-2'>{unique.short_description}</p>
                                        <div className="card-actions justify-center">
                                            {/* <h3 className='font-bold text-blue-600 bg-base-300 w-full text-center py-2 rounded-md'>{unique.category}</h3> */}
                                            <button className="btn btn-primary w-full font-bold py-2 rounded-md transition duration-200">See More</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </section>
            </div>

            <DiscountedProducts></DiscountedProducts>
            <OurServices></OurServices>
            <WhyChooseUs></WhyChooseUs>
            <CustomersReviews></CustomersReviews>
            <FeaturedBrandsSellers></FeaturedBrandsSellers>
            <HealthWellnessTips></HealthWellnessTips>
        </div>
    );
};

export default Home;