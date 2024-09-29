import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomLineChart = ({ data }) => {
    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
    );
};

export default CustomLineChart;



// import React from 'react';

// const LineChart = ({ data }) => {
//     return (
//         <div>
//             <h3>Line Chart</h3>
//             <p>{JSON.stringify(data)}</p>
//         </div>
//     );
// };

// export default LineChart;
