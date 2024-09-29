
import React from 'react';
import { dashboard1Data } from '../../data/dashboard1Data';
import CustomPieChart from '../charts/PieChart';
import CustomBarChart from '../charts/BarChart';
import CustomLineChart from '../charts/LineChart';
import HelpButton from '../common/HelpButton';
import ExportButton from '../common/ExportButton';

const DashboardPage1 = () => {
    return (
        <div className='dashbord'>
            <h2>Dashboard 1</h2>

            <div className='flop'>
                <CustomPieChart data={dashboard1Data.pieData} />
                <CustomBarChart data={dashboard1Data.barData} />
                <CustomLineChart data={dashboard1Data.lineData} />
            </div>
            <HelpButton />
            <ExportButton />
        </div>
    );
};

export default DashboardPage1;
