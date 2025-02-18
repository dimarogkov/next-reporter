'use client';
import Link from 'next/link';
import { EnumAuthorInfo } from '@/src/types/enums';
import { PATHS } from '@/src/variables/paths';
import { useImageLoader } from '@/src/hooks';

import { Skeleton } from '../../ui';
import cn from 'classnames';
import Image from 'next/image';

type Props = {
    type: string;
    author: string;
    className?: string;
};

const AuthorAvatar: React.FC<Props> = ({ type, author, className = '' }) => {
    const { isOptimized, isLoading, hasError, handleLoad, handleError } = useImageLoader();

    return (
        <div
            className={cn(`avatar placeholder ${className}`, {
                'w-10 h-10 border-2': type === EnumAuthorInfo.light,
                'w-12 h-12': type === EnumAuthorInfo.dark,
            })}
        >
            <div className='w-full bg-gray'>
                {author && (
                    <Link
                        href={`${PATHS.AUTHORS}/${author}`}
                        className='absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-all duration-300 hover:scale-110 hover:brightness-90'
                    >
                        {isLoading && !hasError && <Skeleton />}

                        {!hasError && (
                            <Image
                                src={`https://avatar.iran.liara.run/public?username=${author}`}
                                alt={author}
                                sizes='100%'
                                fill
                                className={cn('absolute top-0 left-0 w-full h-full object-cover object-center', {
                                    invisible: isLoading,
                                })}
                                onLoad={handleLoad}
                                onError={handleError}
                                unoptimized={!isOptimized}
                            />
                        )}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default AuthorAvatar;
