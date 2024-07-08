import { ACTION_CHANGE_QUANTITY } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

function CartItem({ item, index }) {
  const dispatch = useDispatch();
  /**
   * {
   *  id:1231,
   *  product: {...},
   *  quantity: 5
   * }
   *
   */

  const handleChangeQuantity = (e) => {
    const newQuantity = e.target.value;
    if (newQuantity >= item.product.stock) {
      // lớn hơn stock
      dispatch(ACTION_CHANGE_QUANTITY({ id: item.id, quantity: Number(item.product.stock) }));
    } else if (newQuantity <= 0) {
      // số lượng nhỏ hơn 0
      dispatch(ACTION_CHANGE_QUANTITY({ id: item.id, quantity: 1 }));
    } else {
      // đúng số lượng
      dispatch(ACTION_CHANGE_QUANTITY({ id: item.id, quantity: Number(newQuantity) }));
    }
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.product.name}</td>
      <td>{item.product.price}</td>
      <td>
        <input
          onChange={handleChangeQuantity}
          name="cart-item-quantity-1"
          type="number"
          value={item.quantity}
          style={{ outline: 'none' }}
        />
      </td>
      <td className="flex gap-[10px]">
        <a className="label label-info update-cart-item" data-product="">
          Update
        </a>
        <a className="label label-danger delete-cart-item" data-product="">
          Delete
        </a>
      </td>
    </tr>
  );
}

export default CartItem;
