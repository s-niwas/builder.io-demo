import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Product/ProductListComponent")),
  {
    name: "Product List",
    inputs: [
      {
        name: "productsList",
        type: "list",
        subFields: [
          {
            name: "product",
            type: `ShopifyProductHandle`,
          },
        ],
      },
    ],
  }
);
