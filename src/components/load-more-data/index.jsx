import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setLoading(false);
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      return <div>there is an error!</div>;
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading Data!</div>;
  }
  console.log(products);

  return (
    <div className="">
      <div className="row">
        {products.length
          ? products.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <img src={item.thumbnail} alt={item.brand} />
                  <p>{item.brand}</p>
                </div>
              );
            })
          : "No Data"}
      </div>

      <button disabled={disableButton} onClick={() => setCount(count + 1)}>
        Load More Data
      </button>
      {products.length === 100 && <p>You've reached 100 Products</p>}

    </div>
  );
}
