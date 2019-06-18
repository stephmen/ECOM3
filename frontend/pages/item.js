import SingleItem from "../components/SingleItem";
import gql from "graphql-tag";
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!){
    item(where: { id: $id}) {
     id
     title
     description
     largeImage
    }
  }
 `;
const Item = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
