// import { Suspense } from "react";
// import NewProductList from "./components/NewProductList";
// import ProductList from "./components/ProductList";
// import Loading from "./loading";

import PostsPage from "./(posts)/ssr/page";

// SSG
export default function Home() {
  return (
    <div className="p-8 m-4">
      <PostsPage />
    </div>
  );
}

// export interface Product {
//   id: string;
//   isNew: boolean;
//   handle: string;
//   availableForSale: boolean;
//   title: string;
//   description: string;
//   descriptionHtml: string;
//   options: { name: string; values: string[] }[];
//   price: { amount: string; currencyCode: string };
//   variants: {
//     id: string;
//     title: string;
//     price: string;
//     availableForSale: boolean;
//   }[];
//   images: string;
//   featuredImage: string;
//   seo: { title: string; description: string };
//   tags: string[];
//   updatedAt: string;
// }
