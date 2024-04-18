import GreenBlob from '@/assets/blob/green-blob.svg?react';
import BlueBlob from '@/assets/blob/blue-blob.svg?react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Div } from './elements';

const BlobOverlay: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <Div className="absolute inset-0">
            <Div center className="relative w-full h-full">
                <motion.div
                    className={clsx(
                        'absolute -top-[30%] lg:top-[inherit] lg:-left-[12rem] z-10',
                        className
                    )}
                    animate={{
                        rotate: 5,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    <GreenBlob className="w-[50rem]" />
                </motion.div>
                <motion.div
                    className={clsx(
                        'absolute -top-[10%] lg:top-[35%] -right-[20rem] xl:top-[35%] z-1',
                        className
                    )}
                    // animate={{
                    //     rotate: -15,
                    //     scale: [1, 1.1, 1],
                    // }}
                    // transition={{
                    //     duration: 4,
                    //     repeat: Infinity,
                    //     repeatType: 'reverse',
                    // }}
                >
                    <BlueBlob className="h-full lg:aspect-[120/90] lg:w-full" />
                </motion.div>
            </Div>
        </Div>
    );
};

export default BlobOverlay;
