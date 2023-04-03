import styled from "styled-components";


export const button = styled.button `
    display: inline-block;
    width: 150px;
    line-height: 48px;
    font-size: 16px;
    background-color: ${colors.bgPrimary};
    color: ${colors.textPrimary};
    border-radius: 30px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-out;
    border:2px solid ${colors.bgSecondary};

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        cursor: pointer;
    }

`;