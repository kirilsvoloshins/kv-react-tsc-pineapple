import { StyledEmailInput } from "./styled/EmailInput.styled"
import ic_arrow from "./media/ic_arrow.svg"

export default function EmailInput() {
    return (
        <div className="emailInputWrapper">
            <StyledEmailInput type="text" name="" id="" placeholder="Type your email address here..." />
            <div id="submit"><img src={ic_arrow} /></div>
        </div>
    )
}