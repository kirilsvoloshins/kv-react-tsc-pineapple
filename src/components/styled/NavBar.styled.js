import styled from "styled-components"

export const StyledNavBar = styled.div`
    margin: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;

    @media (max-width:${({ theme }) => theme.mobile}){
        background-color: #FFFFFF;
        height: 66px;
        margin:0;
        width:100%;
        padding: 0 20px;
        position: fixed;
        top:0;
    }
`;