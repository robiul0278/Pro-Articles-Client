// import useAuth from "../../Hooks/useAuth";

import { useSelector } from "react-redux";

const UserHome = () => {
    // const {user} = useAuth();
    const {user} = useSelector((state) => state.auth)
    return (
<section className="bg-gradient-to-r h-screen from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]">
  <div className="container py-5 h-full">
    <div className="flex justify-center items-center h-full">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card rounded-lg bg-white shadow-xl">
          <div className="card-body p-4">
            <div className="flex text-black">
              <div className="flex-shrink-0">
                <img src={user?.photoURL}
                  alt="Generic placeholder image" className="img-fluid"
                  style={{ width: '150px', borderRadius: '10px' }} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1 font-bold">{user?.displayName}</h5>
                <p className="mb-2 text-sm pb-1" style={{ color: '#2b2a2a' }}>{user?.email}</p>
                <div className="flex items-center rounded-md p-2 mb-2"
                  style={{ backgroundColor: '#efefef' }}>
                  <div className="mr-3">
                    <p className="small text-muted mb-1">WELCOME</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default UserHome;