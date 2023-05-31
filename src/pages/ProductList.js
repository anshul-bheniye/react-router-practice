import { useParams } from "react-router-dom"

 

export const ProductList = () => {
  const params = useParams();
  console.log(params)

  return (
    <div>
      <h3>Product List</h3>
      <p>Product number {params.id}</p>
    </div>
  )
}
