import UpdateItem from "../components/UpdateItem";
import Link from "next/link";
const Sell = ({ query }) => (
  <div>
    <p>Sell!</p>
    <UpdateItem id={query.id} />
  </div>
);

export default Sell; 
