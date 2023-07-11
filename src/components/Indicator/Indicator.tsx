import "./indicator.scss";

type IndicatorProps = {
    pages: number[],
    active: number,
    onClick: (indicatorId: number) => void
}
const Indicator = ({pages, active, onClick}: IndicatorProps) => {
    return (
        <div className="indicator">
            { pages.map((page) => {
                const isActivePage: boolean = active === page;
                return (
                    <button key={page} onClick={() => onClick(page)} style={{opacity: isActivePage ? '100%' : '50%'}}>0{page + 1}</button>
                )
            })}
        </div>
    )
};

export default Indicator;