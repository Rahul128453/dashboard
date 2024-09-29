import React from 'react';
import { dashboard3Data } from '../../data/dashboard3Data';
import CustomPieChart from '../charts/PieChart';
import CustomBarChart from '../charts/BarChart';
import CustomLineChart from '../charts/LineChart';
import HelpButton from '../common/HelpButton';
import ExportButton from '../common/ExportButton';

const DashboardPage3 = () => {
    return (
        <div className='dashbord'>
            <h2>Dashboard 3</h2>

            <div className='flop'>

                <CustomBarChart data={dashboard3Data.barData} />
                <CustomLineChart data={dashboard3Data.lineData} />
                <CustomPieChart data={dashboard3Data.pieData} />
            </div>
            <HelpButton />
            <ExportButton />
        </div>
    );
};

export default DashboardPage3;
