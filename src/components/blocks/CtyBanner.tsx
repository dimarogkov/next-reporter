import { EnumBtn, EnumSocials } from '@/src/types/enums';
import { BtnLink, Subtitle, Text } from '../ui';
import { Socials } from '../elements';

type Props = {
    className?: string;
};

const CtyBanner: React.FC<Props> = ({ className = '' }) => {
    return (
        <section
            className={`relative flex items-center w-full p-5 md:p-10 rounded-md overflow-hidden bg-red ${className}`}
        >
            <div className='w-full'>
                <Subtitle className='text-white mb-3 xl:mb-4 last:mb-0'>Imagine your ad hear</Subtitle>

                <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 w-full'>
                    <div className='w-full'>
                        <Text className='text-white mb-5 last:mb-0'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, assumenda vel rem
                            voluptas, dignissimos animi voluptate repudiandae neque impedit obcaecati amet recusandae
                            expedita itaque rerum nulla nobis dolores eos dicta?
                        </Text>

                        <BtnLink href='/about-us' btnType={EnumBtn.darkWithIcon}>
                            About Us
                        </BtnLink>
                    </div>

                    <div className='w-full'>
                        <Text className='text-white mb-5 last:mb-0'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, assumenda vel rem
                            voluptas, dignissimos animi voluptate repudiandae neque impedit obcaecati amet
                        </Text>

                        <Socials type={EnumSocials.light} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtyBanner;
