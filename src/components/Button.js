import styled, { css } from 'styled-components';

export default styled.button`
    font-size:1rem;
    border:none;
    border-radius:5px;
    padding:7px 10px;
    background:black;
    margin:20px 10px;
    ${(props) => props.background && css`
    background:${(props) => props.background}; `}
    color:white;
    &:hover{
    cursor: pointer;
    }
`;