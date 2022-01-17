import styled from "styled-components"

const getHoverBackgroundByWebsite = website => {
    if (website === "instagram") return "#C13584"
    if (website === "twitter") return "#1DA1F2"
    if (website === "facebook") return "#4267B2"
    if (website === "youtube") return "#FF0000"
}

const getClickedBackgroundByWebsite = website => {
    if (website === "instagram") return "#8F2762"
    if (website === "twitter") return "#177FBF"
    if (website === "facebook") return "#2F4A80"
    if (website === "youtube") return "#CC0000"
}

export const StyledSocialLink = styled.div`
    width: 46px; 
    height: 46px;
    border-radius: 30px;
    border: 2px solid #E3E3E4;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor:pointer;

    &:hover{
        fill:white;
        background: ${({ website }) => getHoverBackgroundByWebsite(website)};
        border: 2px solid ${({ website }) => getHoverBackgroundByWebsite(website)} ;
        box-shadow: 0px 20px 40px rgba(19, 24, 33, 0.3);
    }

    &:active{
        fill:white;
        background: ${({ website }) => getClickedBackgroundByWebsite(website)};
        border: 2px solid ${({ website }) => getClickedBackgroundByWebsite(website)};
        box-shadow: 0px 20px 40px rgba(19, 24, 33, 0.3);
    }
`;