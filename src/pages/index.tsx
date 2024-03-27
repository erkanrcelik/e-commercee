import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Skelton from "../components/Skelton";
import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer"; // Assuming ProductCard component import

const generateFakeProductData = () => ({
  title: faker.commerce.productName(), price: faker.commerce.price(), image: faker.image.url(),
});
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      const fakeProducts = Array.from({ length: 32 },
        () => generateFakeProductData());
      setProducts(fakeProducts);
    }, 500);
  }, []);
  return (
    <div>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="All Products"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="container mx-auto">
        <Navbar/>{isLoading ? (<Skelton/>)
        :
        (<div className="bg-white">
            <div className="mt-12 p-6">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </div>
          </div>)}
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
