import { useEffect, useState } from 'react';

const FullscreenLoader = () => {
    const [dir, setDir] = useState(1);
    const [dots, setDots] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            if (dir === 1) {
                setDots(dots + 1);
            } else {
                setDots(dots - 1);
            }
        }, 500);
        if (dots === 3) {
            setDir(-1);
        } else if (dots === 1) {
            setDir(1);
        }
    }, [dots, dir]);

    return (
        <div className="absolute inset-0">
            <div className="w-full min-h-dvh flex justify-center items-center bg-primary-1">
                <div className="w-20">
                    loading
                    {[...Array(dots)].map((_, i) => (
                        <span key={i}>_</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullscreenLoader;
