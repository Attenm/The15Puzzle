import './modeSelect.scss';
import Btn from '../Btn/Btn';

export default function ModeSelect() {
    return (
        <div className='mode-select__container'>
            <div className='mode-select__title'>select game mode</div>
            <Btn text={'3 X 3'} />
            <Btn text={'4 X 4'} />
        </div>
    )
}