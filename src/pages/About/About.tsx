import { Helmet } from 'react-helmet'

export default function About() {
    return (
        <>
        <Helmet>
            <title>ASND Media - About Us</title>
        </Helmet>

        <div className="content about--header">About Us</div>
        <div className="content about--content">
            <div className="about--content-subheader">Professional. Experienced. Approachable.</div>
            <p className="about--content-text">Founded in 2022, ASND Media is a digital marketing company created to support local business through advancing technology. Our priority is to further your business with media management to reach new heights.</p>
            <p className="about--content-text">At ASND Media, we assist you in reaching a larger audience through business profile remodeling. Our services include: Professional Photography, Media Management Setup, and Exclusive Profile Graphics with Resources.</p>
            <p className="about--content-text">Our goal to make a difference in our community begins with two people. Local businesses deserve the opportunity to boost exposure through advancing technology. Working together, we can help you reach new heights.</p>
        </div>

        <div className="about--Profiles">
            <img className="about--profile" src="\assets\bee_assets\bee_jake.jpg" alt=""></img>
            <img className="about--profile" src="\assets\bee_assets\bee_gabe.jpg" alt=""></img>
        </div>
        </>
    )
}