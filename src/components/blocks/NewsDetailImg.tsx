'use client';
import Image from 'next/image';
import { useImageLoader } from '@/src/hooks';
import { Skeleton } from '../ui';
import cn from 'classnames';

type Props = {
    src: string;
    alt: string;
};

const NewsDetailImg: React.FC<Props> = ({ src, alt }) => {
    const { isOptimized, isLoading, hasError, handleLoad, handleError } = useImageLoader();

    return (
        <>
            {isLoading && !hasError && <Skeleton />}

            {!hasError && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={cn('absolute top-0 left-0 w-full h-full object-cover object-center brightness-50', {
                        invisible: isLoading,
                    })}
                    onLoad={handleLoad}
                    onError={handleError}
                    unoptimized={!isOptimized}
                />
            )}
        </>
    );
};

export default NewsDetailImg;
