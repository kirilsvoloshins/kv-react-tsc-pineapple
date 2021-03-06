import styled from "styled-components"

export const StyledSocials = styled.div`
    width: 100%;
    height: 50px;
    border-top: 1px solid #E3E3E4;
    margin-top:1px;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width:${({ theme }) => theme.mobile}){
        gap: 10px;
        padding-top: 20px;
    }
`;