

const PerPage = ({ postPerPage, totalPosts, paginate }) => {
    const pagNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pagNumbers.push(i)

    }


    return (
        <div className="join ">
            {pagNumbers.map(number => (
                <>
                    <button onClick={() => paginate(number)} key={number} className="join-item btn">{number}</button>
                </>
            ))}


        </div>
    );
};

export default PerPage;