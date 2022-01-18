import ic_success from "./media/ic_success.png"

export default function SubscriptionSuccess() {
    return (
        <div style={{ marginTop: "128px" }}>
            <div>
                <img src={ic_success} alt="Subscription is successful." />
            </div>
            <div className="header-main" style={{ marginTop: "26px" }}>
                Thanks for subscribing!
            </div>
            <div className="subheading" style={{ marginTop: "21px", marginBottom: "50px" }}>
                You have successfully subscribed to our email listing. Check your email for the discount code.
            </div>
        </div>
    )
}