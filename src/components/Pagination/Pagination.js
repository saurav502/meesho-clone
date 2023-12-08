import { useState } from "react";



const Pagination =()=>{
    const PageNumberDesHandler=()=>{
        setPageNumber(pageNumber-1)
    }

    const PageNumberIncHandler=()=>{
        setPageNumber(pageNumber+1)
    }

    const [pageNumber,setPageNumber]=useState(0)
    return (
        <div>
            <button onClick={PageNumberDesHandler}>PREV</button>
                <p>{pageNumber} of 20</p>
            <button onClick={PageNumberIncHandler}>NEXT</button>
        </div>
    );
}

export default Pagination;