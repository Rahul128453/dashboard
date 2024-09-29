import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CustomBarChart = ({ data }) => {
    return (
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visitors" fill="#82ca9d" />
        </BarChart>
    );
};

export default CustomBarChart;




// import React from 'react';

// const BarChart = ({ data }) => {
//     return (
//         <div>
//             <h3>Bar Chart</h3>
//             <p>{JSON.stringify(data)}</p>
//         </div>
//     );
// };

// export default BarChart;
