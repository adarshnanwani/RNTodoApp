import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
// import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from '../actions/actionTypes';

const initialState = {
    placeName: '',
    places: [],
    selectedItem: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: 'https://static.toiimg.com/thumb/msid-24486480/Bangalore.jpg?width=361&height=241'
                    }
                })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.key !== state.selectedItem.key),
                selectedItem: null
            }
        // case SELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedItem: state.places.find(place => { return place.key === action.placeKey  })
        //     }
        // case DESELECT_PLACE:
        //     return {
        //         ...state,
        //         selectedItem: null
        //     }
        default:
            return state;
    }
}

export default reducer;