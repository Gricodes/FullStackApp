import React from 'react';
import 'materialize-css';
import {UseAllReducer} from './UseAllReducer';

function App() {
    return (
            <div className="container">
               <UseAllReducer isAuthentication = {false}/>
            </div>
    );
}

export default App;
