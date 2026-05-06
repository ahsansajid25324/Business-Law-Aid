import "../../styles/OtherHero.css";

interface Stat {
  number: string;
  label: string;
}

interface OtherHeroProps {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;

  stats?: Stat[];
}

const OtherHero = ({
  subtitle,
  title,
  description,
  backgroundImage,
  stats,
}: OtherHeroProps) => (
  <>
    <div
      className="other-landing-container"
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat`,
        backgroundColor: "rgba(10, 61, 61, 1)",
      }}
    >
      <div className="container px-0  other-hero-section">
        <div className="subtitle-with-line flex-column ">
          <div className="d-flex align-items-center">
            {" "}
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">{subtitle}</span>
            <span className="subtitle-line"></span>
          </div>
          <h1 className="text-center">{title}</h1>
          <p className="text-center">{description}</p>
        </div>

        <div className="other-stats text-center justify-content-center">
          {stats?.map((stat, index) => (
            <div key={index}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default OtherHero;
