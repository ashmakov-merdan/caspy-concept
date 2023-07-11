import { Form } from "../../components";
import "./contact.scss";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="content">
                    <h1 className="heading">Let's talk about your project</h1>
                </div>
                <div className="content">
                    <div className="address">
                        <h1 className="contact-heading">
                            1150 Angus Road
                            <br />
                            "Vestel" building
                            <br />
                            Columbus, Georgia
                        </h1>
                        <h3>Qatar represntative</h3>
                        <p>
                            Sonhan International,
                            <br />
                            <a href={'tel:+974 4001 1234'}>+974 4001 1234</a>
                            <br />
                            P. O Box 14325,
                            <br />
                            New Rayyan, Shafi str. Doha, Qatar.
                        </p>
                    </div>
                    <div className="contact">
                        <div className="form">
                            <h1 className="contact-heading">
                            <a href={'tel:+99312953421'}>+993 12 34 56 78</a>
                            <br/>
                            <a href={'mailto:info@caspy.biz'}>info@caspy.demo</a>
                            <br/>
                            <a href={'mailto:@caspy.concept'}>@caspy.concept.demo</a>
                            </h1>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;