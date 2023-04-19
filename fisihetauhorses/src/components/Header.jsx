

export default function Header(){
    return (
        
        <header>
            <div className="header_container">
               


                <div className="title_container">
                    <h1 className ="main_title">Fisihetau Horses</h1>
                    <i className="fa-solid fa-horse fa-lg"></i>
                </div>
                <a className="main_phone" href="tel:111-111-1111">111-111-1111</a>
            </div>
            
            
            <div className="drop_down">
            <i className="fa-solid fa-bars"></i>
                <div className="drop_down_content">
                    <a href="#experience">The Experience</a>
                    <br></br>
                    <a href="">Contact</a>
                </div>
                        
                </div>
            
        </header>

    )
    }