import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProduct = () => {

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