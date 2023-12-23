import { BsBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from '/images/phone-features.png';
import './Features.css';
import Feature from "./Feature";
import { featureList } from "./data";

const Features = () => {
    return (
        <section id="features">
            <div className="container features">
                <div className="u-title">
                    <BsBookmarkStarFill color="orangered" size={30} />
                    <h2>Core Features</h2>
                    <p className="u-text-small u-text-dark">
                        SocialX Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium doloremque laudantium.
                    </p>
                </div>

                <div className="features-content">
                    <div className="features-left">
                        <img src={phoneFeatures} alt="phone" />
                    </div>

                    <div className="features-right">
                        {
                            featureList.map((feature) => (
                                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;