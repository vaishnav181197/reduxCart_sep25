import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,incrementQuantity,decrementQuantity,checkout } from '../Redux/slices/cartSlice'

function Cart() {

  const cart = useSelector(state => state.cartReducer)
  const dispatch=useDispatch()

  return (
    <>
      <div className='container-fluid'>
        <h2 className="mb-3">Cart Summery</h2>
        <div className='row'>
          <div className='col-sm-12 col-md-8'>
            {/* Cart Table */}
            {
              cart?.length > 0 ?
                <table className="table table-bordered shadow">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Title</th>
                      <th>Image</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?.map(item => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>
                            <img src={item.thumbnail} alt="product" className='img-fluid' />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <button className="btn" onClick={()=>{dispatch(incrementQuantity(item.id))}}>+</button>
                            <input type="text" className="form-control form-inline" value={item.quantity} />
                            <button className="btn" onClick={()=>{dispatch(decrementQuantity(item.id))}}>-</button>
                          </td>
                          <td>
                            { item.price * item.quantity }
                          </td>
                          <td>
                            <button className="btn" onClick={()=>{dispatch(removeFromCart(item.id))}}>
                              <i className="fa-solid fa-trash fa-lg text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                :
                <h2 className="text-center text-danger">No Items Added To Cart Yet!!</h2>

            }


          </div>
          <div className='col-sm-12 col-md-4'>
            {/* Cart Total */}
            <div className='p-2 border border-3 shadow'>
              <h4>Total Products : <span className='text-info'>{cart?.length}</span></h4>
              <h4>Total Price : <span className='text-success'>
                {
                cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0)
                }
                </span></h4>
              <div className="d-grid">
                <button className="btn btn-success" onClick={()=>{dispatch(checkout())}}>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart