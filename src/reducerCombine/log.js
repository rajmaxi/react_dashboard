const initialState = {
    isLoading: 1
};
const logReducer = (state = initialState, action) => {
    // console.log(action, "action reducer", state);

    switch (action.type) {

        case 'NUMBER_Change':
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default logReducer;