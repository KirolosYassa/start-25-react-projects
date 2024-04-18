import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 20}`
      );

      const result = await response.json();

      if (result && result.products) {
        setLoading(false);
        setProducts(result.products);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      return <div>there is an error!</div>;
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading Data!</div>;
  }
  console.log(products);

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => {
              <div className="load-more-container" key={item.id}>
                <img src={item.thumbnail} alt={item.brand} />
                <p>{item.title}</p>
              </div>;
            })
          : "No Data"}
      </div>

      <button>Load More Data</button>
    </div>
  );
}
