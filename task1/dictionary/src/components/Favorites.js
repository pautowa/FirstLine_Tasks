import {connect} from 'react-redux';

import {searchWord} from '../redux/actions';

function Favorites(props){

    const handelClick = (event,index) => {
        props.searchWord(props.favoritesWords[index]);
        event.preventDefault();
    };

    return (
        <div className="Favorites">
            <h3>Избранное:</h3>
            <ul>
                {props.favoritesWords.map((item,index)=>{
                    return (
                        <li key={index} onClick={e => handelClick(e,index)} style={{cursor: 'pointer',fontWeight:'bolder'}}>{item.word}</li>
                    );
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    console.log('favorites');
    console.log(state.favorites);
    return state.favorites;
}

export default connect(mapStateToProps,{searchWord})(Favorites);