import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    // console.log(counter);

  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card p-2">
                    <h1 className='text-center'>{counter}</h1>
                    <button className='btn btn-success btn-sm' onClick={ () => dispatch({ type : "INCREMENT"}) }>Increment</button>
                    <button className='btn btn-danger btn-sm' onClick={ () => dispatch({ type : "DECREMENT"}) }>Decrement</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter