import {useState} from "react";
import {connect} from 'react-redux';

import { searchWord,notFound } from "../redux/actions";
import ViewDefinitions from "./viewDefinitions";

function Definitions(props){
    const [searchWord, setSearchWord] = useState('');

    const handelChange = (event) => {
        setSearchWord(event.target.value);
    };

    const handelSubmit = (event) => {
        if(searchWord.trim()){
            setSearchWord('');
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.toLowerCase()}`)
                .then(response=>response.json())
                .then(data=>{
                    console.log(data);
                    if(Array.isArray(data)){
                        props.searchWord(data[0]);
                    }
                    else{
                        props.notFound({word:searchWord,...data});
                    }
                });
        }
        event.preventDefault();
    };

    return (
        <div className="Definitions">
            <form onSubmit={e => handelSubmit(e)}>
                <input type="text" value={searchWord} onChange={e => handelChange(e)} placeholder="Enter word..." style={{width:'400px',height:'30px'}}/>
                <button type="submit" style={{width:'80px',height:'34px'}}> Search</button>
            </form>
            <ViewDefinitions/>
        </div>
    );
}

export default connect(null, {searchWord,notFound})(Definitions);