import styled, { css } from 'styled-components';
export default styled.input`
    font-size:1rem;
    border:2px solid;
    border-radius:10px;
    padding:7px 10px;
    background:white;
    ${(props) => props.border && css`
    border-color:${(props) => props.border}; `}
    color:black;
`;