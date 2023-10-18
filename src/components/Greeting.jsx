// import { unstable_renderSubtreeIntoContainer } from "react-dom";

// import Introduction from "./introduction";
const Greeting = () => {
    const username = ["Phe-me", "Lhammy", "Omo werey", "Onigbo Lekki"];
    return (
        <div className="container">
            <h1>Welcome to GoMyCode</h1>
            <p>We are happy to see you</p>
            <img src="public/images/rr logo.jpg" alt="rolls royce logo" />
            <ul>
                {username.map((el, index) => {
                   return <li key={index}>{el}</li>
                })}
            </ul>
        </div>
    )
}

export default Greeting;