import styled from "styled-components"

export const NavLinks = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 15px;
    color: #6A707B;

    @media (max-width:${({ theme }) => theme.mobile}){
        background-color: #FFFFFF;
        height: 66px;
        margin: 0;
        gap: 20px;
    }

    a{
        text-decoration: none;
        color: #6A707B;
    }
`;