import { useNavigate } from "react-router-dom"

 

export const Product = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('--+--');
    navigate('/productList');
  }
  return (
    <div>
        <h2>Products</h2>
        <button onClick={handleClick}>On Product List</button>
    </div>
  )
}
