import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

type Product = {
  id: string;
  name: string;
  stock: number;
  brand: string;
  created_at: string;
  ean: number;
};

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
        <li key={product.name}>{product.name} - {product.stock}</li>
      ))}
    </ul>
  );
}
