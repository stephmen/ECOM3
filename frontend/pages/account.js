import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

import Link from 'next/link';
const OrderPage = props => (
  <div>
    <PleaseSignIn>
      <Permissions/>
    </PleaseSignIn>
  </div>
)
export default OrderPage