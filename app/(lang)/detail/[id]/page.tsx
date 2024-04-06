import { data } from "@/app/config/company"
const DetailPage = ({ params }) => {
    console.log(params.id)
    console.log(data[params.id])
  return (
    <div></div>
  )
}

export default DetailPage