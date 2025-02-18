'use client';
import Image from 'next/image';
import { EnumCard } from '@/src/types/enums';
import { useImageLoader } from '@/src/hooks';

import { Skeleton } from '../../ui';
import cn from 'classnames';

type Props = {
    type: string;
    src: string;
    alt: string;
};

const NewsCardImg: React.FC<Props> = ({ type, src, alt }) => {
    const { isOptimized, isLoading, hasError, handleLoad, handleError } = useImageLoader();

    return (
        <div
            className={cn(
                'relative block w-full h-0 pb-[65%] rounded-lg overflow-hidden border border-gray bg-gray last:mb-0',
                {
                    'lg:w-[40%] lg:pb-[32%] mb-4 lg:mb-0': type === EnumCard.small,
                    'mb-5': type === EnumCard.large,
                    'mb-4': type === EnumCard.default,
                }
            )}
        >
            {isLoading && !hasError && <Skeleton />}

            {src && !hasError && (
                <Image
                    src={src}
                    alt={alt}
                    sizes='100%'
                    priority
                    fill
                    className={cn(
                        'absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-75',
                        { invisible: isLoading }
                    )}
                    onLoad={handleLoad}
                    onError={handleError}
                    unoptimized={!isOptimized}
                />
            )}
        </div>
    );
};

export default NewsCardImg;
