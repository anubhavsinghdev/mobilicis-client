import { useState, Fragment } from 'react';

import { userSchema, citySchema } from '@/constants';
import Navbar from './Navbar';

const DataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [otherTable, setOtherTable] = useState(false);

    return (
        <Fragment>
            <Navbar data={data} setData={setData} setLoading={setLoading} otherTable={otherTable} setOtherTable={setOtherTable} />
            <h1 className="text-2xl font-bold text-center mb-4">User Information</h1>
            {
                otherTable ?
                    <Fragment>
                        <div className="container mx-auto">
                            {loading || !data ?
                                <div className="animate-pulse">
                                    {[...Array(6)].map((e, i) => <div key={i} className="h-12 bg-gray-200 mb-6 rounded"></div>)}
                                </div>
                                :
                                <table className="table-auto w-full border-collapse text-center table-striped shadow">
                                    <thead className='bg-[#2D3748] text-white'>
                                        <tr>
                                            {
                                                Object
                                                    .keys(citySchema)
                                                    .map((key, index) =>
                                                        <th
                                                            key={index}
                                                            className={`text-center px-4 py-2 uppercase border-b border-gray-300`}>
                                                            {citySchema[key]}
                                                        </th>
                                                    )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((city, index) => (
                                                <tr key={index} className={`${index % 2 === 1 ? `bg-[#F7FAFC]` : `bg-white`}`}>
                                                    {
                                                        Object
                                                            .keys(citySchema)
                                                            .map(
                                                                (key, index) => {
                                                                    if (key === 'avgIncome')
                                                                        return <td key={index} className={`text-center px-4 py-2 border-b border-gray-300`}>${parseFloat(city[key]).toFixed(2)}</td>
                                                                    else
                                                                        return <td key={index} className={`text-center px-4 py-2 border-b border-gray-300`}>{city[key]}</td>
                                                                }
                                                            )
                                                    }
                                                </tr>
                                            ))

                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <div className="container mx-auto">
                            {loading || !data ?
                                <div className="animate-pulse">
                                    {[...Array(6)].map((e, i) => <div key={i} className="h-12 bg-gray-200 mb-6 rounded"></div>)}
                                </div>
                                :
                                <table className="table-auto w-full border-collapse text-center table-striped shadow">
                                    <thead className='bg-[#2D3748] text-white'>
                                        <tr>
                                            {
                                                Object
                                                    .keys(userSchema)
                                                    .map((key, index) =>
                                                        <th
                                                            key={key}
                                                            className={`text-center px-4 py-2 uppercase border-b border-gray-300`}>
                                                            {userSchema[key]}
                                                        </th>
                                                    )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((person, index) => (
                                                <tr key={person.id} className={`${index % 2 === 1 ? `bg-[#F7FAFC]` : `bg-white`}`}>
                                                    {
                                                        Object
                                                            .keys(userSchema)
                                                            .map(
                                                                (key, index) => <td key={key} className={`text-center px-4 py-2 border-b border-gray-300`}>{person[key]}</td>
                                                            )
                                                    }
                                                </tr>
                                            ))

                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                    </Fragment>
            }

        </Fragment>
    );
};

export default DataTable;
