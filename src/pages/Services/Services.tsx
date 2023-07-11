import { services } from "../../static";
import "./services.scss";
import service from "../../assets/images/services.jpg";

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="content">
                    <img className="service-image" src={service} alt="service" />
                    <div className="services">
                        <h1 className="heading">We provide a full range of interior design services and prefer to be included in the project team the earliest stage.</h1>
                        <ul className="service-list">
                            { services.map((service, index) => {
                                return <li className="service-item" key={index}>{service.title}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;