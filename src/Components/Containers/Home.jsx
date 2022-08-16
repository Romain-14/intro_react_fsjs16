
// utilisation d'un state hooks
// NB: les states ont une portée locale
// NB2 : les props se transmettent de parent à enfant

import { useState } from "react";

function Home({alias}) {

    const [nbr, setNbr] = useState(0);

    return (
        <main>
            {/* attention au nommage pour l'attribut de class --> className */}
            <h2 className="">Welcome to the h2 !!!</h2>
            {/* pareil ici pour l'attribut for qui en jsx devient htmlFor */}
            <label htmlFor="cat">label</label>
            <input type="radio" name="" id="cat" />

            {/* <p>Wesh {props.alias}</p> */}
            <p>Wesh {alias}</p>

            <p>{nbr}</p>
            <button onClick={() => setNbr((previous) => previous + 1)}>
                + 1
            </button>
        </main>
    );
}

export default Home;
