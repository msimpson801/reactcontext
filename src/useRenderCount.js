import { useRef, useEffect } from 'react';

export function useRenderCount() {
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current += 1;
    });

    return renderCount.current;
}
