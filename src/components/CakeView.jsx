import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order, restocked } from '../features/cake/cakeSlice';

const CakeView = () => {
    console.log("CakeView comp");
    const dispatch = useDispatch();
    const { count } = useSelector(state => state.cake);
    return (
        <div>
            <button onClick={() => dispatch(order())}>Order Cake</button>
            <p></p>
            <button onClick={() => dispatch(restocked(5))}>Restok Cake</button>
            <p>CakeView count: {count}</p>
        </div>
    )
}

export default CakeView