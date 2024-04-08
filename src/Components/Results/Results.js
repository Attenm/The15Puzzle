import useAction from '../../Hooks/useAction';
import Btn from '../Btn/Btn';
import './results.scss';
import {useSelector} from 'react-redux';

export default function Results({resetTime}) {
    const result = useSelector(state => state.result);
    const { resetGame } = useAction();
    const handleClick = () => {
        resetGame();
        resetTime();
    }
    
    if(!result){
        return null;
    }

    return (
        <div className='results__container'>
            <div className='results__title'>congratulations!</div>
            <div className='results__info-type'>stats:</div>
            <div className='results__result-container'> 
                <div>time: {result.time}</div>
                <div>steps: {result.steps}</div>
            </div>
            <Btn className='results__button' text={'restart'} onClickFunc={handleClick} />
        </div>
    )
}