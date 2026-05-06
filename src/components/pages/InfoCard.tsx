import React from "react";
import "../../styles/InfoCard.css";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  items,
}) => {
  return (
    <div className="info-card">
      <div className="info-card-icon">{icon}</div>
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
      <ul className="info-card-items">
        {items.map((item, index) => (
          <li key={index}>
            <span className="arrow">&rarr;</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
