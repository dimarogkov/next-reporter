import Link from 'next/link';
import { PATHS } from '@/src/variables/paths';
import { CalendarDays } from 'lucide-react';

type Props = {
    date: string;
    className?: string;
};

const DateInfo: React.FC<Props> = ({ date, className = '' }) => {
    return (
        <Link
            href={`${PATHS.SEARCH}?publish_date=${date}`}
            className={`relative flex items-center gap-2 w-fit rounded px-2.5 py-1.5 bg-gray transition-all duration-300 hover:brightness-90 ${className}`}
        >
            <CalendarDays className='w-5 h-5 text-black' />
            <span className='text-sm'>{date}</span>
        </Link>
    );
};

export default DateInfo;
