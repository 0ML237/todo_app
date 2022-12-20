
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPaginateTask } from '../redux/slice'

const PaginationF = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationClass, setPaginationClass] = useState({navigatorActiveClass: "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none", navigatorDisableClass:"page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"})
  const {count} = useSelector((state) => (state.todo));
  const pagesNbr = Math.ceil(count / 5)
  const buttonNbr = []

  const dispatch = useDispatch()
  
  const nextPage = () =>{
    if (currentPage < pagesNbr){
      setCurrentPage(prev => prev + 1)
    }
  }

  
  const previousPage = () => {
    if(currentPage > 1){
      setCurrentPage(prev => prev - 1)
    }
  }
  // text-gray-500 pointer-events-none focus:shadow-none
  for (let i = 1; i <= pagesNbr; i++){
    const btnClass = currentPage === i ? "page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
    : "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
    
    const button = (
      <li className="page-item">
        <a class={btnClass} href="#" onClick={()=> setCurrentPage(i)} >
          {i}
        </a>
      </li>
    );

    buttonNbr.push(button)
    
  }

  useEffect(()=>{
    dispatch(getPaginateTask(currentPage))
  }, [currentPage])

  return pagesNbr &&
    (
        <div className="flex flex-row-reverse px-32 w-full z-0 py-5 bg-white bottom-0">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item"><a
                  class={currentPage === 1 ? paginationClass.navigatorDisableClass : paginationClass.navigatorActiveClass}
                  href="#" tabindex="-1" onClick={() => previousPage()}>Previous</a>
              </li>
              {buttonNbr}
              <li className="page-item"><a
                  class={currentPage === pagesNbr ? paginationClass.navigatorDisableClass : paginationClass.navigatorActiveClass}
                  href="#" onClick={() => nextPage()}>Next</a>
              </li>
            </ul>
          </nav>
      </div>
    )
}

export default PaginationF;
