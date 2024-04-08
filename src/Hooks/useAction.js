import { useDispatch } from "react-redux";

export default function useAction () {

    const dispatch = useDispatch();

    const setMode = (modeType) => {
        dispatch({type: 'setMode', payload: modeType});
    }
    
    const setResult = (stepsCount, timeStamp) => {
        const result = {
            steps: stepsCount, 
            time: timeStamp
        }
        dispatch({type: 'setResult', payload: result});
    }

    const incrementSteps = (step = 1) => {
        dispatch({type:'incrementSteps', payload: step})
    }

    const resetGame = () => {
        dispatch({type: 'resetGame', payload:{
            mode: null,
            result: null,
            steps: 0
        }})
    }
    
    return {
        setMode,
        setResult,
        incrementSteps,
        resetGame
    }
}