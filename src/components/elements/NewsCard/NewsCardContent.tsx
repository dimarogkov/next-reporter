import { EnumCard, EnumText } from '@/src/types/enums';
import DateInfo from '../DateInfo';
import { Subtitle, Text } from '../../ui';
import cn from 'classnames';

type Props = {
    type: string;
    title: string;
    summary: string;
    date: string;
    className?: string;
};

const NewsCardContent: React.FC<Props> = ({ type, title, summary, date, className = '' }) => {
    return (
        <div
            className={cn(`w-full ${className}`, {
                'flex-grow': type === EnumCard.large,
            })}
        >
            {(type === EnumCard.default || type === EnumCard.small) && (
                <>
                    <DateInfo date={date} className='mb-3 last:mb-0' />

                    <Text textSize={EnumText.large} className='font-medium group-hover:underline'>
                        {title}
                    </Text>
                </>
            )}

            {type === EnumCard.large && (
                <>
                    <Subtitle className=' group-hover:underline mb-3 last:mb-0'>{title}</Subtitle>
                    <Text textSize={EnumText.large}>{summary}</Text>
                </>
            )}
        </div>
    );
};

export default NewsCardContent;
