import React, { useEffect, useState } from 'react';
import SectionTitle from './../../Components/SectionTitle';
import { FaArrowDown, FaArrowUp, FaCartPlus, FaEye, FaSearch } from 'react-icons/fa';
import useProduct from '../../Hooks/useProduct';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

const Shop = () => {

    const [product, isLoading] = useProduct();
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const handleAddToCart = (item) => {
        const { image, name, company, unit_price, _id } = item;
        // console.log(item, user.email);
        if (user && user?.email) {
            // send cart item to the database
            // console.log(user.email, item);

            const cartMedicine = {
                medicineId: _id,
                email: user.email,
                name,
                image,
                company,
                unit_price,

            }
            axiosSecure.post('/carts', cartMedicine)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged in?",
                text: "Please Login, if you want to add this to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    const handleSee = (item) => {
        // console.log(item._id);
        setSelectedMedicine(item);
    }

    // search by medicine name, generic_name,company
    const [searchText, setSearchText] = useState('');
    const [filteredMedicines, setFilteredMedicines] = useState(product);

    useEffect(() => {
        setFilteredMedicines(product)
    }, [product])

    const handleSearch = (event) => {
        const text = event.target.value.toLowerCase();
        setSearchText(text);

        const filtered = product.filter(pro =>
            pro.name.toLowerCase().includes(text) ||
            pro.generic_name.toLowerCase().includes(text) ||
            pro.company.toLowerCase().includes(text)
        );

        setFilteredMedicines(filtered);
    };

    // sort by price
    const [medicines, setMedicines] = useState(product);
    const [flag, setFlag] = useState(true);
    const [bool, setBool] = useState(true);

    const handleSortByPrice = () => {
        setFlag(false);

        // let sortedData;
        if (bool) {
            const sortedData = product.sort((a, b) => a.unit_price - b.unit_price);
            setMedicines(sortedData);
        }

        else {
            const sortedData = product.sort((a, b) => b.unit_price - a.unit_price);
            setMedicines(sortedData);
        }
        setBool(!bool);

        // console.log(sortedData);
    }

    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>MediEase | Shop</title>
            </Helmet>

            <div className=" mt-20 mb-5">
                <SectionTitle heading="All Medicines" subHeading="Your One-Stop Destination for All Medicines"></SectionTitle>
            </div>

            {/* Search by medicine name, generic-name, and company part */}
            <div className='flex justify-between items-center'>
                <label className="input input-bordered flex items-center gap-2 w-1/4">
                    <FaSearch className='text-xl'></FaSearch>
                    <input type="text" className="grow" placeholder="Search" value={searchText} onChange={handleSearch} />
                </label>
                <div>
                    <button
                        onClick={handleSortByPrice}
                        className='btn btn-success text-white'>
                        Sort By Price
                        {flag ? '' : bool ? <FaArrowUp /> : <FaArrowDown />}
                    </button>
                </div>
            </div>

            {/* all medicines showing in card format */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {
                    filteredMedicines?.length > 0 ? (
                        filteredMedicines.map(item =>
                            <div key={item._id} className="card shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                                <div className="badge badge-success absolute top-4 right-4">{item.category}</div>
                                <figure className="bg-gray-100 p-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-40 object-contain"
                                    />
                                </figure>
                                <div className="p-4">
                                    <div className='flex justify-between items-center'>
                                        <h2 className="text-md font-semibold">{item.name}</h2>
                                        {/* <p className="text-sm text-gray-600">{item.category}</p> */}
                                        {/* <p className="text-sm text-gray-500">{item.company}</p> */}
                                        {/* <p className="text-sm font-medium text-gray-700">{item.generic_name}</p> */}
                                        <p className="text-md font-bold text-primary">${item.unit_price}</p>
                                    </div>
                                    <div className="flex justify-between items-center gap-2 mt-4">
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className="btn btn-primary btn-sm flex items-center gap-1"
                                        ><FaCartPlus></FaCartPlus> Add </button>
                                        <button
                                            onClick={() => handleSee(item)}
                                            className="btn btn-outline btn-primary btn-sm flex items-center gap-1"
                                        ><FaEye></FaEye> View </button>
                                    </div>
                                </div>
                            </div>

                        )
                    ) : (
                        <div className='col-span-full text-center py-10'>
                            <h2 className='font-semibold text-2xl text-center'>No medicines found for <span className='text-blue-600'>"{searchText}"</span></h2>
                            <p>Try searching with a different Medicine name.</p>
                        </div>
                    )
                }

            </div>

            {/* all medicines showing in card format */}
            {/* <div className="overflow-x-auto my-10">
                <table className="table border">
                    <thead className='bg-green-300 text-black'>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Generic Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredMedicines?.length > 0 ?
                                (
                                    filteredMedicines.map((item, index) =>
                                        <tr key={item._id} className='hover:bg-gray-100'>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={item.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.company}</td>
                                            <td>{item.generic_name}</td>
                                            <td>${item.unit_price}</td>
                                            <th className='flex gap-3'>
                                                <button onClick={() => handleAddToCart(item)} className="btn btn-primary btn-sm">Select</button>
                                                <button onClick={() => handleSee(item)} className="btn btn-primary btn-sm"><FaEye></FaEye></button>
                                            </th>
                                        </tr>
                                    )
                                ) : (
                                    <tr className="text-center col-span-full">
                                        <td className="text-2xl font-semibold text-gray-700">
                                            No medicines found for "{searchText}"
                                        </td>
                                        <td className="text-gray-500">Try searching with a different Medicine name.</td>
                                    </tr>
                                )
                        }

                    </tbody>
                </table>
            </div> */}

            {/* Medicine Details Modal */}
            {selectedMedicine && (
                <div className="modal modal-open">
                    <div className="modal-box relative">
                        <button
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                            onClick={() => setSelectedMedicine(null)}
                        >
                            <MdOutlineCloseFullscreen className='text-2xl text-red-600'></MdOutlineCloseFullscreen>
                        </button>
                        <h2 className="text-lg font-bold">
                            {selectedMedicine.name}
                        </h2>
                        <img
                            src={selectedMedicine.image}
                            alt={selectedMedicine.name}
                            className="w-full h-40 object-cover my-4"
                        />
                        <p>
                            <strong>Category:</strong> {selectedMedicine.category}
                        </p>
                        <p>
                            <strong>Company:</strong> {selectedMedicine.company}
                        </p>
                        <p>
                            <strong>Generic Name:</strong>{' '}
                            {selectedMedicine.generic_name}
                        </p>
                        <p>
                            <strong>Price:</strong> ${selectedMedicine.unit_price}
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Shop;