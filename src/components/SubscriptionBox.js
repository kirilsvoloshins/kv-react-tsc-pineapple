import EmailInput from "./EmailInput"

export default function SubscriptionBox() {
    return (
        <>
            <div className="header-main">
                Subscribe to newsletter
            </div>
            <div className="subheading" style={{ marginBottom: "50px" }}>
                Subscribe to our newsletter and get 10% discount on pineapple glasses.
            </div>
            <div>
                <EmailInput />
            </div>

            <div className="tos">
                <input type="checkbox" name="" id="" style={{ height: "26px", width: "26px", padding: "0", margin: "0" }} />
                <span style={{ marginLeft: "15px" }}>I agree to <a href="#">terms of service</a></span>
            </div>
        </>
    )
}