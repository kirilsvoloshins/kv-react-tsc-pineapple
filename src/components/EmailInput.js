// import { StyledEmailInput } from "./styled/EmailInput.styled"
// import ic_arrow from "./media/ic_arrow.svg"
// import React, { useRef } from "react";


// export default function EmailInput({ checkboxRef }) {
//     const errorMessageArea = useRef(null);

//     // test if email input value matches the "mail@website.something" pattern
//     const validateInputValue = newInputValue => new RegExp(/.*[@].*[.](?=.*[a-z])/g).test(newInputValue);

//     function generateEmailInputErrorText(e) {
//         const newInputValue = e.target.value;
//         if (!newInputValue) return "Email address ir required!";

//         const isInputValueValid = validateInputValue(newInputValue), isInputValueInvalid = !isInputValueValid;
//         if (isInputValueInvalid) return "Please provide a valid e-mail address!";

//         const websitePlatfrom = newInputValue.split(".")[newInputValue.split(".").length - 1];
//         if (websitePlatfrom === "co") return "We are not accepting subscriptions from Colombia emails!";

//         if (!checkboxRef.current.checked) return "You must accept the terms and conditions";

//         return "";
//     }

//     function updateInputBasedOnError(e) {
//         errorMessageArea.current.textContent = generateEmailInputErrorText(e);
//     }

//     return (
//         <div className="emailInputWrapper">
//             <StyledEmailInput type="text" name="" id="" placeholder="Type your email address here..." onKeyUp={(e) => updateInputBasedOnError(e)} />
//             <div id="submit"><img src={ic_arrow} alt="submit an email to subscribe to the newsletter" /></div>
//             <div id="errorMessageArea" ref={errorMessageArea}>Email address ir required!</div>
//         </div>
//     )
// }