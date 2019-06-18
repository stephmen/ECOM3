import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

import Link from 'next/link';
const OrderPage = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
)
export default OrderPage