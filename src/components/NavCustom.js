import "../css/NavCustom.css";
import SearchInput from "./SearchInput";
import Icons from "./Icons";

const NavCustom = () => {
    return (
        <header className="top_header">
            <div className="container">
                <div className="left">
                    <a href="http://localhost:3000">
                        <img src="img/logo_text.png" alt="logo text" className="logo"/>
                    </a>
                </div>
                <div className="center">
                    <SearchInput />
                </div>
                <div className="right">
                    <section className="icons">
                        <Icons />
                    </section>

                    <section className="profile_img">
                        <img src="img/profilo.jpg" alt="foto_profilo"/>
                    </section>
                </div>
            </div>
        </header>
    )
}

export default NavCustom;