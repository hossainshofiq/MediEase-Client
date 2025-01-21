import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCategory = () => {

    const axiosPublic = useAxiosPublic();

    const { data: category = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories');
            return res.data;
        }
    })

    return [category, isLoading]
};

export default useCategory;