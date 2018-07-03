export default function parseInput(state = "", action) {
    switch(action.type) {
        case 'ACTION':
            return action.payload;
        default:
            return state;
    }
}