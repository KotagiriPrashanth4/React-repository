import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, remove } from "./store";
import { useState } from "react";

function Cart() {
    const cartItems = useSelector((state) => state.Cart);
    const dispatch = useDispatch();
    
    const [dpamount, setDpamount] = useState(0);
    const handleDiscountPercentage = (dvalue) => {
        setDpamount(dvalue);
    };
    
    const [couponCode, setCouponCode] = useState('');
    const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
    
    const handleApplyCoupon = () => {
        switch (couponCode) {
            case 'DIWALI10':
                setCouponDiscountPercentage(10);
                break;
            case 'DIWALI20':
                setCouponDiscountPercentage(20);
                break;
            case 'DIWALI30':
                setCouponDiscountPercentage(30);
                break;
            default:
                alert('Invalid coupon code');
                setCouponDiscountPercentage(0);
        }
    };

    const calculateTotals = () => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountAmount = total * (dpamount / 100);
        const couponDiscountAmount = total * (couponDiscountPercentage / 100);
        const finalTotal = total - discountAmount - couponDiscountAmount;
        
        return {
            total: parseFloat(total.toFixed(2)),
            discountAmount: parseFloat(discountAmount.toFixed(2)),
            couponDiscountAmount: parseFloat(couponDiscountAmount.toFixed(2)),
            finalTotal: parseFloat(finalTotal.toFixed(2))
        };
    };

    const { total, discountAmount, couponDiscountAmount, finalTotal } = calculateTotals();
    
    const listItems = cartItems.map((item, index) => (
        <li key={index}>
            {item.name} - ${item.price.toFixed(2)} -
            <button onClick={() => dispatch(increament(item))}>+</button>
            <button onClick={() => dispatch(decreament(item))}>-</button>
            Quantity: {item.quantity}
            <button onClick={() => dispatch(remove(item))}>Remove</button>
        </li>
    ));
    
    return (
        <>
            <h1>Shopping Cart</h1>
            {listItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <> 
                    <ul>{listItems}</ul>  
                    <p>Total before discount: ${total}</p>
                    <p>Discount Amount: ${discountAmount}</p>
                    
                    <button onClick={() => handleDiscountPercentage(10)}>Apply 10% Discount</button>
                    
                    <button onClick={() => handleDiscountPercentage(20)}>Apply 20% Discount</button>
                    
                    <button onClick={() => handleDiscountPercentage(30)}>Apply 30% Discount</button>
                <br></br>
                    <label>Enter Coupon</label>
                    <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)} 
                        placeholder="Enter the coupon code" 
                    />
                    <button onClick={handleApplyCoupon}>Apply Coupon</button> 
                    <p>Coupon Discount Amount: ${couponDiscountAmount}</p> 
                    <p>Final Total: ${finalTotal}</p>
                </>
            )}
        </>
    );
}

export default Cart;
