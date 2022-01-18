import { StyledSocialLink } from "./styled/StyledSocialLink.styled"
import ic_instagram from "./media/ic_instagram.svg"
import ic_facebook from "./media/ic_facebook.svg"
import ic_twitter from "./media/ic_twitter.svg"
import ic_youtube from "./media/ic_youtube.svg"
import ic_instagram_white from "./media/ic_instagram_white.svg"
import ic_facebook_white from "./media/ic_facebook_white.svg"
import ic_twitter_white from "./media/ic_twitter_white.svg"
import ic_youtube_white from "./media/ic_youtube_white.svg"
import { useRef } from 'react';

function getImageSource({ website, isHovered = false }) {
    if (website === "instagram") {
        if (isHovered) return ic_instagram_white;
        return ic_instagram;
    }
    if (website === "twitter") {
        if (isHovered) return ic_twitter_white;
        return ic_twitter;
    }
    if (website === "facebook") {
        if (isHovered) return ic_facebook_white;
        return ic_facebook;
    }
    if (website === "youtube") {
        if (isHovered) return ic_youtube_white;
        return ic_youtube;
    }
}

export default function SocialLink({ website }) {
    const socialNetworkLogo = useRef(null);
    const updateSocialNetworkLogo = ({ isHovered = false }) => socialNetworkLogo.current.src = getImageSource({ website, isHovered });

    return (
        <StyledSocialLink website={website} onMouseOver={() => updateSocialNetworkLogo({ isHovered: true })} onMouseOut={() => updateSocialNetworkLogo({ isHovered: false })}>
            <img ref={socialNetworkLogo} src={getImageSource({ website })} alt={website} />
        </StyledSocialLink>
    );
}
