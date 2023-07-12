import "./indicator.scss";

type IndicatorProps = {
    pages: {
        img: string
    }[],
    index: number,
    setIndex: any
}

const Indicator = ({pages, index, setIndex}: IndicatorProps) => {

    const handleChange = (i: number) => {
        setIndex(i);
    }
    return (
        <div className="indicator">
            {
                pages.map((_, i) => {
                    const isActivePage = i === index;
                    return <button key={i} style={{opacity: isActivePage ? '100%' : '50%'}} onClick={() => handleChange(i)}>0{i + 1}</button>
                })
            }
        </div>
    )
};

export default Indicator;