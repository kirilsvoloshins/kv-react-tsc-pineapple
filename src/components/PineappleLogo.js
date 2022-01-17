import { StyledPineappleLogo } from "./styled/PineappleLogo.styled"
import pineappleLogoImage from './media/pineapple_logo.png'

export default function PineappleLogo() {
    return (
        <StyledPineappleLogo>
            <img src={pineappleLogoImage} alt="pineapple. logo"
                style={{ width: "25px", height: "40px", marginRight: "15px" }} />
            <span style={{ marginTop: "10px" }}>
                pineapple.
            </span>
        </StyledPineappleLogo>
    )
}
