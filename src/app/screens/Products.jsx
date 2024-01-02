import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Loader from "../components/Loader";

const Products = () => {
  const [arr, set_arr] = useState([]);
  const [loading, set_loading] = useState(false);

  const fetch_my_data = async () => {
    const API = "https://dummyjson.com/products";
    set_loading(true);
    const data = await axios.get(API);
    console.log(data.data.products);
    set_arr(data.data.products);
    set_loading(false);
  };

  useEffect(() => {
    fetch_my_data();
  }, []);

  return (
    <>
      <div className="flex w-full my-10 flex-wrap gap-10 justify-center items-center">

{loading ? <Loader/> : ''}

        {arr.map((e, i) => (
          <Card price={e.price} title={e.title} image={e.thumbnail} key={i} />
        ))}
      </div>
    </>
  );
};

export default Products;
