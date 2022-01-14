import { combineReducers } from "redux";
import counter from './counter';
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

// 루트 리듀서 내보내기
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
