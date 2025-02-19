import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign } from 'react-icons/fa';
import { MdPaid, MdPendingActions } from 'react-icons/md';
import { FcPaid } from 'react-icons/fc';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, Sector, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SellerHomePage = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['seller-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/seller-stats');
            return res.data
        }
    })

    // const { data: chartData = [] } = useQuery({
    //     queryKey: ['payment-stats'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/payment-stats');
    //         return res.data;
    //     }
    // })

    // bar chart shape
    const barData = [
        {
            name: 'Revenue',
            uv: stats?.revenue,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Paid Total',
            uv: stats?.paidStatus,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Pending Total',
            uv: stats?.pendingStatus,
            pv: 9800,
            amt: 2290,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pie chart
    const data = [
        { name: 'Pending Total', value: stats?.pendingStatus },
        { name: 'Paid Total', value: stats?.paidStatus },
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // const pieChartData = chartData.map(data => {
    //     return { name: data.category, value: data.revenue }
    // })


    return (
        <div className="px-4 sm:px-8 lg:px-16 py-10">
            <h2 className='text-3xl font-semibold my-10'>
                <span>Hi, Welcome </span>
                {user?.displayName ? <span className='text-blue-500'>Mr. {user?.displayName}</span> : "Back"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <div className="stat card shadow border p-5 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className='text-4xl' />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat card shadow border p-5 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <FcPaid className='text-5xl' />
                    </div>
                    <div className="stat-title">Paid Total</div>
                    <div className="stat-value">{stats.paidStatus}</div>
                    <div className="stat-desc">↗︎ 400 (57%)</div>
                </div>

                <div className="stat card shadow border p-5 rounded-lg">
                    <div className="stat-figure text-secondary">
                        <MdPendingActions className='text-5xl' />
                    </div>
                    <div className="stat-title">Pending Total</div>
                    <div className="stat-value">{stats.pendingStatus}</div>
                    <div className="stat-desc">↘︎ 90 (43%)</div>
                </div>
            </div>

            <div className='lg:flex'>
                <div className='w-1/2'>
                    <BarChart
                        width={500}
                        height={300}
                        data={barData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {barData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className='w-1/2'>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>

            {/* <div className='flex justify-center'>
                <div className='w-1/2'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w-1/2'>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div> */}
        </div>
    );
};

export default SellerHomePage;
