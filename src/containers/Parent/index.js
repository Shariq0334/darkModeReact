import { useState, } from "react";
import Child1 from "../Child1";
import Theme from "../../context";
import { MyContext } from '../../context';

function Parent() {
    const [style, setStyle] = useState("card")
    return (
       
            <Theme.Provider value={[style, setStyle]} >
                <div>
                    <h1>Parent</h1>
                    <Child1 />
                </div>
            </Theme.Provider>
    
    )
}

export default Parent;