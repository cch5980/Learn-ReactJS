import { createAction, handleActions } from "redux-actions";

// 1. 액션 타입 정의
const CHECK_CHANGE = 'todo/CHECK_CHANGE';
const INSERT = 'todo/INSERT';
const REMOVE = 'todo/REMOVE';

// 2. 액션 생성 함수
export const checkChange = createAction(CHECK_CHANGE, id => id);

let id = 5;
export const insert = createAction(INSERT, text => ({
    id: id++,
    todo: text,
    checked: false,
}));

export const remove = createAction(REMOVE, id => id);

// 3. 초기값 설정
const initialState = {
    todos: [
        {
          id: 1,
          todo: 'todo1',
          checked: false
        },
        {
          id: 2,
          todo: 'todo2',
          checked: true
        },
        {
          id: 3,
          todo: 'todo3',
          checked: false
        },
        {
          id: 4,
          todo: 'todo4',
          checked: true
        },
    ],
}

// 4. 리듀서
function reducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_CHANGE:
            return ;
        default:
            return state;
    }
}
