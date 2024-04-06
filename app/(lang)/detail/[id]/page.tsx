import { Details } from "@/app/config/company"

const CLASS_MAP = {
    
   
  }

const DetailPage = ({ params }) => {
    console.log(params.id)
    console.log(Details[params.id])
  return (
    <div className="w-[50%] mx-auto">
        <Table data={Details[params.id]}/>
    </div>
  )
}
 
const Table = ({ data=[] }) => {
    const { rowsData=[] } = data;
    
  
    const TableRow = ({ Broker_Type,Broker_Ref,Access,Mailid }) => {
      return (
        <tr className="border-b-2 product-table-td ">
          <td className="table-div-first">{Broker_Type}</td>
          <td className="table-div">{Broker_Ref}</td>
          <td className="table-div">{Access}</td>
          <td className="table-div">{Mailid}</td>
        </tr>
      );
    };
  
    const tabLeRow = rowsData.map(TableRow);
    return (
      <table className='catalogue-table '>
        <thead style={{ borderRadius: '10px' }}>
              <tr>
              {data["header"].map((x)=>{
                return(<th key={x} className="table-head">{x}</th>)
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