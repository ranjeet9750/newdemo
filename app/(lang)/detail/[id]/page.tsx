import { Details } from "@/app/config/company"

const CLASS_MAP = {
    title: "product-title ml-3 text-center md:text-start",
    contentImageContainer: "flex flex-col lg:flex-row justify-evenly gap-12 ",
    contentContainer: "mt-12 flex flex-col gap-12",
    headingContainer: "flex gap-20",
    symbolAndTextContainer: "flex gap-6",
    vegetarian: "h-5 w-5 bg-[#1D4E22]",
    nonVegetarian: "h-5 w-5 bg-[#A80000]",
    productIsFocus: "font-extrabold",
    tableContainer: "table-fixed",
    tableBorder: "border-b-2 ",
    tableHeadFirstText: "p-2 pr-12 ",
    tableHeadText: "p-2",
    tableData: "pb-3.5 pt-7 px-12 ",
  }

const DetailPage = ({ params }) => {
    console.log(params.id)
    console.log(Details[params.id])
  return (
    <div>
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
      <table className='catalogue-table'>
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