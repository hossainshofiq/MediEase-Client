import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import DiscountedProducts from './DiscountedProducts';
import useCategory from '../../Hooks/useCategory';
import WhyChooseUs from './ExtraSection1/WhyChooseUs';
import OurServices from './ExtraSection2/OurServices';
import SectionTitle from '../../Components/SectionTitle';
import { Link } from 'react-router-dom';

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

            <div>
                <SectionTitle heading="Category Medicines" subHeading="Explore our category medicines"></SectionTitle>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my10'>
                    {
                        uniqueItems.map(unique =>
                            <Link to={`category/${unique.category}`} key={unique._id}>
                                <div className="card card-compact bg-base-100 border shadow-xl">
                                    <figure>
                                        <img
                                            className="mx-auto max-w-full rounded-lg h-auto"
                                            src={unique.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        
                                        <div className="card-actions justify-end">
                                            <button className="btn w-full font-bold text-center bg-white text-gray-700 hover:bg-blue-500 hover:text-white py-2 rounded transition duration-200">{unique.category}</button>
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
        </div>
    );
};

export default Home;