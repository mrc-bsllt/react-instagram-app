import { useState } from "react";
import "../css/FormCustom.css";

const FormCustom = ({ addComment, index }) => {
    const [textComment, setTextComment] = useState("")

    const preventDefault = (e) => {
        e.preventDefault();
        addComment(textComment, index);
        setTextComment("");
    }

    return (
        <div className="add_comment">
            <div className="emoji_container">
                <button>
                    <img src="img/icons/smile.svg" alt="smile icon"/>
                </button>
            </div>

            <div className="form_container">
                <form onSubmit={ preventDefault }>
                    <div className="text_comment">
                        <textarea value={ textComment } onChange={ (e) => setTextComment( e.target.value ) } placeholder="Aggiungi un commento..."></textarea>
                    </div>

                    <div className="send_comment">
                        <input type="submit" value="Pubblica"/>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCustom;