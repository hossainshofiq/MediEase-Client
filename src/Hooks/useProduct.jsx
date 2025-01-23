import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProduct = () => {

    // const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(true);


    // // update by tanstack query for get all medicine
    // useEffect(() => {
    //     fetch('http://localhost:5000/medicine')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setProduct(data);
    //             setLoading(false);
    //         })
    // }, [])

    const axiosPublic = useAxiosPublic();

    const { data: product = [], isLoading, refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axiosPublic.get('/medicines');
            return res.data;
        }
    })

    return [product, isLoading, refetch]
};

export default useProduct;