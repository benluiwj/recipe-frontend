import "@/styles/components/recipesGrid/pagination.scss"
import { MAX_PAGE_BUTTONS } from "@/components/recipesGrid/constants"
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg"
interface PaginationProps {
  pageNo: number
  maxPage: number
  selectPage: (pageNo: number) => void
  handleNext: () => void
  handlePrev: () => void
}

const Pagination = ({
  pageNo,
  maxPage,
  selectPage,
  handleNext,
  handlePrev,
}: PaginationProps) => {
  const renderMiddlePages = (pageNo: number) => {
    // range is from page 2 to max page - 1
    // default cases
    if (MAX_PAGE_BUTTONS - maxPage >= 3) {
      return
    }
    if (MAX_PAGE_BUTTONS - maxPage === 2) {
      return (
        <li>
          <a
            className={
              pageNo === 2 ? "pagination-link is-current" : "pagination-link"
            }
            onClick={() => selectPage(2)}
          >
            2
          </a>
        </li>
      )
    }
    if (MAX_PAGE_BUTTONS - maxPage === 1) {
      return (
        <>
          <li>
            <a
              className={
                pageNo === 2 ? "pagination-link is-current" : "pagination-link"
              }
              onClick={() => selectPage(2)}
            >
              2
            </a>
          </li>
          <li>
            <a
              className={
                pageNo === 3 ? "pagination-link is-current" : "pagination-link"
              }
              onClick={() => selectPage(3)}
            >
              3
            </a>
          </li>
        </>
      )
    }
    if (MAX_PAGE_BUTTONS - maxPage <= 0 && pageNo <= 3) {
      return (
        <>
          <li>
            <a
              className={
                pageNo === 2 ? "pagination-link is-current" : "pagination-link"
              }
              onClick={() => selectPage(2)}
            >
              2
            </a>
          </li>
          <li>
            <a
              className={
                pageNo === 3 ? "pagination-link is-current" : "pagination-link"
              }
              onClick={() => selectPage(3)}
            >
              3
            </a>
          </li>
          <li>
            <a
              className={
                pageNo === 4 ? "pagination-link is-current" : "pagination-link"
              }
              onClick={() => selectPage(4)}
            >
              4
            </a>
          </li>
        </>
      )
    }
    if (MAX_PAGE_BUTTONS - maxPage <= 0 && pageNo >= maxPage - 1) {
      return (
        <>
          <li>
            <a
              className={
                pageNo === maxPage - 3
                  ? "pagination-link is-current"
                  : "pagination-link"
              }
              onClick={() => selectPage(maxPage - 3)}
            >
              {maxPage - 3}
            </a>
          </li>
          <li>
            <a
              className={
                pageNo === maxPage - 2
                  ? "pagination-link is-current"
                  : "pagination-link"
              }
              onClick={() => selectPage(maxPage - 2)}
            >
              {maxPage - 2}
            </a>
          </li>
          <li>
            <a
              className={
                pageNo === maxPage - 1
                  ? "pagination-link is-current"
                  : "pagination-link"
              }
              onClick={() => selectPage(maxPage - 1)}
            >
              {maxPage - 1}
            </a>
          </li>
        </>
      )
    }
    // dynamic middle 3 buttons
    return (
      <>
        <li>
          <a className="pagination-link" onClick={() => selectPage(pageNo - 1)}>
            {pageNo - 1}
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            onClick={() => selectPage(pageNo)}
          >
            {pageNo}
          </a>
        </li>
        <li>
          <a className="pagination-link" onClick={() => selectPage(pageNo + 1)}>
            {pageNo + 1}
          </a>
        </li>
      </>
    )
  }
  return (
    <nav
      className="pagination is-centered mb-4"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <li>
          <a className="pagination-previous" onClick={handlePrev}>
            <CgArrowLongLeft />
          </a>
        </li>
        <li>
          <a
            className={
              pageNo <= 1 ? "pagination-link is-current" : "pagination-link"
            }
            onClick={() => selectPage(1)}
          >
            1
          </a>
        </li>
        {pageNo - 1 > 2 && maxPage > MAX_PAGE_BUTTONS && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {renderMiddlePages(pageNo)}
        {maxPage - pageNo > 2 && maxPage > MAX_PAGE_BUTTONS && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {maxPage > 1 && (
          <li>
            <a
              className={
                pageNo >= maxPage
                  ? "pagination-link is-current"
                  : "pagination-link"
              }
              onClick={() => selectPage(maxPage)}
            >
              {maxPage}
            </a>
          </li>
        )}
        <li>
          <a className="pagination-next" onClick={handleNext}>
            <CgArrowLongRight />
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
