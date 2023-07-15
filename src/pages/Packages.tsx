import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function Packages() {
    return (
        <>
        <Helmet>
            <title>ASND Media - Packages</title>
        </Helmet>

        <div className="content header boost--header">Boost Packages</div>


        <div className="boost-wrapper">    
            <div className="content boost--content">
                <div className="boost--content-subheader">Starter Boost - <Link to="/contact" className="contact-link"><span className="red underline">Contact Us</span></Link></div>
                <ul>
                    <li>Available regardless of current social media status.</li>
                    <li>Social Media Remodeling/Custom Tailoring<span className="red">*</span></li>
                    <li>Proactive Social Media Management & Engagement</li>
                    <li>3 Social Media Posts</li>
                    <li>Professional Photography of Business & Products</li>
                    <li>Custom Ad Campaign<span className="red">**</span> (Optional)</li>
                    <li>Reach Local Audiences</li>
                    <li>Optional in-person promos/giveaways</li>
                </ul>

                <div className="red subtext">*Final Price May Vary. If social media accounts need to be created, the first account will be charged at base price, with every other account extra charged at lower amount/account</div>
                <div className="red subtext">**Paid/Boosted Ad Campaigns Charged Separately - <Link to="/contact" className="contact-link"><span className="underline">Contact Us</span></Link></div>
            </div>

            <div className="content boost--content">
                <div className="boost--content-subheader">Monthly Boost - <Link to="/contact" className="contact-link"><span className="red underline">Contact Us</span></Link></div>
                <ul>
                    <li>Cost reliant on performance</li>
                    <li>Proactive Social Media Posting & Management</li>
                    <li>Professional Photography & Archiving</li>
                    <li>Custom Ad Campaign Tailoring, Targeting, & Optimizing</li>
                    <li>SEO for Websites & Social Media</li>
                    <li>Holiday & Special Event Media/Graphics Creation</li>
                    <li>Optional in-person promos/giveaways/event setups</li>
                    <li>Custom progress reports & Portfolio</li>
                    <li>Inclusion in ASND Media Promotional Posts</li>
                </ul>
            </div>

            <div className="content boost--content">
                <div className="boost--content-subheader">Website Boost - <Link to="/contact" className="contact-link"><span className=" red underline">Contact Us</span></Link></div>
                <ul>
                    <li>Price Quoted per Business & Scope of Work</li>
                    <li>Custom Website Creation/Management</li>
                    <li>Options include: </li>
                    <ul>
                        <li>Online Shops</li>
                        <li>Bookings Page</li>
                        <li>Business/Personal Portfolios</li>
                        <li>Contact/Directions Page</li>
                        <li>Staffing Photos/About Page</li>
                        <li>& More</li>
                    </ul>
                    <li>Proactive Website Management & Customer Support</li>
                    <li>Custom Tailored Graphics & Photography</li>
                </ul>
            </div>
        </div>
        </>
    )
}