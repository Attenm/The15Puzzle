import { useState } from 'react';
import './board.scss';
import { useSelector } from 'react-redux';
import useAction from '../../Hooks/useAction';
import getWinningTiles from '../../Helpers/getWinningTiles';
import arraysAreTheSame from '../../Helpers/arraysAreTheSame';


export default function Board ({time}){

    const configure = {
        winningPosition : false //Змінити для виграшної комбінації;
    }

    const gridSize = useSelector(state => state.mode);
    const steps = useSelector(state => state.steps);

    const sellsCount = gridSize * gridSize;
    const [tiles, setTiles] = useState([]);
    const { setResult, incrementSteps } = useAction();

    let winnerCombination = [];
    for (let i = 1; i < sellsCount + 1; i++){
        if(i < sellsCount){
            winnerCombination = [...winnerCombination, i];
        } else {
            winnerCombination = [...winnerCombination, 0];
        }
    }

    const winningTiles = getWinningTiles(gridSize);


    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffleTiles = (array) => {
        const values = array.map(tile => tile.value);
        const shuffledValues = shuffle(values);

        const shuffledArr = array.map((tile, index) => {
            return {...tile, value: shuffledValues[index]}
        });
        return shuffledArr;
    }

    useState(() => {
        const initialTiles = [];
        for (let i = 0; i < sellsCount; i++) {
            const x = i % gridSize;
            const y = Math.floor(i / gridSize);
            initialTiles.push({ value: i, xPos: x, yPos: y });
        }
        const shuffledTiles = shuffleTiles(initialTiles);
        setTiles(configure.winningPosition ? winningTiles : shuffledTiles);
    }, []);
    
    const changePosition = (index) => {

        const tileToMove = tiles[index];
        const emptyTile = tiles.find(tile => tile.value === 0);
        const nearEmptyTile = (Math.abs(tileToMove.xPos - emptyTile.xPos) === 1 && tileToMove.yPos === emptyTile.yPos) 
            || (Math.abs(tileToMove.yPos - emptyTile.yPos) === 1 && tileToMove.xPos === emptyTile.xPos);
            
        if(nearEmptyTile){
            const newTiles = tiles.map((tile) => {
                if(tile === tileToMove){
                    return { ...tile, value: emptyTile.value};
                } else if (tile === emptyTile) {
                    return { ...tile, value: tileToMove.value };
                } else {
                    return tile;
                }
            });
            setTiles(newTiles);
            incrementSteps();
        } else {
            return null;
        }
    }

    const handleClick = (index) => {
        changePosition(index);

        const currentValues = tiles.map((tile) => tile.value);

        if(arraysAreTheSame(currentValues, winnerCombination)) {
            setResult(steps, time);
        }
    }

    return (
        <div className='board__container' style={{'--grid-size': gridSize}}>
            {
                tiles.map((tile, index) => {
                    if( tile.value === 0) {
                        return null;
                    }
                    return <div 
                        className='board__tile'
                        style={{'--x': tile.xPos , '--y': tile.yPos}}
                        key={index}
                        onClick={()=>{handleClick(index)}}
                        >
                            {tile.value}
                        </div>
                })
            }
      </div>
    )
}