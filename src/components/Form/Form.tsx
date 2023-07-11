import { services } from "../../static";

const Form = () => {
  return (
    <div className={'contactForm'}>
      <input placeholder={'Your name'} />
      <select>
        {services.map((service, index) => {
          return <option key={index}>{service.title}</option>
        })}
      </select>
      <textarea placeholder={'Message...'} rows={4}></textarea>
      <button>Send mail</button>
    </div>
  )
};

export default Form;