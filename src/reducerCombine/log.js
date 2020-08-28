const initialState = {
    isLoading: 1,
    breadCrumb: 'Dashboard'
};
const logReducer = (state = initialState, action) => {
    console.log('testaction',action);

    switch (action.type) {

        case 'NUMBER_Change':
            return {
                ...state,
                isLoading: action.payload,
                breadCrumb: action.breadCrumbs,
            };
        default:
            return state;
    }
};

export default logReducer;