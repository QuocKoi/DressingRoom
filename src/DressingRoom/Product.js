import React from 'react'
import { useDispatch } from 'react-redux';
import { ButtonBuy } from '../JSS/component/NavTab';
import { Div } from '../JSS/component/Product';
import { actDressing, actGetPosition } from '../redux/actions/dressingRoomAction';
export default function Product(props) {

    let dressing = useDispatch();
    const { arrProduct } = props;
    const renderProduct = () => {
        return arrProduct.map((product, index) => {
            let { imgSrc_jpg, name } = product;
            return <div className='col-3 mb-4 text-center' key={index}>
                <div className="card">
                    <img  src={imgSrc_jpg} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <ButtonBuy className="btn fw-bold" onClick={() => { 
                            dressing(actDressing(product));
                            }}>Buy</ButtonBuy>
                    </div>
                </div>
            </div>

        })
    }
    return (
        <Div className='p-5'>
            <div className='row'>
                {renderProduct()}
            </div>
        </Div>
    )
}