import { StyledSocials } from "./styled/Socials.styled"
import SocialLink from "./SocialLink"

export default function Socials() {
    return (
        <StyledSocials>
            <SocialLink website="facebook" />
            <SocialLink website="instagram" />
            <SocialLink website="twitter" />
            <SocialLink website="youtube" />
        </StyledSocials>
    )
}