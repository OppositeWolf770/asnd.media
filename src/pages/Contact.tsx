import { Helmet } from "react-helmet"
import {useState} from "react";


export default function Contact() {
    const [responseText, setResponseText] = useState("Hello!")

    async function handleClick() {
        const response = await fetch('/.netlify/functions/pokedex')
            .then(response => response.json())

        setResponseText(JSON.stringify(response));
    }


    return(
        <>
        <Helmet>
            <title>ASND Media - Contact Us</title>
        </Helmet>
        
        <div className="contact--wrapper">
            <div className="contact--content">
                <div className="contact--content-heading">Contact us.</div>
                <div className="contact--content-text">asndmediacontact@gmail.com</div>
                <div className="contact--content-text">Gabe Spencer - (501) 764-6114 (SMS Preferred)</div>
                <div className="contact--content-text">Jake Britton - (940) 230-6120 (SMS Preferred)</div>
            </div>

            <form className="contact--form" action="https://submit-form.com/XyCS6cZd" method="post" data-netlify="true">
                
                <div className="label nameLabel">Name *</div>
                <div className="nameboxes">
                    <div className="name">
                        <input type="text" name="firstName" id="" placeholder="First Name" required />
                        {/* <div className="namelabel">First Name</div> */}
                    </div>
                    <div className="name">
                        <input type="text" name="lastName" id="" placeholder="Last Name" required />
                        {/* <div className="namelabel">Last Name</div> */}
                    </div>
                </div>

                <div className="label">Email *</div>
                <input className="emailBox" type="text" name="email" id="" placeholder="example@email.com" required />

                <div className="label">Message *</div>
                <textarea id="message" name="message" placeholder="Message" rows={5} required></textarea>
                
                <button type="submit">Send</button>
            
            </form>
        </div>

        <button onClick={handleClick}>Click Me!</button>

        <div style={{color: "white"}}>{responseText}</div>
        </>
    )
}