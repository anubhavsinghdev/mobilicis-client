import { useState, useEffect, Fragment } from 'react';
import {
    incomeLt5BmwMerc,
    malePhonePriceGt10000,
    lastNameMQuoteGt15EmailIn,
    bmwMercAudiEmailNoDigit,
    top10CitiesHighestUsersAvgIncome,
    allUsers,
    refetchData
} from '../api/UserAPI';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Navbar = ({ data, setData, setLoading, otherTable, setOtherTable }) => {
    const options = [
        {
            option: 'Users which have income lower than $5 USD and have a car of brand "BMW" or "Mercedes"'
        },
        {
            option: 'Male Users which have phone price greater than 10,000.'
        },
        {
            option: 'Users whose Last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name.'
        },
        {
            option: 'Users which have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit.'
        },
        {
            option: 'Data of top 10 cities which have the highest number of users and their average income'
        },
    ]
    const [selected, setSelected] = useState(options[0].option);
    useEffect(() => {
        (async () => setData(await incomeLt5BmwMerc()))();
        setLoading(false);
    }, [setData]);

    const handleInputChange = async (e) => {
        setSelected(e.option);
        setOtherTable(false);
        setLoading(true);
        const index = options.findIndex(opt => opt.option == e.option);
        switch (index) {
            case 0:
                setData(await incomeLt5BmwMerc()); break;
            case 1:
                setData(await malePhonePriceGt10000()); break;
            case 2:
                setData(await lastNameMQuoteGt15EmailIn()); break;
            case 3:
                setData(await bmwMercAudiEmailNoDigit()); break;
            case 4: {
                setData(await top10CitiesHighestUsersAvgIncome());
                setOtherTable(true);
                break;
            }
            default:
                setData(await incomeLt5BmwMerc()); break;
        }
        setLoading(false);
    }

    const handleRefetchData = async (e) => {
        await refetchData();
        setData(await allUsers());
    }

    return (
        <Fragment>
            <div className="flex flex-col items-center p-4">
                <Listbox value={selected} onChange={handleInputChange}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-l">
                            <span className="block truncate">{selected}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-l shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {options.map((option, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({ selected }) => (
                                            <Fragment>
                                                <span
                                                    className={
                                                        `block truncate ${selected ? 'font-medium' : 'font-normal'}`
                                                    }
                                                >
                                                    {option.option}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </Fragment>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                <div className='p-4'>
                    <button onClick={handleRefetchData} className="uppercase mx-auto shadow bg-[#2D3748] hover:bg-[#41506a] focus:shadow-outline focus:outline-none text-white text-l py-3 px-10 rounded mr-4">Refetch Data</button>
                </div>

            </div>
        </Fragment>
    );
}

export default Navbar;