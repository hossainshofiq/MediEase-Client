import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import CategoryMedicine from './CategoryMedicine';

const Category = () => {

    const [product] = useProduct();

    const Tablets = product.filter(item => item.category === 'Tablet');
    const Capsules = product.filter(item => item.category === 'Capsule');
    const Syrups = product.filter(item => item.category === 'Syrup');
    const Injections = product.filter(item => item.category === 'Injection');
    const Topicals = product.filter(item => item.category === 'Topical');

    return (
        <div>
            <CategoryMedicine items={Tablets} title={"Tablet"}></CategoryMedicine>
            <CategoryMedicine items={Capsules} title={"Capsule"}></CategoryMedicine>
            <CategoryMedicine items={Syrups} title={"Syrup"}></CategoryMedicine>
            <CategoryMedicine items={Injections} title={"Injection"}></CategoryMedicine>
            <CategoryMedicine items={Topicals} title={"Topical"}></CategoryMedicine>
        </div>
    );
};

export default Category;