import './results.scss';

export default function Results() {
    const steps = '5';
    const time = '15:45'
    return (
        <div className='results__container'>
            <div className='results__title'>congratulations!</div>
            <div className='results__info-type'>stats:</div>
            <div className='results__result-container'> 
                <div>steps:{steps}</div>
                <div>steps:{time}</div>
            </div>
            <button className='results__button'>restart</button>
        </div>
    )
}