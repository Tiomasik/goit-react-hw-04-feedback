import styled from 'styled-components';

export const List = styled.div `
    display: flex;
    gap: 10px;

    button {
        cursor: pointer;
        font-size: 18px;
        padding: 5px;
        border: 2px solid tomato;
        border-radius: 5px;
        background-color: transparent;
        text-transform: capitalize;

        :hover {
            background-color: tomato;
        }
    }
`