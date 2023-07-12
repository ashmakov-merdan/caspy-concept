import Indicator from "../Indicator/Indicator";
import SliderItem from "./SliderItem";
import { carousel } from "../../static";
import "./slider.scss";
import { useEffect, useMemo, useState } from "react";

const VerticalSlider = () => {
    const [ images, setImage ] = useState(carousel);
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const lastIndex = images.length - 1;

        if(index < 0){
            setIndex(lastIndex);
        }

        if(index > lastIndex){
            setIndex(0);
        };
    }, [index, carousel]);

    const renderCarousel = useMemo(() => {
        return images && images.map((image, i) => {
            const { img } = image;

            let position = 'nextSlide';

            if(i === index){
                position = "activeSlide";
            }

            if(i === index - 1 || (index === 0 && i === images.length - 1)){
                position = 'lastSlide';
            }

            return <SliderItem className={`carousel-image ${position}`} key={i} img={img} index={i} />
        })
    }, [index, carousel]);

    return (
        <div className="slider">
            <div className="slider-wrapper">
                {renderCarousel}
                <Indicator pages={images} index={index} setIndex={setIndex}/>
            </div>
        </div>
    )
};

export default VerticalSlider;