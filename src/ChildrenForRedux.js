import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChildrenForRedux = () => {
  const products = [
    {id: 1, name: "HP", price: 45000},
    {id: 2, name: "DELL", price: 56000},
    {id: 3, name: "ACER", price: 38000}
  ]
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
console.log(count)
  return (
    <>
      <h1>CHILDREN FOR REDUX</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <button onClick={() => dispatch({type: "INCRE", product: item})}>INCREMENT</button>
          <button onClick={() => dispatch({type: "DECRE", product: item})}>DECREMENT</button>
        </div>
      ))}
      {count.map((i)=>{return <div key={i.id}><h1>{i.name}</h1></div>})}
      <br/>
      <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
    </>
  )
}

export default ChildrenForRedux