import React, {useEffect, useState} from "react";

import {useHistory} from "react-router-dom";
import Loader from "../loader/Loader";


const CreatePage = (props) => {

    const history = useHistory();
    const data = JSON.parse(localStorage.getItem('storeData'))

    const [inputLink, setInputLink] = useState('')
    const [ready, setReady] = useState(null)

    const pressSubmit = (event) => {
        if (event.key === 'Enter' && data) {
            setReady(true)
            props.generateThunk(inputLink, data.userToken)
            setInputLink('')
        }
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    useEffect(() => {
        if (ready && props.link) {
            history.push(`/detail/${props.link._id}`)
        }
    }, [history, props.link, ready,props.auth])

    return (
        <div className="col s12">
            <div className="row">
                <div className="input-field col s12 ">
                    <input
                        type="text"
                        id="link"
                        className="autocomplete"
                        value={inputLink}
                        onChange={(event) => {
                            setInputLink(event.target.value)
                        }}
                        onKeyPress={pressSubmit}
                    />
                    <label htmlFor="autocomplete-input">Add Link</label>
                </div>
            </div>
            {ready && <Loader/>}
        </div>
    )
}


export default CreatePage;
