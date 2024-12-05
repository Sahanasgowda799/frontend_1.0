interface ButtonOneProps {
    buttonText: string;
    isFilled?: boolean;
    withIcon?: boolean;
    additionalClassName?: string;
}

const ButtonOne: React.FC<ButtonOneProps> = ({ buttonText, isFilled, withIcon, additionalClassName }) => {
    return (
        <>
            <button className={`flex bg-BackgroundColorOne${additionalClassName}`}>
                {buttonText}
                <img src="/assets/icons/rightArrow.svg" width="24" height="12" />
            </button>
        </>
    );
};

export default ButtonOne;
