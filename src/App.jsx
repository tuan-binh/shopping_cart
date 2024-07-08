import ListProduct from './layouts/ListProduct';
import MyCart from './layouts/MyCart';
// import Notification from './components/Notification';

function App() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <div>
            <ListProduct />
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <MyCart />
              {/* <Notification type={'success'} message={'Add to cart successfully'} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
