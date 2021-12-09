
const initialState = {
    counter:0,
    maxCounter:5,
    startCounter:0,
    error:''
}
type InitialStateType = typeof initialState


export const CounterReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "ADD-COUNTER": {
            return {...state,counter: action.counter}
        }
        case "NULL-COUNTER": {
            return {...state,counter: state.startCounter}
        }
        case "CHANGE-MAX-COUNTER": {
            return {...state,maxCounter: action.maxCounter}
        }
        case "CHANGE-START-COUNTER": {
            return {...state,startCounter: action.startCounter}
        }
        case "SET-VALUE": {
            return {...state,counter: action.startCounter}
        }
        case "SET-ERROR": {
            return {...state,error: action.error}
        }


        default:
            return state
    }
}

type ActionType = AddCounterACType | NullCounterACType |
    ChangeMaxValueACType |ChangeStartValueACType | SetValueACType | SetErrorACType

type AddCounterACType = ReturnType<typeof AddCounterAC>
export const AddCounterAC = (counter:number) => ({type:"ADD-COUNTER", counter}as const)

type NullCounterACType = ReturnType<typeof NullCounterAC>
export const NullCounterAC = () => ({type:"NULL-COUNTER"}as const)


type ChangeMaxValueACType = ReturnType<typeof ChangeMaxValueAC>
export const ChangeMaxValueAC = (maxCounter:number) => ({type:"CHANGE-MAX-COUNTER", maxCounter}as const)

type SetValueACType = ReturnType<typeof SetValueAC>
export const SetValueAC = (startCounter:number) => ({type:"SET-VALUE", startCounter}as const)


type ChangeStartValueACType = ReturnType<typeof ChangeStartValueAC>
export const ChangeStartValueAC = (startCounter:number) => ({type:"CHANGE-START-COUNTER", startCounter}as const)


type SetErrorACType = ReturnType<typeof SetErrorAC>
export const SetErrorAC = (error:string) => ({type:"SET-ERROR", error}as const)
