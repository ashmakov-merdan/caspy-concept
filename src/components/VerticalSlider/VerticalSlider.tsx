import Carousel from "react-elastic-carousel";
import Indicator from "../Indicator/Indicator";
import SliderItem from "./SliderItem";
import { carousel } from "../../static";
import "./slider.scss";

const VerticalSlider = () => {
    const width = window.innerWidth;

    return (
        <div className="slider">
            <Carousel
                verticalMode={true}
                itemsToShow={1}
                initialActiveIndex={0}
                showArrows={false}
                enableSwipe={width < 425 ? true : false}
                renderPagination={({pages, activePage, onClick}) => {
                    return <Indicator pages={pages} active={activePage} onClick={onClick} />
                }}
            >
                {
                    carousel.map((image, i) => {
                        const { img } = image;
                        return <SliderItem key={i} img={img} index={i} />
                    })
                }
            </Carousel>
        </div>
    )
};

export default VerticalSlider;