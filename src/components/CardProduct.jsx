import { ACTION_ADD_TO_CART } from '../redux/actions/cartActions';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CardProduct({ item }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e) => {
    const newQuantity = e.target.value;
    if (newQuantity >= item.stock) {
      setQuantity(item.stock);
    } else if (newQuantity <= 0) {
      setQuantity(1);
    } else {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      ACTION_ADD_TO_CART({
        id: Math.floor(Math.random() * 1000000),
        product: item,
        quantity: Number(quantity),
      })
    );
  };

  return (
    <div>
      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={item.image} alt="pizza" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{item.name}</h4>
          <p>{item.description}</p>
          <input
            name="border-2 border-black quantity-product-1"
            style={{ outline: 'none' }}
            type="number"
            onChange={handleChangeQuantity}
            value={quantity}
          />
          <div className="flex justify-end">
            <Button
              onClick={handleAddToCart}
              disabled={item.stock === 0}
              type="primary"
              className="price mr-[7px] mb-[7px]"
            >
              {item.price} $
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
