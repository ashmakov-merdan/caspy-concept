import Carousel from "react-elastic-carousel";
import Indicator from "../Indicator/Indicator";
import SliderItem from "./SliderItem";
import { carousel } from "../../static";
import "./slider.scss";
import { useMemo } from "react";

const VerticalSlider = () => {
    const renderCarousel = useMemo(() => {
        return carousel && carousel.map((image, i) => {
            const { img } = image;
            return <SliderItem key={i} img={img} index={i} />
        })
    }, [carousel])

    return (
        <div className="slider">
            <Carousel
                verticalMode={true}
                itemsToShow={1}
                initialActiveIndex={0}
                showArrows={false}
                enableSwipe={false}
                renderPagination={({pages, activePage, onClick}) => {
                    return <Indicator pages={pages} active={activePage} onClick={onClick} />
                }}
            >
                {renderCarousel}
            </Carousel>
        </div>
    )
};

export default VerticalSlider;