import useAuth from "../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
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
                  style={{ width: '180px', borderRadius: '10px' }} />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1 font-bold">{user?.displayName}</h5>
                <p className="mb-2 text-sm pb-1" style={{ color: '#2b2a2a' }}>{user?.email}</p>
                <div className="flex items-center rounded-md p-2 mb-2"
                  style={{ backgroundColor: '#efefef' }}>
                  <div className="mr-3">
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="mr-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
                {/* <div className="flex pt-1">
                  <button type="button" className="btn btn-outline-primary me-1 flex-grow">Chat</button>
                  <button type="button" className="btn btn-primary flex-grow">Follow</button>
                </div> */}
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