// import Items from '../index';
import Items from '../components/Items'

 const ItemsPage = props => (

<Items page={parseFloat(props.query.page) || 1 } />

 );

export default ItemsPage;