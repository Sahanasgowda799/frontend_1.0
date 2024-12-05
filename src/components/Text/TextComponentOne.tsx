import React from 'react';

interface TextComponentOneProps {
    text: string;
    additionalClassName?: string;
}
const TextComponentOne: React.FC<TextComponentOneProps> = ({ text, additionalClassName }) => {
    return <div className={`text-6xl font-semibold ${additionalClassName}`}>{text}</div>;
};

export default TextComponentOne;
