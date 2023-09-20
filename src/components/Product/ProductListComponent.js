import React, { useState, useEffect } from "react";
import Client from "shopify-buy";
import ProductCard from "./ProductCard";

const shopifyClient = Client.buildClient({
  domain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
});

export default function ProductListComponent({ productsList }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsResponse = await shopifyClient.product.fetchAll();
        setProducts(productsResponse.slice(0, -1));
      } catch (error) {
        console.error("Error fetching Shopify products:", error);
      }
    }
    fetchProducts();
  }, []);

  const product =
    products &&
    products.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.images[0].src,
      amount: product.variants[0].price.amount,
      handle: product.handle,
      slug: "product/" + product.handle,
    }));

  const filteredProduct = product.filter((product) => {
    return productsList.some((item) => item.product === product.handle);
  });

  return (
    <div>
      {filteredProduct && (
        <ul className="grid max-w-7xl m-10 lg:px-6 grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          {filteredProduct.map((item) => {
            return <ProductCard product={item} />;
          })}
        </ul>
      )}
    </div>
  );
}