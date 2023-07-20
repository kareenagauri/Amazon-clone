import Header from "../components/Header";
import { useSession } from "next-auth/react";

function Orders({ orders }) {
    const { data: session } = useSession();
    return (
        <div>
            <Header />
            <main className="mx-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
                    Your Orders</h1>
                {session ? (
                    <h2>x Orders</h2>
                ) : (
                        <h2>Please sign in to see your orders</h2>
                    )
                }

                <div className="mt-9 space-y-4">

                </div>

            </main>


        </div>
    )
}

export default Orders;

// export async function getServerSideProps(context) {
//     const stripe = require('stripe')(process.env.STRIPE_SECERET_KEY);

//     //get the users logged in credentials
//     // const session  = getSession(content);
//     // if(!session){
//     //     return {
//     //         props: {},

//     //     };
//     // }


// }