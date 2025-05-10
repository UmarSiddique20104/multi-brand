import React from 'react'
import SecondaryHeading from '../SecondaryHeading';

export default function Table() {
    const tableData = [
        {
            length: "3m",
            weight: "118 KG",
            throughput: "90 tonnes p/h",
            load: "200 KG",
            angle: "55",
            powerSupply: "5",
        },
        {
            length: "4m",
            weight: "124 KG",
            throughput: "90 tonnes p/h",
            load: "200 KG",
            angle: "55°",
            powerSupply: "5",
        },
        {
            length: "5m",
            weight: "132 KG",
            throughput: "90 tonnes p/h",
            load: "200 KG",
            angle: "55°",
            powerSupply: "4",
        },
        {
            length: "6m",
            weight: "140 KG",
            throughput: "90 tonnes p/h",
            load: "200 KG",
            angle: "55°",
            powerSupply: "3m",
        },
        
    ];
    return (
        <>
            <div className="container mx-auto px-4 lg:pt-24 md:pt-16 pt-5">
                <div className="py-6">

                    <SecondaryHeading text="Dimensions & Status" />
                </div>
                <div className="overflow-x-auto  ">
                    <table className="min-w-full bg-gray-900 border-2 border-[#7e7e7e]     ">
                        <thead>
                            <tr className="bg-[#c3202a] text-white">
                                
                                <TableHeading text="Length" />
                                <TableHeading text="Weight" />
                                <TableHeading text="Throughput" />
                                <TableHeading text="Load" />
                                <TableHeading text="Angle" />
                                <TableHeading text="Max Linked off One Supply" right={true} />
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 !== 0
                                            ? "bg-[#7e7e7e] text-white"
                                            : "bg-black text-white"
                                    }
                                >
                                    
                                    <TableData text={row.length} />
                                    <TableData text={row.weight} />
                                    <TableData text={row.throughput} />
                                    <TableData text={row.load} />
                                    <TableData text={row.angle} />
                                    <TableData text={row.powerSupply} right={true} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

const TableHeading = ({ text, right }: any) => {
    return (
        <td
            className={`   px-10 py-2   font-titillium   text-center ${!right
                ? " border border-gray-700 border-r-2 border-r-black border-b-0"
                : "border border-gray-700  border-b-0"
                }`}
        >
            {text}
        </td>
    );
};
const TableData = ({ text, right }: any) => {
    return (
        <td
            className={`   px-10 py-2   font-titillium  text-center  ${!right
                ? " border border-gray-700 border-r-2 border-r-black "
                : "border border-gray-700 border-r-2"
                }`}
        >
            {text}
        </td>
    );
};

