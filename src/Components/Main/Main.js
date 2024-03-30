import Btn from '../Btn/Btn';
import './main.scss';
import Board from '../Board/Board';

export default function Main() {
    const steps = '5';
    const time = '5:15'
    return (
        <div className='main__container'>
            <button className='btn-arrow-left'></button> 
            <div className='main__header-section'>
                <div className='main__result-section'>
                    <div>steps: {steps}</div>
                    <div>time: {time}</div>
                </div>
            </div>
            <Board />
            <Btn text={'restart'} />
        </div>
    )
}