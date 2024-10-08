import { Authors, Breadcrumbs, Categories, Subscribe } from '@/src/components/blocks';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authors Page',
};

const AuthorsPage = () => {
    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <Authors className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-6 sm:mt-0' />

            <Categories className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default AuthorsPage;
