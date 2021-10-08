import React from 'react'
import { useDispatch } from 'react-redux'
import { Counter, SidebarWrap } from './styles'



const Sidebar = () => {
    

    return (
        <SidebarWrap>

            <div className="cart-info">
                <img src="/icons/user.svg" alt="" className="icon" />
                <button className="products-selected">1</button>
                </div>
            <div className="main-title">
                <h2>My 😎</h2>
                <h2>Order </h2>
            </div>
            <div className="user-info-card">
                <div className="info-header">
                    <span>625 St Marks Ave</span>
                    <span className="btn-action">Edit</span>
                </div>
                <div className="info-header">
                    <span>
                        <img src="/icons/reloj.svg" className="order-img-reloj"/>
                        35 min
                    </span>
                    <span className="btn-action">Choose time</span>
                </div>
            </div>
            <div className="orders">
                <div className="order-item">
                    <img src="/images/pexels-photo-156114.jpeg" alt="" className="order-img" />
                    <p>orderNo-1</p>
                    <p className="order-total">1</p>
                </div>
                <div className="order-item">
                    <img src="/images/pexels-photo-262959.jpeg" alt="" className="order-img" />
                    <p>1 X Beach BBQBurger</p>
                    <p className="order-total">$12.44</p>
                </div>
                <div className="order-item">
                    <img src="/images/pexels-photo-376464.jpeg" alt="" className="order-img" />
                    <p>orderNo-3</p>
                    <p className="order-total">3</p>
                </div>
            </div>

            <div className="total">
                <p className="total-summary">Total:</p>
                <p className="total-number">$125.97</p>
            </div>
            
            <div className="title-counter">
                <p>persons</p>                
            </div>
            <Counter>
                <button >
                    -
                </button>
                <p>1</p>
                <button >
                    +
                </button>
            </Counter>

            <div className="checkout">
                <div className="checkout-button" >
                    Checkout ➡
                </div>
            </div>

        </SidebarWrap>

    )
}

export default Sidebar
