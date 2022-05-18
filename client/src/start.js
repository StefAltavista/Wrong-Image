import ReactDOM from "react-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Main from "./main";
import Glitches from "./glitches.js";
import PerlinNoise from "./perlinNoise.js";

ReactDOM.render(
    <div>
        <ReactP5Wrapper sketch={PerlinNoise} />
    </div>,
    document.querySelector("main")
);

// ReactDOM.render(
//     <div>
//         <ReactP5Wrapper sketch={Glitches} />
//     </div>,
//     document.querySelector("main")
// );

//ReactDOM.render(<Main />, document.querySelector("main"));
