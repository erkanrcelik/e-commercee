import Head from "next/head";
import { useRouter } from "next/router";
import { HiCheckCircle } from "react-icons/hi";
import Navbar from "../components/Navbar";

const ThankYou = () => {
    const router = useRouter();
    return (
      <div>
          <Head>
              <title>Teşekkürler</title>
              <meta name="description" content="Tüm Ürünler" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="container mx-auto">
              <Navbar />
              <div className="rounded-md bg-green-50 p-4 mt-8">
                  <div className="flex">
                      <div className="flex-shrink-0">
                          <HiCheckCircle className="h-5 w-5 text-green-400" aria-hidden="true"/>
                      </div>
                      <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Sipariş Alındı</h3>
                          <div className="mt-2 text-sm text-green-700">
                              <p>
                                  Siparişiniz için teşekkür ederiz. Siparişi
                                  aldık ve e-postanıza ileri detaylar
                                  göndereceğiz.
                              </p>
                          </div>
                          <button
                            onClick={() => router.push("/")}
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-sky-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-900 mt-4"
                          >
                              Alışverişe Devam Et
                          </button>
                      </div>
                  </div>
              </div>
          </main>
      </div>
    );
};

export default ThankYou;
