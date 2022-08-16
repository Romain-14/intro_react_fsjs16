// rfce + tabulation --> ça va créer un template basé sur le nom du fichier
// rfce pour React Functionnal Component Export default

import React from "react";
import InternalLink from "../ui/InternalLink";

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>Welcome to hooks intro</h1>
            <nav>
                <InternalLink text="/"/>
                <InternalLink text="blog"/>
                <InternalLink text="contact"/>
            </nav>
        </header>
    );
}

export default Header;
