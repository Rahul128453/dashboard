import React from 'react';
import { dashboard2Data } from '../../data/dashboard2Data';
import CustomPieChart from '../charts/PieChart';
import CustomBarChart from '../charts/BarChart';
import CustomLineChart from '../charts/LineChart';
import HelpButton from '../common/HelpButton';
import ExportButton from '../common/ExportButton';

const DashboardPage2 = () => {
    return (
        <div className='dashbord'>
            <h2>Dashboard 2</h2>

            <div className='flop'>

                <CustomBarChart data={dashboard2Data.barData} />
                <CustomPieChart data={dashboard2Data.pieData} />
                <CustomLineChart data={dashboard2Data.lineData} />
            </div>
            <HelpButton />
            <ExportButton />
        </div>
    );
};

export default DashboardPage2;
