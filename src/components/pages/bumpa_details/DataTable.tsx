import SecondaryHeading from "@/components/reusable/SecondaryHeading";

export default function DynamicTable() {
  const tableData = [
    {
      engine: "Petrol",
      length: "6m",
      weight: "101.6 KG",
      throughput: "15 tonnes p/h",
      load: "80 KG",
      angle: "60°",
      height: "5m",
    },
    {
      engine: "Petrol",
      length: "8m",
      weight: "110 KG",
      throughput: "15 tonnes p/h",
      load: "80 KG",
      angle: "60°",
      height: "7m",
    },
    {
      engine: "Petrol",
      length: "10m",
      weight: "119.6 KG",
      throughput: "15 tonnes p/h",
      load: "80 KG",
      angle: "60°",
      height: "9m",
    },
    {
      engine: "Electrical",
      length: "6m",
      weight: "93 KG",
      throughput: "15 tonnes p/h",
      load: "80 KG",
      angle: "60°",
      height: "5m",
    },
    {
      engine: "Electrical",
      length: "8m",
      weight: "106 KG",
      throughput: "15 tonnes p/h",
      load: "80 KG",
      angle: "60°",
      height: "7m",
    },
    {
      engine: "Electrical",
      length: "10m",
      weight: "115 KG",
      throughput: "15 tonnes p/h",
      load: "80 KG",
      angle: "60°",
      height: "9m",
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
                <TableHeading text="Engine" />
                <TableHeading text="Length" />
                <TableHeading text="Weight" />
                <TableHeading text="Throughput" />
                <TableHeading text="Load" />
                <TableHeading text="Angle" />
                <TableHeading text="Height" right={true} />
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
                  <TableData text={row.engine} />
                  <TableData text={row.length} />
                  <TableData text={row.weight} />
                  <TableData text={row.throughput} />
                  <TableData text={row.load} />
                  <TableData text={row.angle} />
                  <TableData text={row.height} right={true} />
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
      className={`   px-10 py-2   font-titillium   text-center ${
        !right
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
      className={`   px-10 py-2   font-titillium  text-center  ${
        !right
          ? " border border-gray-700 border-r-2 border-r-black "
          : "border border-gray-700 border-r-2"
      }`}
    >
      {text}
    </td>
  );
};
