import React from "react";
import plus from "./image/plus.png" 

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }
    increaseQuentity=()=>{
        console.log('this',this.state)
    }
    render() {
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="rightblock">
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img  className="action-icons" src={plus} 
                        onClick={this.increaseQuentity} ></img>
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/free-icon/minus_56889" ></img>
                        <img alt="delete" className="action-icons" src="" ></img>
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:5,
        background:'#ccc'

    }
}

export default CartItem;