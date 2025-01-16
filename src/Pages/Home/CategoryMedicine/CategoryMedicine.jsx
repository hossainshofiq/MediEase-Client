// import React, { useEffect, useState } from 'react';
// import useProduct from '../../../Hooks/useProduct';
// import SectionTitle from '../../../Components/SectionTitle';

// const CategoryMedicine = ( {products, title}) => {

//     // const [category, setCategory] = useState([]);

//     // useEffect(() => {
//     //     fetch('http://localhost:5000/category')
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             console.log(data);
//     //             setCategory(data)
//     //         })
//     // }, [])

//     const [product] = useProduct();

//     // const Tablet = product.filter(item => item.category === 'Tablet');
//     // const Capsule = product.filter(item => item.category === 'Capsule');
//     // const Syrup = product.filter(item => item.category === 'Syrup');
//     // const Injection = product.filter(item => item.category === 'Injection');
//     // const Topical = product.filter(item => item.category === 'Topical');

//     return (
//         <div>
//             <h1>Category Medicine:{product.length} </h1>

//             <SectionTitle heading="Category Medicine" subHeading="Here is our all category medicine"></SectionTitle>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//                 {
//                     product.map(item =>
//                         <div key={item._id} className="card bg-base-100 shadow-xl">
//                             <figure>
//                                 <img
//                                     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                                     alt="Shoes" />
//                             </figure>
//                             <div className="card-body">
//                                 <h2 className="card-title">{item.categoryName}</h2>
//                                 <p>{item.medicineCount}</p>
//                                 <div className="card-actions justify-end">
//                                     <button className="btn btn-primary">Buy Now</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

// export default CategoryMedicine;

import React from 'react';
import CategoryCard from './CategoryCard';
import SectionTitle from '../../../Components/SectionTitle';

const CategoryMedicine = ({ items, title }) => {
    return (
        <div>
            <SectionTitle heading="Category Medicine"></SectionTitle>
            <h2>Category: {items.length} </h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    items.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryMedicine;