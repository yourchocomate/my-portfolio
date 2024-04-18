import { Button } from '@/components/ui/buttons';
import { motion } from 'framer-motion';
import { Text } from '@/components/ui/typography';
import { useSnakeGameController } from '@/hooks/ui/useSnakeGameController';
import clsx from 'clsx';
import SVG from '../SVG';
import { useNavigate } from 'react-router-dom';
import { Column, Div, Row } from '../ui/elements';

const SnakeBoard: React.FC = () => {
    const navigate = useNavigate();
    const winScore = 10;
    const {
        canvasRef,
        canvasSize,
        score,
        gameOver,
        paused,
        togglePause,
        resetGame,
    } = useSnakeGameController({ winScore });

    const foodLeft = [...Array(winScore - score)];
    const foodEaten = [...Array(score)];

    return (
        <Div className="snake-board">
            <Row center className="gap-6 size-full ">
                <Div className="w-1/2 h-full snake-game z-50">
                    <canvas
                        className="size-full"
                        ref={canvasRef}
                        width={canvasSize.width}
                        height={canvasSize.height}
                    />
                    <Column center className="absolute bottom-10 left-0 w-full">
                        {paused && !gameOver && (
                            <motion.button
                                onClick={togglePause}
                                className="text-primary-1 text-xs xl:text-base bg-accent-5 py-2 px-2 rounded-base"
                                exit={{ opacity: 0 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                start-game
                            </motion.button>
                        )}
                        {gameOver && score !== winScore && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="flex flex-col items-center w-full"
                            >
                                <Column
                                    centerX
                                    className="bg-primary-3 w-full py-2 mb-3"
                                >
                                    <span className="text-accent-2 uppercase text-subheadings">
                                        game over!
                                    </span>
                                </Column>
                                <span
                                    onClick={resetGame}
                                    className="text-xs xl:text-base"
                                >
                                    start-again
                                </span>
                            </motion.div>
                        )}
                        {score === winScore && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="flex flex-col items-center w-full"
                            >
                                <Column
                                    centerX
                                    className="bg-primary-3 w-full py-2 mb-3"
                                >
                                    <span className="text-accent-2 uppercase text-subheadings">
                                        well done!
                                    </span>
                                </Column>
                                <span
                                    onClick={resetGame}
                                    className="text-xs xl:text-base"
                                >
                                    play-again
                                </span>
                            </motion.div>
                        )}
                    </Column>
                </Div>
                <Column between className="w-1/2 h-full">
                    <Column className="h-full z-50">
                        <Column className="w-full p-4 bg-[rgb(1_20_35/19%)] rounded-base">
                            <Text className="text-secondary-4 text-xs xl:text-base">
                                // use keyboard
                            </Text>
                            <Text className="text-secondary-4 text-xs xl:text-base">
                                // arrows to play
                            </Text>
                            <Div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-1 items-center justify-center mt-4">
                                <Div></Div>
                                <Button
                                    default
                                    className="w-10 xl:w-16 !bg-primary-1"
                                >
                                    ↑
                                </Button>
                                <Div></Div>
                                <Button
                                    default
                                    className="w-10 xl:w-16 !bg-primary-1"
                                >
                                    ←
                                </Button>
                                <Button
                                    default
                                    className="w-10 xl:w-16 !bg-primary-1"
                                >
                                    ↓
                                </Button>
                                <Button
                                    default
                                    className="w-10 xl:w-16 !bg-primary-1"
                                >
                                    →
                                </Button>
                            </Div>
                        </Column>
                        <Text className="text-secondary-4 text-xs xl:text-base mt-6">
                            // food left
                        </Text>
                        <Div className="grid grid-cols-5 gap-3 mt-4 w-[80%]">
                            {foodLeft.map((_, i) => (
                                <SVG
                                    name="food"
                                    className={clsx(
                                        'w-3 h-3 xl:w-7 xl:h-7',
                                        i === foodLeft.length - 1 &&
                                            'animate-pulse'
                                    )}
                                    key={i}
                                />
                            ))}
                            {foodEaten.map((_, i) => (
                                <SVG
                                    name="food-empty"
                                    className="w-3 h-3 xl:w-7 xl:h-7"
                                    key={i}
                                />
                            ))}
                        </Div>
                    </Column>
                    <Div className="flex items-end justify-end">
                        <Button
                            onClick={() => navigate('/about')}
                            ghost
                            className="text-xs xl:text-base z-50"
                        >
                            skip
                        </Button>
                    </Div>
                </Column>
            </Row>
            <SVG name="cross-flat" className="bolt bolt-up-left" />
            <SVG name="cross-flat" className="bolt bolt-up-right" />
            <SVG name="cross-flat" className="bolt bolt-down-left" />
            <SVG name="cross-flat" className="bolt bolt-down-right" />
        </Div>
    );
};

export default SnakeBoard;
