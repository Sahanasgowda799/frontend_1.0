import ButtonOne from '../Buttons/ButtonOne';
import TextComponentOne from '../Text/TextComponentOne';
import TextComponentTwo from '../Text/TextComponentTwo';

const HeroSection = () => {
    return (
        <div className="static">
            <img src="/assets/homePage/heroImage.jpg" className="opacity-45" />
            <div className="absolute top-[250px] left-[250px] w-[600px]">
                <TextComponentOne text="Step into Style: Your Ultimate Fashion Destination" additionalClassName="" />
                <TextComponentTwo
                    text="your final desitnanknjk dscjbaj cdsbdjbdc bjkxzcjks sbkjcsbjk your final desitnanknjk dscjbaj cdsbdjbdc bjkxzcjks sbkjcsbjk "
                    additionalClassName=""
                />
                <ButtonOne buttonText="Shop Now" additionalClassName="" />
            </div>
        </div>
    );
};

export default HeroSection;
