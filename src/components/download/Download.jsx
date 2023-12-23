import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import './Download.css';

const Download = () => {
    return (
        <section id="download">
            <div className="container download">
                <h2>SOCIALX MESSENGER DOWNLOAD</h2>
                <p className="u-text-small u-text-light">
                    Our apps are available for download on all stores.
                </p>

                <IconContext.Provider value={{ size: '15' }}>
                    <div className="download-icons">
                        <div className="download-icon">
                            <FaApple />
                            <p>ios</p>
                        </div>
                        <div className="download-icon">
                            <GrAndroid />
                            <p>ios</p>
                        </div>
                        <div className="download-icon">
                            <FaWindows />
                            <p>ios</p>
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </section>
    )
}

export default Download;