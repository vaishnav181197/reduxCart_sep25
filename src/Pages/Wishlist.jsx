import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWish } from '../Redux/slices/wishlistSlice'

function Wishlist() {

  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch=useDispatch()

  return (
    <>
      {/* Products Section */}
      <section className="py-5" style={{ minHeight: '60vh' }}>
        <h2 className="mb-2">Wishlist</h2>
        <div className="container px-4 px-lg-5 mt-5">

          {
            wishlist?.length > 0 ?
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {
                  wishlist.map(item => (
                    <div className="col mb-5">
                      <div className="card h-100">
                        <Link to={'/details/1'}>
                          <img className="card-img-top" src={item.thumbnail} alt="..." />
                        </Link>
                        <div className="card-body p-4">
                          <div className="text-center">

                            <h5 className="fw-bolder">{item.title}</h5>

                            ${item.price}
                          </div>

                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                          <button className='btn' onClick={()=>{dispatch(removeFromWish(item.id))}}>
                            <i className="fa-solid fa-heart-circle-xmark text-danger" ></i>
                          </button>
                          <button className='btn'>
                            <i className="fa-solid fa-cart-plus text-success" ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                }


              </div>
              :
              <div className="w-100">
                <h2 className="text-center text-danger">No Item Added Yet!!</h2>
              </div>

          }

        </div>
      </section>
    </>
  )
}

export default Wishlist