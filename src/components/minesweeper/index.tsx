import { useState, useEffect } from "react";
import Cell from "./Cell";

const size = 36; // 미니맵 크기
const numMines = 300; // 총 지뢰 개수

export const EMPTY = 0;
export const MINE = -1;
export const VISITED = -2; // 방문한 셀을 나타내는 값
export const FLAGGED = -3; // 깃발

const Minesweeper = () => {
  const [minesweeper, setMinesweeper] = useState<number[][]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    initializeMap();
  }, []);

  const initializeMap = () => {
    const newMinesweeper = [];
    for (let i = 0; i < size; i++) {
      newMinesweeper.push(new Array(size).fill(EMPTY));
    }
    placeMines(newMinesweeper);
  };

  const placeMines = (map: number[][]) => {
    let minesPlaced = 0;
    while (minesPlaced < numMines) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);

      if (map[x][y] !== MINE) {
        map[x][y] = MINE;
        minesPlaced++;
      }
    }
    setMinesweeper(map);
  };

  const countNeighborMines = (x: number, y: number): number => {
    if (minesweeper[x][y] === MINE) {
      return MINE;
    }

    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
          if (minesweeper[nx][ny] === MINE) {
            count++;
          }
        }
      }
    }
    return count;
  };

  const cellClick = (x: number, y: number) => {
    if (minesweeper[x][y] === MINE) {
      for (let row = 1; row < size; row++) {
        for (let cell = 1; cell < size; cell++) {
          if (
            !(
              minesweeper[row][cell] === MINE ||
              minesweeper[row][cell] === VISITED
            )
          ) {
            cellClick(row, cell);
          }
        }
      }
      setIsEnd(true);
      //   initializeMap();
    } else {
      const count = countNeighborMines(x, y);
      if (count === 0 && minesweeper[x][y] !== VISITED) {
        const newMinesweeper = [...minesweeper];
        newMinesweeper[x][y] = VISITED;
        setMinesweeper(newMinesweeper);
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
              if (
                newMinesweeper[nx][ny] !== VISITED &&
                minesweeper[nx][ny] !== FLAGGED
              ) {
                cellClick(nx, ny);
              }
            }
          }
        }
      } else {
        const newMinesweeper = [...minesweeper];
        newMinesweeper[x][y] = count;
        setMinesweeper(newMinesweeper);
      }
    }
  };

  const onRightClick =
    (x: number, y: number) =>
    (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
      event.preventDefault();
      const newMinesweeper = [...minesweeper];
      if (newMinesweeper[x][y] === FLAGGED) {
        newMinesweeper[x][y] = EMPTY;
      } else {
        newMinesweeper[x][y] = FLAGGED;
      }
      setMinesweeper(newMinesweeper);
    };

  useEffect(() => {
    if (isEnd) {
      alert("지뢰를 밟았습니다! 게임 오버!");
    }
  }, [isEnd]);

  return (
    <div>
      <table>
        <tbody>
          {minesweeper.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <Cell
                  key={colIndex}
                  value={cell}
                  onClick={() => cellClick(rowIndex, colIndex)}
                  onContextMenu={(
                    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
                  ) => onRightClick(rowIndex, colIndex)}
                  isEnd={isEnd}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Minesweeper;
