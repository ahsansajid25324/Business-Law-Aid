import { Mail, Phone, MapPin } from "lucide-react";
import "../../styles/SemiContact.css";

const SemiContact = () => {
  const semicontact = [
    {
      icon: <Mail />,
      title: "Email Us",
      description: "info@law-aid.org",
      quote: "Our consulting team typical responds within 24 business hours.",
    },
    {
      icon: <Phone />,
      title: "Call Our Office",
      description: "+1 (346) 547-5427",
      quote: "Monday – Friday, 10:00 AM – 5:00 PM CST",
    },
    {
      icon: <MapPin />,
      title: "Our Headquarters",
      description: "Houston, Texas",
      quote: "11011 Richmond Ave, Suite 820, Houston, TX 77042",
    },
  ];

  return (
    <section className="semicontact-section">
      <div className="container px-0 semicontact-content">
        <div className="semicontact-cards-grid">
          {semicontact.map((item, index) => (
            <div key={index} className="semicontact-card">
              <div className="semicontact-icon">{item.icon}</div>
              <h3 className="semicontact-card-title">{item.title}</h3>
              <p className="semicontact-card-description">
                {item.description}
              </p>
              {item.quote && <p className="semicontact-card-quote">{item.quote}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemiContact;