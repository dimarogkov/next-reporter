import { HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    className?: string;
}

const Badge: React.FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => (
    <span ref={ref} {...props} className={`relative text-sm px-3 py-1.5 rounded bg-red text-white ${className}`} />
));

Badge.displayName = 'Badge';
export default Badge;
