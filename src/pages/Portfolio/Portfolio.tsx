import { Grid } from "../../components";
import "./portfolio.scss";
import { projects } from "../../static";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="content">
                    <div className="portfolio-heading">
                        <h1 className="heading">Our projects</h1>
                    </div>
                </div>
            </div>
            <Grid projects={projects} />
        </section>
    )
};

export default Portfolio;