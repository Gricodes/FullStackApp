import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'

const DetailPage = (props) => {
    console.log(props.link)
const linkId = useParams().myId // UseAllReducer DialogPage path="/detail/:myId"

    const getLink = () => {
        props.getLinksIdThunk(linkId,props.data.userToken)
    }
    useEffect(()=>{
        getLink()
    },[])

    return(
        <div>
            <h1> Detail Page </h1>
        </div>
    )
}
export default DetailPage;