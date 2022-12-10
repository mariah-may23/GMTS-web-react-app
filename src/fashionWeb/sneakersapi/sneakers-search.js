import {useDispatch, useSelector} from "react-redux";
import {findSneakerBySearchTermThunk} from "./sneakers-thunks";
import {useState, useEffect} from "react";


const SneakersSearch = () => {
    const [searchTerm, setSearchTerm] = useState('adidas')
    const {sneakers, loading} = useSelector((state) => state.sneakers)
    console.log(loading);

    console.log("Printing Sneakers array")
    console.log(sneakers)
    //call thunk with dispatch to find by term
    const dispatch = useDispatch()

    // THIS IS NOT PROPER USEEFFECT SO DISREGARD OR UPDATE LATER
    useEffect(() => {
        if(searchTerm){
            dispatch(findSneakerBySearchTermThunk(searchTerm))
        }
    }, [])


    return(

        <>
            <h1 className="text-bg-primary"> sneakers search </h1>
            <input
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                value={searchTerm}

            />
            <button onClick={() => {
                dispatch(findSneakerBySearchTermThunk(searchTerm))
            }}>Search</button>



            <ul>
                <li> rendering testing </li>
                {!loading && sneakers &&
                    sneakers.map((sneaker) =>

                        <li key={sneaker._id} className="text-white">
                            console.log("mapping now")
                            console.log(sneaker.shoeName);
                            sneaker.shoeName
                        </li>
                    )
                }
            </ul>



        </>
    )
}
export default SneakersSearch;
