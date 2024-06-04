
const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handleClickPage
}:PaginationProps) => {

  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center gap-5 mt-8 pb-5">
      <button
        className={`btn btn-primary ${currentPage === 1 ? 'disabled': ''}`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pagesArray.map(page =>
          <button 
            className={`btn ${currentPage === page?' disabled':' btn-primary'}`}
            key={page}
            onClick={handleClickPage}
            value={page}
            disabled={currentPage === page}>
            {page}
          </button>
        )}
      <button
        className={`btn btn-primary ${currentPage === totalPages ? 'hidden': 'block'}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>

    
    </div>
    
  );
};
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePreviousPage(): void,
  handleNextPage(): void,
  handleClickPage(): void,
}

export default Pagination;
