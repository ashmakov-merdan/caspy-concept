type SliderProps = {
    img: string,
    index: number
}

const SliderItem = ({img, index}: SliderProps) => {
    return <img className="carousel-image" src={img} alt={`carousel-${index}`}/>
};

export default SliderItem;