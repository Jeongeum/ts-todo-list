// 액션 타입 선언

const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성함수 선언
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    // 액션에 부가적으로 필요한 값 : payload 라는 이름으로 통일
    payload: diff
});

// 액션 객체들에 대한 타입 준비
type CounterAction = 
| ReturnType<typeof increase>
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>;

// 이 리덕스 모듈에서 관리 할 상태의 타입 선언
type CounterState = {
    count: number;
};

// 초기 상태 선언
const initialState: CounterState = {
    count: 0
};


// 리듀서 작성
function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type) {
        case INCREASE:
            return {count: state.count + 1};
            case DECREASE:
            return {count: state.count - 1};
            case INCREASE_BY:
            return {count: state.count + action.payload};
            default:
                return state;
    }
}

export default counter;