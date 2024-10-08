import { Skeleton } from '../../ui';

const HeroSkeleton: React.FC = () => {
    return (
        <div className='relative w-full'>
            <div className='relative w-20 h-6 lg:h-7 mb-4 last:mb-0'>
                <Skeleton />
            </div>

            <div className='relative w-[75%] md:w-[65%] h-8 lg:h-10 mb-4 last:mb-0'>
                <Skeleton />
            </div>

            <div className='relative flex flex-wrap gap-2 w-full mb-4 last:mb-0'>
                <div className='relative w-full md:w-[90%] h-4'>
                    <Skeleton />
                </div>
                <div className='relative w-full md:w-[90%] h-4'>
                    <Skeleton />
                </div>
                <div className='relative w-[85%] md:w-[80%] h-4'>
                    <Skeleton />
                </div>
            </div>

            <div className='relative w-32 h-8 lg:h-10'>
                <Skeleton />
            </div>
        </div>
    );
};

export default HeroSkeleton;
