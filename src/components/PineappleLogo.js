import { StyledPineappleLogo } from "./components/styled/PineappleLogo.styled"
import pineappleLogoImage from './media/pineapple_logo.png'

export default function PineappleLogo() {
    return (
        <StyledPineappleLogo>
            <img src={pineappleLogoImage} alt="pineapple. logo"
                style={{ width: "25px", height: "40px", marginRight: "15px" }} />
            pineapple.
        </StyledPineappleLogo>
    )
}
