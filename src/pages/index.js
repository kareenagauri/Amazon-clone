import Head from "next/head";
import Header from "../components/Header"
import Banner from "../components/Banner"
import ProductFeed from "../components/ProductFeed";
import fs from "fs";
import path from "path";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>FarmHome</title>
      </Head>


      {/*header*/}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />

        {/*Product feed*/}
        <ProductFeed products={products} />

      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const products = await fetch("/plants.json").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     }
//   }
// }

//https://fakestoreapi.com/products

export async function getServerSideProps(context) {
  const filePath = path.join(process.cwd(), 'public', 'plants.json');

  try {
    const jsonData = await fs.promises.readFile(filePath, 'utf8');
    const products = JSON.parse(jsonData);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return {
      props: {
        products: [], // Return an empty array or appropriate error handling
      },
    };
  }
}







