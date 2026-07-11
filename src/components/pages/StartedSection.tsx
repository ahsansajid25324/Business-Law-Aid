import "../../styles/StartedSection.css";
import "../../styles/HeroSection.css";
interface StartedSectionProps {
  title: string;
  subtitle: string;
}

const StartedSection = ({ title, subtitle }: StartedSectionProps) => {
  return (
    <section className="started-section">
      <div className="container px-0 started-content">
        <div className="set-started">
          <div className="subtitle-with-line">
            <span className="subtitle-line"></span>
            <span className="subtitle subtitle-right">GET STARTED</span>
            <span className="subtitle-line"></span>
          </div>{" "}
          <h2 className="main-heading text-white">{title}</h2>
          <p className="started-description text-white">{subtitle}</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <button className="btn-outline">Start an Inquiry</button>
          <button className="btn-solid">Request Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default StartedSection;
