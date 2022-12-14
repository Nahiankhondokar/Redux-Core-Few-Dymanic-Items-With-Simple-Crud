import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeGray, makeGreen, makeRed } from '../../redux/color/actions';

const Colors = () => {

    const dispatch = useDispatch();
    const { food } = useSelector(state => state);
    
  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card p-2">
                    <button onClick={() => dispatch(makeRed()) }>RED</button>
                    <button onClick={() => dispatch(makeGreen()) }>GREEN</button>
                    <button onClick={() => dispatch(makeGray()) }>GRAY</button>

                    <h3 className='text-center'>{food}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Colors;