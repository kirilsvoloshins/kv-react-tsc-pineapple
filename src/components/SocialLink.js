import { StyledSocialLink } from "./styled/StyledSocialLink.styled"
import ic_instagram from "./media/ic_instagram.svg"
import ic_facebook from "./media/ic_facebook.svg"
import ic_twitter from "./media/ic_twitter.svg"
import ic_youtube from "./media/ic_youtube.svg"

export default function SocialLink({ website }) {
    return (
        <StyledSocialLink website={website}>
            {website === "instagram" ? <img src={ic_instagram} alt="instagram" /> : ''}
            {website === "twitter" ? <img src={ic_twitter} alt="twitter" /> : ''}
            {website === "facebook" ? <img src={ic_facebook} alt="twitter" /> : ''}
            {website === "youtube" ? <img src={ic_youtube} alt="twitter" /> : ''}
        </StyledSocialLink>
    );
}
