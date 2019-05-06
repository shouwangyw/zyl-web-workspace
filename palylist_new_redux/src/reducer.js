import { combineReducers } from "redux";
let data = (data = [], action) => {
    console.log(action);
    switch (action.type) {
        case "ADD":
            return [...data, {
                id: Date.now(),
                title: action.title,
                singer: action.singer,
                selected: false,
                like: false
            }];
        case 'REMOVE':
            return data.filter((val) => {
                return val.id != action.id
            });

        case "CHECKALL":
            return data.map((item) => {

                item.selected = action.check;
                return item;
            });
        case "CHECK":
            return data.map((item) => {
                if (item.id == action.id) {
                    console.log(action.id, action.check)
                    item.selected = action.check;

                }
                return item;
            });
        case "LIKE":
            return data.map((item) => {
                if (item.id == action.id) {
                    console.log(action.id, action.like)
                    item.like = action.like;

                }
                return item;
            });
        case "REMOVE_SELECT":
            return data.filter((item) => {
                return !item.selected
            });
        case "LIKE_SELECT":
            return data.map((item) => {
                if (item.selected) {
                    item.like = item.selected;
                }
                return item
            });
        case "REMOVE_LIKE":
            return data.map((item) => {
                if (item.selected) {
                    item.like = !item.selected;
                }
                return item
            });
        default:
            return data;

    }

}

let reducer = combineReducers({
    data
})
export default reducer