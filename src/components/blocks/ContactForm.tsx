type Props = {
    className?: string;
};

const ContactForm: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={`relative w-full ${className}`}>
            <div></div>
        </section>
    );
};

export default ContactForm;
