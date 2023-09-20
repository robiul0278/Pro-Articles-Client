/* eslint-disable react/prop-types */


const PerPage = ({ postPerPage, totalPosts, paginate }) => {
    const pagNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pagNumbers.push(i)

    }


    return (
        <div className="join flex justify-center items-center">
            {pagNumbers.map(number => (

                <button key={number} onClick={() => paginate(number)} className="join-item btn">{number}</button>

            ))}


        </div>
    );
};

export default PerPage;