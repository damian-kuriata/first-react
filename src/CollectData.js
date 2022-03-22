import "./CollectData.css";
import {
    useState,
    useRef, useEffect
} from "react";
import {
    useNavigate
} from "react-router-dom";

export default function CollectData (props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(null);
    const [sex, setSex] = useState(null); // Allowed: ["man", "woman"]
    const [heightCm, setHeightCm] = useState(null);
    const [photo, setPhoto] = useState(null);
    let photoThumbnailRef = useRef(null);
    // Used to "click" input.
    let photoInputRef = useRef(null);


    const [married,setMarried] = useState(false);
    const [inEmployment, setInEmployment] = useState(null);
    const [profession, setProfession] = useState(null);

    const [briefAbout, setBriefAbout] = useState(null);

    useEffect(() => {
        // Initial code run
        initFromStorage();
    }, []);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);

        // Update photo thumbnail in form.
        const url = URL.createObjectURL(e.target.files[0]);
        console.log(url);
        photoThumbnailRef.current.style.backgroundImage = `url(${url})`;
    }

    const handleSelectClick = () => {
        console.log("click");
        photoInputRef.current.click();
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        alert("Data sucessfully saved");
        saveToStorage();
    };

    const saveToStorage = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            sex: sex,
            heightCm: heightCm,
            photo: photo,
            married: married,
            inEmployment: inEmployment,
            profession: profession,
            briefAbout: briefAbout
        };
        localStorage.setItem("data", JSON.stringify(data));
    };

    const initFromStorage = () => {
        const data = JSON.parse(localStorage.getItem("data") || -1);
        if (data === -1) {
            // Cancel init
            return;
        }
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setAge(data.age);
        setSex(data.sex);
        setHeightCm(data.heightCm);
        setPhoto(data.photo);
        setMarried(data.married);
        setInEmployment(data.inEmployment);
        setProfession(data.profession);
        setBriefAbout(data.briefAbout);
    }

    return (
        <article className="collect-data">
            <h2>Please enter your data</h2>
            <form id="collect-data-form">
                <fieldset>
                    <legend>Personal data</legend>
                    <div className="form-entry">
                        <label htmlFor="first-name">First name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                         />
                    </div>
                    <div className="form-entry">
                        <label htmlFor="last-name">Last name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-entry">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={age}
                            min={10}
                            max={100}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="form-entry">
                        <label htmlFor="sex">Sex</label>
                        <select
                            id="sex"
                            name="sex"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                        >
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                        </select>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="heightCm">Height</label>
                        <input
                            type="number"
                            min="100"
                            max="250"
                            id="heightCm"
                            name="heightCm"
                            value={heightCm}
                            onChange={(e) => setHeightCm(e.target.value)}
                        />
                    </div>
                    <div className="form-entry">
                        <label htmlFor="photo">Upload photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            id="photo"
                            name="photo"
                            value={undefined}
                            onChange={handlePhotoChange}
                            ref={photoInputRef}
                            style={{display: "none"}}
                        />
                        <button type="button"
                                id="file-select-btn"
                                onClick={handleSelectClick}>
                            Select file...
                        </button>
                        {/* Will be filled in JavaScript */}
                        <div className="photo-thumbnail" style={{width: "500px", height: "300px"}} ref={photoThumbnailRef}>
                            {/* background will be set in JS*/}
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Status data</legend>
                    <div className="form-entry" >
                        <label htmlFor="married">Married:</label>
                        <input type="checkbox"
                               name="married"
                               id="married"
                               checked={married}
                               onChange={(e) => setMarried(e.target.checked)}
                        />

                    </div>
                    <div className="form-entry">
                        <label htmlFor="inEmployment">Employed:</label>
                        <input
                            type="checkbox"
                            name="inEmployment"
                            id="inEmployment"
                            checked={inEmployment}
                            onChange={(e) => setInEmployment(e.target.checked)}
                        />
                    </div>
                    <div className="form-entry">
                        <label htmlFor="profession">Profession:</label>
                        <input
                            type="text"
                            name="profession"
                            id="profession"
                            value={profession}
                            onChange={(e) => setProfession(e.target.checked)}
                        />
                    </div>
                    <div className="form-entry">
                        <label htmlFor="brief-about">Brief about:</label>
                        <textarea
                            name="brief-about"
                            id="brief-about"
                            value={briefAbout}
                            onChange={(e) => setProfession(e.target.value)}
                        />
                    </div>
                </fieldset>
                <input type="submit" value="Submit" onClick={handleSubmitClick}/>
            </form>
        </article>
    );
}