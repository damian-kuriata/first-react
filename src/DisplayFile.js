import "./DisplayFile.css";
import {
    useState
} from "react";

export default function DisplayFile(props) {
    console.log(props);
    const fileContentsInitial = JSON.stringify(props.userData, null, 4);

    return (
        <article className="file-contents">
            <h2>Resulting file</h2>
            <textarea className="file-content display-block" readOnly={true}
                      value={fileContentsInitial}
            />
        </article>

    )
}