import { Helmet } from "react-helmet";
import usePayment from "../../Hooks/usePayment";

const PaymentHistory = () => {
    const [payment] = usePayment();
    console.log(payment)
    return (
        <div className="bg-gradient-to-r h-screen from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]">
            <Helmet>
                <title>ProWrite | Payment History</title>
            </Helmet>
            <div className="px-5">
            <div className="text-center outline outline-offset-2 outline-cyan-500 p-5  my-8">
                <h1 className="text-4xl font-bold ">My All Articles</h1>
                <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Enrolled Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment?.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td className="text-bold">
                                    {item.name}
                                </td>
                                <td className="">{item?.email}</td>
                                <td className="">{item?.transactionId}</td>
                                <td className="">{item?.date}</td>
                                <td className="">${item?.price}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default PaymentHistory;