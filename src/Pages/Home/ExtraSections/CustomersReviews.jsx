import React, { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        review: "This platform helped me find the best budget-friendly smartphone. The recommendations were spot on!",
        image: "https://i.ibb.co/SyJ2S2J/team-1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        review: "I love how I can ask for recommendations and get real user feedback. Super helpful for tech purchases!",
        image: "https://i.ibb.co/wrGY5DV/team2.webp",
    },
    {
        id: 3,
        name: "Mike Brown",
        review: "Finding the right laptop for my work was easy. The recommendation system works great!",
        image: "https://i.ibb.co/rt65nT1/team-3.jpg",
    },
    {
        id: 4,
        name: "Emma Wilson",
        review: "I was confused between two smartwatches, but the suggestions from users helped me decide!",
        image: "https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fnorthwestms.sidearmsports.com%2fimages%2f2024%2f8%2f1%2fEmmaWilson.jpg&width=300&type=webp",
    },
    {
        id: 5,
        name: "David Miller",
        review: "A great platform for tech lovers! You can easily ask, recommend, and discuss different products.",
        image: "https://images.mykhel.com/webp/images/cricket/players/4/4804.jpg",
    },
    {
        id: 6,
        name: "Sophia Lee",
        review: "The ability to edit and delete my recommendations is very useful. Love the user-friendly interface!",
        image: "https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/geZksAZkZlH-n5RYsnK0nhkASm8=/550x550/cultureampcom/production/b94/a47/9ea/b94a479eaece4ef09bda0e39/Sophia-Lee.jpeg",
    },
    {
        id: 7,
        name: "Michael Johnson",
        review: "Great community-driven product suggestions! I found the perfect gaming mouse thanks to this site.",
        image: "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/ktiuwxnsnx1dcwd92l7r",
    }
];

const CustomersReviews = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="py-10">
            <div className="w-11/12 mx-auto text-center">
                <SectionTitle heading="Customers Reviews" subHeading="Hear What Our Happy Customers Say About Us!"></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                    {(showAll ? reviews : reviews.slice(0, 4)).map((review, id) => (
                        <div key={id} className="shadow-lg rounded-md border p-6 text-left transition-transform transform hover:-translate-y-2" >
                            <p className="text-gray-700 italic">"{review.review}"</p>
                            <div className="mt-4 flex items-center">
                                <img src={review.image} alt={review.name} className="w-12 h-12 object-contain rounded-full mr-4" />
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800">{review.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={() => setShowAll(!showAll)} className="btn btn-primary mt-8 px-6 py-3 rounded-md" >
                    {showAll ? "Show Less" : "Read More Reviews"}
                </button>
            </div>
        </div>
    );
};

export default CustomersReviews;