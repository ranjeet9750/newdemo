import { Details } from "@/app/config/company"

const CLASS_MAP = {
    
   
  }

const DetailPage = ({ params }) => {
    console.log(params.id)
    console.log(Details[params.id])
  return (
    <div className="w-[70%] mx-auto my-auto">
        <Table data={Details[params.id]}/>
    </div>
  )
}
 
const Table = ({ data=[] }) => {
    const { rowsData=[] } = data;
    
  
    const TableRow = ({ Broker_Type,Broker_Ref,Access,Mailid }) => {
      return (
        <tr className="">
          <td className="py-2 px-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700">{Broker_Type}</td>
          <td className="py-2 px-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700">{Broker_Ref}</td>
          <td className="py-2 px-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700">{Access}</td>
          <td className="py-2 px-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700">{Mailid}</td>
        </tr>
      );
    };
  
    const tabLeRow = rowsData.map(TableRow);
    return (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              {data["header"].map((x)=>{
                return(<th key={x} className="">{x}</th>)
              })}
            </tr>
            </thead>
        <tbody>
          {tabLeRow}
        </tbody>
      </table>
    );
  };
  
export default DetailPage