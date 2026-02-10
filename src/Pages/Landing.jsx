import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchProductThunk,nextPage,prevPage } from '../Redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Landing() {

    const dispatch = useDispatch()

    const { products, pending, error,currentPage } = useSelector((state) => state.productReducer)
    // console.log(gstate)
    const productsPerPage=10
    const totalPages=(products?.length)/productsPerPage
    const endIndex=currentPage*productsPerPage
    const startIndex=endIndex-productsPerPage

    useEffect(() => {
        dispatch(fetchProductThunk())
    }, [])

    const nextPageNavigate=()=>{
        if(currentPage<totalPages){
            dispatch(nextPage())
        }
    }
    const prevPageNavigation=()=>{
        if(currentPage>1){
            dispatch(prevPage())
        }
    }

    return (
        <>
            {/* Hero */}
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>

            {/* Products Section */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">


                    {
                        pending ?
                            <>
                                <h2 className="text-center">Loading....</h2>
                            </>
                            :
                            <>
                                {
                                    error ?
                                        <h2 className="text-center text-danger">{error}</h2>
                                        :
                                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                                            {
                                                products.slice(startIndex,endIndex).map(item => (
                                                    <div className="col mb-5">
                                                        <div className="card h-100">
                                                            <Link to={`/details/${item.id}`}>
                                                                <img className="card-img-top" src={item.thumbnail} alt="..." />
                                                            </Link>
                                                            <div className="card-body p-4">
                                                                <div className="text-center">

                                                                    <h5 className="fw-bolder">{item.title.slice(0,12)}...</h5>

                                                                    ${item.price}
                                                                </div>

                                                            </div>
                                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                                                                <button className='btn' onClick={()=>{dispatch(addToWishlist(item))}}>
                                                                    <i className="fa-solid fa-heart-circle-plus" style={{ color: '#f60428' }}></i>
                                                                </button>
                                                                <button className='btn' onClick={()=>{dispatch(addToCart(item))}}>
                                                                    <i className="fa-solid fa-cart-plus text-success" ></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }


                                        </div>


                                }
                            </>
                    }

                </div>
            </section >
            {/* Pagination */}
            < div className='my-3 d-flex justify-content-center' >
                <div className='d-flex gap-3 align-items-center'>
                    <button className='btn' onClick={prevPageNavigation}>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <span>{currentPage}/{totalPages}</span>
                    <button className="btn" onClick={nextPageNavigate}>
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div >
        </>
    )
}

export default Landing