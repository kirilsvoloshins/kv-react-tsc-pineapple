import ic_success from "./media/ic_success.png"

export default function SubscriptionSuccess() {
    return (
        <div className="success-container">
            <div>
                <img src={ic_success} alt="Subscription is successful." />
            </div>
            <div className="header-main success-heading-main">
                Thanks for subscribing!
            </div>
            <div className="subheading success-subheading">
                You have successfully subscribed to our email listing. Check your email for the discount code.
            </div>
        </div>
    )
}