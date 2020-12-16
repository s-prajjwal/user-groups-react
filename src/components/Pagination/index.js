import './Pagination.css';

const getPaginations = (numPages) => {
  let arr = [];
  for (let i = 0; i < numPages; i++) {
    arr.push(i + 1);
  }
  return arr;
};

const Pagination = ({ numPages, setActiveIndex }) => {
  return (
    <div className='pagination-wrapper'>
      {getPaginations(numPages).map((page) => {
        return (
          <div
            className="page-nums"
            onClick={() => {
              setActiveIndex(page);
            }}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
