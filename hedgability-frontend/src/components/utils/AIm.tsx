import { useEffect, useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

    const toRender =
    'Provide Liquidity Providers an \n Everyday Hedging Strategy to combat Impermanent Loss.\n Exclusive to UniSwapV3 with the use of \n backtested and sophisticated machine learning models';

    const Aim = () => {
    const [fontSize, setFontSize] = useState('10px');

    const checkWindowWidth = () => {
        if (window.innerWidth < 640) {
        setFontSize('10px');
        } else {
        setFontSize('16px');
        }
    };

    useEffect(() => {
        // Check the window width on mount and resize
        checkWindowWidth();
        window.addEventListener('resize', checkWindowWidth);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', checkWindowWidth);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center my-10">
            <div className="font-bold text-xl sm:text-3xl">Our Aim</div>

            <div className="py-4 px-8 mt-2">
                <CodeBlock
                codeContainerStyle={{ wordBreak: 'break-word', fontSize }}
                text={toRender}
                language="javascript"
                showLineNumbers
                theme={dracula}
                />
            </div>
        </div>
    );
    };

export default Aim;
