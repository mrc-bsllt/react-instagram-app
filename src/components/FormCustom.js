import "../css/FormCustom.css";

const FormCustom = () => {
    return (
        <div className="add_comment">
            <div className="emoji_container">
                <button>
                    <img src="img/icons/smile.svg" alt="smile icon"/>
                </button>
            </div>

            <div className="form_container">
                <form>
                    <div className="text_comment">
                        <textarea placeholder="Aggiungi un commento..."></textarea>
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