'use client';
import React, { Suspense, useMemo } from 'react';
import Link from 'next/link';
import { capitalizeFirstLetter, getFixedName } from '@/src/helpers';
import { usePathname } from 'next/navigation';

import { Text } from '../ui';
import { ChevronRight } from 'lucide-react';

type Props = {
    className?: string;
};

const Breadcrumbs: React.FC<Props> = ({ className = '' }) => {
    const paths = usePathname();

    const pathNames = paths
        .split('/')
        .filter((path) => path)
        .map((path, index, arr) => ({
            id: crypto.randomUUID(),
            href: `/${arr.slice(0, index + 1).join('/')}`,
            text: capitalizeFirstLetter(getFixedName(path)),
        }));

    const breadcrumbs = useMemo(
        () => [{ id: crypto.randomUUID(), href: '/', text: 'Home' }, ...pathNames],
        [pathNames]
    );

    return (
        <Suspense fallback={null}>
            <section className={`relative hidden sm:block w-full ${className}`}>
                <ul className='flex items-center gap-1 w-full'>
                    {breadcrumbs.map(({ id, href, text }, index) => (
                        <li key={id}>
                            {breadcrumbs.length - 1 !== index ? (
                                <Link href={href} className='flex items-center line-clamp-1 hover:underline'>
                                    <span>{text}</span>

                                    <ChevronRight className='w-5 min-w-5 h-5 stroke-1 text-black' />
                                </Link>
                            ) : (
                                <Text className='line-clamp-1 text-red'>{text}</Text>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </Suspense>
    );
};

export default Breadcrumbs;
