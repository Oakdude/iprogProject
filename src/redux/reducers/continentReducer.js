

export default function continentReducer (state = [], action){
    switch (action.type) {
        case 'UPDATE_CONTINENT':
            return action.continent;
        default:
            return state;
    }
}