import './modeSelect.scss';
import Btn from '../Btn/Btn';
import useAction from '../../Hooks/useAction';
import { useSelector } from 'react-redux';

export default function ModeSelect() {

    const { setMode } = useAction();
    const mode = useSelector(state => state.mode);
    
    if (mode !== null) {
        return null
    }

    return (
        <div className='mode-select__container'>
            <div className='mode-select__title'>select game mode</div>
            <Btn text={'3 X 3'} onClickFunc={()=>setMode(3)}/>
            <Btn text={'4 X 4'} onClickFunc={()=>setMode(4)}/>
        </div>
    )
}