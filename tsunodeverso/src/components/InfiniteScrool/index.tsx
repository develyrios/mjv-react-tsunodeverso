import { useEffect, useRef } from 'react';

interface IInfiniteScrollProps {
    callback: () => void;
    loading: boolean;
}

export const InfiniteScroll = ({ callback, loading }: IInfiniteScrollProps) => {

    const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const { intersectionRatio: ratio } = entry;

            if(ratio > 0 && !loading) {
                callback();
            }
        }, { rootMargin: '5px' })

        if(divInfiniteScrollRef.current) {
            intersectionObserver.observe(divInfiniteScrollRef.current)
        }

        return () => {
            intersectionObserver.disconnect();
        }
    },[divInfiniteScrollRef])

    return (
        <div ref={divInfiniteScrollRef}/>
    )
}