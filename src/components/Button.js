import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: bold;
    background: transparent;
    color: var(--mainWhite);
    &:hover {
        color: var(--mainBlue);
        background: var(--lightBlue);
    }
`;