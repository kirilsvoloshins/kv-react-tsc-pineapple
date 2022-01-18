import { StyledPineappleLogo } from "./styled/PineappleLogo.styled"
import companyLogo from './media/companyLogo.png'

export default function PineappleLogo() {
    return (
        <StyledPineappleLogo>
            <img src={companyLogo} alt="pineapple. logo" />
        </StyledPineappleLogo>
    )
}
