import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {withRouter, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {generateThunk} from "../Redux/createReducer";

const CreatePage = (props) => {
    let history = useHistory();

    const data = JSON.parse(localStorage.getItem('storeData'))

    const [inputLink, setInputLink] = useState('')

    const pressSubmit = (event) => {

        if (event.key === 'Enter' && data) {
            props.generateThunk(inputLink, data.userToken)
        }
    }

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    useEffect(() => {
        if (props.link && props.link._id) {
            history.push(`/detail/${props.link._id}`);
        }
    }, [history, props.link])

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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        link: state.createReducer.link
    }
}

export default compose(withRouter, connect(mapStateToProps, {generateThunk}))(CreatePage);
