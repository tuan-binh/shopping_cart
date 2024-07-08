import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

function MyCart() {
  const carts = useSelector((state) => state.carts);

  return (
    <div className="panel panel-danger">
      <div className="panel-heading">
        <h1 className="panel-title">Your Cart</h1>
      </div>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th width="4%">STT</th>
              <th>Name</th>
              <th width="15%">Price</th>
              <th width="4%">Quantity</th>
              <th width="25%">Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            {carts.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </tbody>
          <tfoot id="my-cart-footer">
            <tr>
              <td colSpan={4}>
                There are <b>{carts.length}</b> items in your shopping cart.
              </td>
              <td colSpan={2} className="total-price text-left">
                {carts.reduce((sum, item) => sum + item.product.price * item.quantity, 0)} USD
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default MyCart;
