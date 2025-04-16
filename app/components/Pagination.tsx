import { useLocation } from "react-router";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Paginator = ({ currentPage, totalPages }: PaginationProps) => {
  const location = useLocation().pathname
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePreviousPage = () => {
    return currentPage > 1 ?
      location + `?page=${currentPage - 1}` :
      location + `?page=1`;
  };
  const handleNextPage = () => {
    return currentPage < totalPages ?
      location + `?page=${currentPage + 1}` :
      location + `?page=${totalPages}`;
  };

  return (
    <Pagination className="pb-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={handlePreviousPage()} className={currentPage === 1 ? 'disabled' : ''} viewTransition preventScrollReset
          />
        </PaginationItem>
        {pagesArray.map(page =>
          <PaginationItem key={page}>
            <PaginationLink to={location + `?page=${page}`} className={`${currentPage === page ? ' disabled' : ' btn-primary'}`} viewTransition preventScrollReset
              key={page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext to={handleNextPage()} className={currentPage === totalPages ? 'disabled' : ''} viewTransition preventScrollReset
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};


export default Paginator;
