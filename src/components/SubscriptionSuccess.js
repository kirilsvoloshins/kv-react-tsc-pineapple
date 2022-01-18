import ic_success from "./media/ic_success.svg"
import { StyledSubscriptionSuccess } from "./styled/SubscriptionSuccess.styled"

export default function SubscriptionSuccess() {
    return (
        <StyledSubscriptionSuccess>
            <div>
                <img src={ic_success} alt="Subscription is successful." />
            </div>
            <div className="header-main" style={{ marginTop: "30px" }}>
                Thanks for subscribing!
            </div>
            <div className="subheading" style={{ marginBottom: "50px" }}>
                You have successfully subscribed to our email listing. Check your email for the discount code.
            </div>
        </StyledSubscriptionSuccess>
    )
}