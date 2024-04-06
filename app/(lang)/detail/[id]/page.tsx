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
    const { sku=[] } = data;
    
  
    const TableRow = ({ a, b, c, d }) => {
      return (
        <tr className="border-b-2 product-table-td ">
          <td className="table-div-first">{a}</td>
          <td className="table-div">{b}</td>
          <td className="table-div">{c}</td>
          <td className="table-div">{d}</td>
        </tr>
      );
    };
  
    const tabLeRow = sku.map(TableRow);
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