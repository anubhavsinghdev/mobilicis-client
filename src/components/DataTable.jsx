import React, { useState, useEffect } from 'react';

import { userSchema } from '@/constants';
import Navbar from './Navbar';

const DataTable = () => {
    const [data, setData] = useState([]);

    return (
        <React.Fragment>
            <Navbar setData={setData} />
            <h1 className="text-2xl font-bold text-center mb-4">User Information</h1>
            <div className="container mx-auto">
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
                        {data.map((person, index) => (
                            <tr key={person.id} className={`${index % 2 === 1 ? `bg-[#F7FAFC]` : `bg-white`}`}>
                                {
                                    Object
                                        .keys(userSchema)
                                        .map(
                                            (key, index) => <td key={key} className={`text-center px-4 py-2 border-b border-gray-300`}>{person[key]}</td>
                                        )
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </React.Fragment>
    );
};

export default DataTable;