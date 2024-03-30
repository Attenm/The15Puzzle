import './btn.scss';

export default function Btn({text, onClickFunc}) {
    return (
        <button className='btn' onClick={onClickFunc}>{text}</button>
    )
}