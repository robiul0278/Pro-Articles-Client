import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaUserShield } from "react-icons/fa";
import {MdRemoveModerator} from "react-icons/md";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("https://premium-articles-platform-sever.vercel.app/users")
        return res.json()
    })

    console.log(users)


    const handleMakeAdmin = user => {
        fetch(`https://premium-articles-platform-sever.vercel.app/users/admin/${user._id}`, {
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
        fetch(`https://premium-articles-platform-sever.vercel.app/users/removeAdmin/${user._id}`, {
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
        <div className="w-full p-5">
            <Helmet>
                <title>ProWriter | Manage Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold text-center my-4">MANAGE USERS</h3>
            <div className="overflow-x-auto">
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
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
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