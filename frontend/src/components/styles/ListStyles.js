import styled from 'styled-components';

const ListStyles = styled.li`
    margin: 0;
    width: 100%
    height: auto;
    padding: 25px 0;
    border-bottom: 1px dotted #333333;
    &:last-child {
        border-bottom: none;
    }

    h2 {
        margin: 0 0 12px;
        font-size: 3em;
        font-weight: 700;
        line-height: 1;
        color: #333333;
    }

    p {
        margin: 0;
        width: 100%;
        height: auto;
        font-size: 1.6em;
        font-weight: 400;
        line-height: 1.3;
        color: #333333;
    }

    span {
        font-weight: 700;
    }
`

export default ListStyles;