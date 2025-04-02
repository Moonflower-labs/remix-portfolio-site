import { useNavigate } from "react-router";
import { useCallback } from "react";

const Pagination = ({ currentPage, totalPages ,setCurrentPage }:PaginationProps) => {
  const navigate = useNavigate();

  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);


  const handlePreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, [setCurrentPage]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, [setCurrentPage]);
 const handleClickPage = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
  setCurrentPage(parseInt(e.currentTarget.value));
  navigate(`?page=${parseInt(e.currentTarget.value)}`);
 },[navigate, setCurrentPage]);

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
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
 
}

export default Pagination;
