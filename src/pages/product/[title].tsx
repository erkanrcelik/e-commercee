import { useEffect, useState } from "react";
import Head from "next/head";
import NextImage from "next/image";
import Navbar from "../../components/Navbar";
import { faker } from "@faker-js/faker";
import NextLink from "next/link";
import ProductSkeleton from "../../components/DetailSkelton";

const generateFakeProductData = () => ({
  title: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  image: faker.image.url(),
});

const SingleProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      const fakeProducts = generateFakeProductData();
      setProduct(fakeProducts);
    }, 500);
  }, []);
  return (
    <div>
      <Head><title>{isLoading ? "Loading..." : product.title}</title><meta name="description" content={`${product.title}`} /><link rel="icon" href="/favicon.ico" /></Head>
      <main className="container mx-6 md:mx-auto">
        <Navbar />{isLoading ? (<ProductSkeleton />) : (
          <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
              <div className="mx-auto mt-8">
                <div className="flex flex-col md:flex-row gap-x-8">
                  <div className="min-h-80 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></div>
                  <div className="lg:col-span-5 lg:col-start-8 mt-8 md:mt-0">
                    <h1 className="text-xl font-medium text-gray-900 ">{product.title}</h1>
                    <p className="text-xl font-light text-gray-700 mt-4">{product.description}</p>
                    <p className="text-xl font-normal text-gray-500 mt-4">{product.price} TL</p>
                    <NextLink href={'/thank-you'}>
                      <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-sky-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-900  mt-4">
                        Satın al
                      </button>
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SingleProduct;
