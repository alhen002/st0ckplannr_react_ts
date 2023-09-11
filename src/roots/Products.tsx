import React from "react";
import { createClient } from "@supabase/supabase-js";

//types
import { Product } from "../types/Product";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default function Products(): React.ReactElement {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const { data } = await supabase.from("products").select();
    if (data) {
      setProducts(data);
      console.log(data);
    }
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.name} - {product.stock}
        </li>
      ))}
    </ul>
  );
}
