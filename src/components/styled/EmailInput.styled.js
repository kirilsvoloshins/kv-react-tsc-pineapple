import styled from "styled-components"

export const StyledEmailInput = styled.input`
    height: 70px;
    background: #FFFFFF;
    border: 1px solid #E3E3E4;
    box-sizing: border-box;
    width: 663px;
    border-left: 4px solid #4066A5;
    padding-left: 40px;
    margin-left: -41px;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    
    &:hover {
        border: 1px solid #4066A5;
        border-left: 4px solid #4066A5;

        box-shadow: 0px 30px 40px rgba(19, 24, 33, 0.06);
    }

    &:focus {
        box-shadow: 0px 30px 40px rgba(19, 24, 33, 0.06);
        outline:none;
    }

    @media (max-width:${({ theme }) => theme.mobile}){
        width:100%;
        height: 60px;
        margin:auto;
    }
`;