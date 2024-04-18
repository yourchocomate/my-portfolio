/** Exports */
export { default as Snakeboard } from './SnakeBoard';

/** Typings */
export interface ISnake {
    x: number;
    y: number;
}

export interface ISnakeGameOptions {
    snakeSize?: number;
    foodSize?: number;
    snakeSpeed?: number;
    winScore?: number;
}
