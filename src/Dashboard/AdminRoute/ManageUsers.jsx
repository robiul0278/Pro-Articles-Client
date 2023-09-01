import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaUserShield } from "react-icons/fa";
import {MdRemoveModerator} from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data
    })

    console.log(users)


    const handleMakeAdmin = user => {
        fetch(`https://premium-articles-platform-sever.vercel.app/users/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Now Admin is ${user.name}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleRemoveAdmin = user => {
        fetch(`https://premium-articles-platform-sever.vercel.app/users/removeAdmin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` Remove Admin ${user?.name}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>ProWriter | Manage Users</title>
            </Helmet>
            <div className="text-center outline outline-offset-2 outline-cyan-500 bg-white p-8 m-5">
                <h1 className="text-4xl font-bold ">Manage Users</h1>
                <p className=""> Unlock Your Potential with Engaging Education and Inspiring Knowledge</p>
            </div>
            <div className="overflow-x-auto mx-4">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className=" bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-green-500  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user?.role === 'user' ? 'Remove' :
                                    <button onClick={() => handleRemoveAdmin(user)} className="btn btn-ghost bg-red-600  text-white"><MdRemoveModerator></MdRemoveModerator></button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;