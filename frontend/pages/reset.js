import Reset from '../components/Reset';
import Link from 'next/link';
const reset = props => (
  <div>
  <Reset  resetToken={props.query.resetToken}/>
  </div>
)
export default reset
