type SliderProps = {
    img: string,
    index: number,
    className: string
}

const SliderItem = ({img, index, className}: SliderProps) => {
    return <img className={className} src={img} alt={`carousel-${index}`}/>
};

export default SliderItem;