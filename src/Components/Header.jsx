import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { searchProducts } from '../Redux/slices/productSlice'

function Header() {

    const wishlist=useSelector(state=>state.wishlistReducer)
    const cart=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()

    return (
        <>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to={'/'}>ReduxCart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='me-auto ms-5'>
                            <input type="search" className='form-control' placeholder='Enter Keyword for Search' onChange={(e)=>{dispatch(searchProducts(e.target.value))}} />
                        </div>
                        <form className="d-flex gap-3">
                            <Link to={'/wishlist'} className="btn btn-outline-dark">
                                <i className="fa-solid fa-heart" style={{ color: '#f40b42' }}></i>
                                Wishlist
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist?.length}</span>
                            </Link>
                            <Link to={'/cart'} className="btn btn-outline-dark">
                                <i className="fa-solid fa-cart-shopping" style={{color:'#74C0FC'}}></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart?.length}</span>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header