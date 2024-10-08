'use client';
import { useEffect, useMemo, useState } from 'react';
import { EnumCard } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import { NewsCard } from '../elements/NewsCard';
import { Pagination } from '../elements/Pagination';
import { Subtitle } from '../ui';

type Props = {
    author: string;
    newsArr: INews[];
    className?: string;
};

const AuthorNews: React.FC<Props> = ({ author, newsArr, className = '' }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        return () => setCurrentPage(1);
    }, []);

    const slicedNews = useMemo(() => {
        const startItemNumber = currentPage * itemsPerPage - itemsPerPage;
        const endItemNumber = currentPage * itemsPerPage;

        return newsArr.slice(startItemNumber, endItemNumber);
    }, [currentPage, newsArr]);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='w-full pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-6 sm:mb-8 lg:mb-10 last:mb-0'>
                <Subtitle>News by {author}</Subtitle>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full mb-8 md:mb-10 lg:mb-12 last:mb-0'>
                {slicedNews.map((news) => (
                    <NewsCard news={news} cardType={EnumCard.large} key={crypto.randomUUID()} />
                ))}
            </div>

            <Pagination
                itemsLength={newsArr.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </section>
    );
};

export default AuthorNews;
