import { Helmet } from "react-helmet"
import {useState} from "react";


export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [buttonMsg, setButtonMsg] = useState('Send')

    const [response, setResponse] = useState();


    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();


        try {
            const res = await fetch('.netlify/functions/submit', {
                method: 'POST',
                body: JSON.stringify({firstName, lastName, email, message}),
            }).then((res) => res.json())
            setResponse(res);
            setButtonMsg("Email Sent!")

        } catch(e) {
            setButtonMsg("Could not send email. Please contact them directly.")
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')

        setTimeout(function() {
            setButtonMsg("Send")
        }, 5000)
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
                {/*<div className="contact--content-text">Gabe Spencer - (501) 764-6114 (SMS Preferred)</div>*/}
                {/*<div className="contact--content-text">Jake Britton - (940) 230-6120 (SMS Preferred)</div>*/}
            </div>

            {/*<form className="contact--form" action="https://submit-form.com/XyCS6cZd" method="post">*/}
            <form className="contact--form" onSubmit={handleSubmit}>

                <div className="label nameLabel">Name *</div>
                <div className="nameboxes">
                    <div className="name">
                        <input type="text"
                               name="firstName"
                               id=""
                               placeholder="First Name"
                               onChange={(e) => setFirstName(e.target.value)}
                               value={firstName}
                               required />
                        {/* <div className="namelabel">First Name</div> */}
                    </div>
                    <div className="name">
                        <input type="text"
                               name="lastName"
                               id=""
                               placeholder="Last Name"
                               onChange={(e) => setLastName(e.target.value)}
                               value={lastName}
                               required />
                        {/* <div className="namelabel">Last Name</div> */}
                    </div>
                </div>

                <div className="label">Email *</div>
                <input className="emailBox"
                       type="text"
                       name="email"
                       id=""
                       placeholder="example@email.com"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                       required />

                <div className="label">Message *</div>
                <textarea id="message"
                          name="message"
                          placeholder="Message"
                          rows={5}
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required></textarea>
                
                <button className="contact-button" type="submit">{buttonMsg}</button>
            
            </form>
        </div>
        </>
    )
}