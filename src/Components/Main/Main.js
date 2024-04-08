import Btn from '../Btn/Btn';
import './main.scss';
import Board from '../Board/Board';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useAction from '../../Hooks/useAction';  

export default function Main({time, incrementTime, resetTime}) {
    const mode = useSelector(state => state.mode);
    const result = useSelector(state => state.result);
    const steps = useSelector(state => state.steps);
    const {incrementSteps, resetGame } = useAction();
    
    useEffect(() => {
        if(mode){
            const timer = setInterval(()=>{
                if(!result){
                    incrementTime()
                }
            }, 1000);
            return () => {clearInterval(timer)};
        }
    }, [mode, result, incrementTime])
    
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60 % 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        const hours = Math.floor(time / 3600);
        return hours
        ? `${hours}:${minutes}:${seconds}`
        : `${minutes}:${seconds}`;   
    }

    const handleClick = () =>  {
        resetGame();
        resetTime();
    }

    if( mode === null || result) {
        return null;
    }
    
    return (
        <div className='main__container'>
            <button className='btn-arrow-left' onClick={handleClick}></button> 
            <div className='main__header-section'>
                <div className='main__result-section'>
                    <div>time: {formatTime(time)}</div>
                    <div>steps: {steps}</div>
                </div>
            </div>
            <Board incrementSteps={incrementSteps} time={time}/>
            <Btn text={'restart'} onClickFunc={handleClick} />
        </div>
    )
}