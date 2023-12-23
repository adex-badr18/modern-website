import './Faq.css';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Question from './Question';
import { questions } from './data';

const Faq = () => {
    return (
        <section id="features">
            <div className="container features">
                <div className="u-title">
                    <MdOutlineLibraryBooks color="orangered" size={30} />
                    <h2>FAQS</h2>
                    <p className="u-text-small u-text-dark">
                        SocialX Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium doloremque laudantium.
                    </p>
                </div>

                <div className="questions">
                    {
                        questions.map(question => (
                            <Question key={question.id} title={question.title} answer={question.answer} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq;