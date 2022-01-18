import { StyledEmailInput } from "./styled/EmailInput.styled"
import ic_arrow from "./media/ic_arrow.svg"
import { useRef, useState } from "react";
import SubscriptionSuccess from "./SubscriptionSuccess";

export default function SubscriptionBox() {
    const emailInput = useRef(null);
    const errorMessageArea = useRef(null);
    const checkboxRef = useRef(null);
    const [isFormSubmissionPermitted, setFormSubmissionPermission] = useState(false);
    const [isSubscriptionSuccessful, setSubscriptionSuccessful] = useState(false);

    // test if email input value matches the "mail@website.something" pattern
    const validateInputValue = newInputValue => new RegExp(/.*[@].*[.](?=.*[a-z])/g).test(newInputValue);

    function generateEmailInputErrorText() {
        const newInputValue = emailInput.current.value;
        if (!newInputValue) return "Email address ir required!";

        const isInputValueValid = validateInputValue(newInputValue), isInputValueInvalid = !isInputValueValid;
        if (isInputValueInvalid) return "Please provide a valid e-mail address!";

        const websitePlatfrom = newInputValue.split(".")[newInputValue.split(".").length - 1];
        if (websitePlatfrom === "co") return "We are not accepting subscriptions from Colombia emails!";

        if (!checkboxRef.current.checked) return "You must accept the terms and conditions";

        return "";
    }

    function updateInputBasedOnError() {
        const emailInputErrorText = generateEmailInputErrorText(), isEmailValid = emailInputErrorText === "";
        errorMessageArea.current.textContent = emailInputErrorText;
        /* If there is no error text returned, the email is valid. */
        setFormSubmissionPermission(isEmailValid);
    }

    if (isSubscriptionSuccessful) return (<SubscriptionSuccess />);

    return (
        <>
            <div className="header-main sub-heading-main" >
                Subscribe to newsletter
            </div>
            <div className="subheading sub-subheading">
                Subscribe to our newsletter and get 10% discount on pineapple glasses.
            </div>
            <div>
                <div className="emailInputWrapper">
                    <StyledEmailInput ref={emailInput} type="text" placeholder="Type your email address here..." onKeyUp={() => updateInputBasedOnError()} />
                    <div id="submit" onClick={() => { setSubscriptionSuccessful(true) }} style={{ display: isFormSubmissionPermitted ? "flex" : "none" }}><img src={ic_arrow} alt="submit an email to subscribe to the newsletter" /></div>
                    <div id="errorMessageArea" ref={errorMessageArea}>Email address ir required!</div>
                </div>
            </div>

            <div className="tos">
                <input ref={checkboxRef} onClick={() => updateInputBasedOnError()} type="checkbox" name="" id="agreeToTermsOfService" style={{ height: "26px", width: "26px", padding: "0", margin: "0" }} />
                <label for="agreeToTermsOfService" class="fas"></label>
                <span style={{ marginLeft: "15px" }}>I agree to <a href="#">terms of service</a></span>
            </div>
        </>
    )
}