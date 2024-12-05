import React from 'react';

interface TextComponentTwoProps {
    text: string;
    additionalClassName?: string;
}
const TextComponentTwo: React.FC<TextComponentTwoProps> = ({ text, additionalClassName }) => {
    return <div className={`text-lg ${additionalClassName}`}>{text}</div>;
};

export default TextComponentTwo;
