import React from 'react';
import useProduct from '../../../Hooks/useProduct';

const ManageMedicine = () => {

    const [Product] = useProduct();
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-3xl font-bold'>Manage medicine</h1>
                {/* <button className='btn'>Add Medicine</button> */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Medicine</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Medicine</h3>
                        {/* add medicines form */}
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Medicine Name</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Generic Name</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Upload</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Category</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Company</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Mass Unit(Mg of ML)</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Unit Price</span>
                                </label>
                                <input type="text" placeholder="category name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount %</span>
                                </label>
                                <input type="url" placeholder="image upload" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Medicine</button>
                            </div>
                        </form>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-secondary">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>



            </div>





            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Generic Name</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Unit Price</th>
                            <th>Discount Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Product.map((item, index) =>
                                <tr key={item._id}>
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
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.generic_name}
                                    </td>
                                    <td>
                                        {item.category}
                                    </td>
                                    <td>
                                        {item.company}
                                    </td>
                                    <td>
                                        ${item.unit_price}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageMedicine;