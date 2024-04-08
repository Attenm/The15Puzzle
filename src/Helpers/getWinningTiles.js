const getWinningTiles = (gridSize) => {
    const tiles = [];
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const value = i * gridSize + j + 1;
            tiles.push({ value, xPos: j, yPos: i });
        }
    }
    tiles[tiles.length - 1].value = 0;
    const valToReplace = tiles[tiles.length - 2].value;
    tiles[tiles.length - 2].value = 0;
    tiles[tiles.length -1].value = valToReplace;
    return tiles;
}

export default getWinningTiles;