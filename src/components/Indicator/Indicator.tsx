import "./indicator.scss";

type IndicatorProps = {
    pages: {
        img: string
    }[],
    index: number,
    setIndex: any
}

const Indicator = ({pages, index, setIndex}: IndicatorProps) => {

    const handleChange = (i: number, img: string) => {
        setIndex(i);
    }
    return (
        <div className="indicator">
            {
                pages.map((page, i) => {
                    const { img } = page;
                    const isActivePage = i === index;
                    return <button key={i} style={{opacity: isActivePage ? '100%' : '50%'}} onClick={() => handleChange(i, img)}>0{i + 1}</button>
                })
            }
        </div>
    )
};

export default Indicator;