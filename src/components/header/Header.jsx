import phone from '/images/phone-header-bg.png';
import './Header.css';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';

const Header = () => {
    return (
        <section id="header">
            <div className="container header">
                <div className="header-left">
                    <h1>
                        <span>The World's Leading</span>
                        <span>Cross-platform Secure</span>
                        <span>Messaging System</span>
                    </h1>

                    <p>
                    SocialX is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="header-cta">
                        <Button text='Get Started' btnClass='btn-dark' href='#faq' />
                        <Button text='How it Works' btnClass='btn-orange' href='#faq' />
                    </div>
                </div>

                <div className="header-right"></div>
            </div>
        </section>
    )
}

export default Header;