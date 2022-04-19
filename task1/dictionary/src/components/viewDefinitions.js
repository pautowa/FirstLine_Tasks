import {connect} from 'react-redux';

import {addFavoritesWord} from '../redux/actions';

function viewDefinitions(props){

    const isFoundWord = props.notFoundMessage.word ? false : true;

    const handelClick = (event) => {
        console.log(props.definitions);
        if(props.definitions.word)
            props.addFavoritesWord(props.definitions);
        event.preventDefault();
    };

    const renderMessage = () => {
        return (
            <>
                <p>{props.notFoundMessage.title}</p>
                <p>{props.notFoundMessage.message}</p>
                <p>{props.notFoundMessage.resolution}</p>
            </>
        );
    };

    const renderDefinitions = () => {
        if(props.definitions.word){
            console.log(props.definitions);
            const phonetics = (props.definitions.phonetic ? props.definitions.phonetic : props.definitions.phonetics[2].text);
            const meanings = props.definitions.meanings;
            return (
                <>
                    <p>{ `[${phonetics.slice(1,phonetics.length-1)}]` }</p>
                    <p>Meanings:</p>
                    <div className='Meanings'>
                        { meanings.map((item,index)=>{
                            return (
                                <>
                                    <p key={item.partOfSpeech} style={{fontWeight:'bolder'}}>{item.partOfSpeech+':'}</p>
                                    <div className='Meanings' key={index}>
                                        {item.definitions.map((val,index)=>{
                                            return (
                                                <p key={index}>{val.definition}</p>
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        }) }
                    </div>
                </>
            );
        }
        else{
            return '';
        }
    };

    return (
        <div className='viewDefinitions'>
            <div className='viewDefinitions__header'>
                <h2>{ !isFoundWord ? props.notFoundMessage.word : props.definitions.word }</h2>
                <button onClick={e => handelClick(e)} disabled={!isFoundWord}>Избранное</button>
            </div>
            <div className='viewDefinitions__main'>
                { !isFoundWord ? renderMessage() : renderDefinitions() }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.word);
    return state.word;
};

export default connect(mapStateToProps,{addFavoritesWord})(viewDefinitions);