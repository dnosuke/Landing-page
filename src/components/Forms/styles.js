import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    .form {
        padding: 2rem;
        background-color: black;
    }

    .title {
        background-color: rgb(46,141,205);
        height: 125px;
        width: 364px;
        text-align: center;
        align-items: center;
        margin-bottom: 0;
    }

    input.input, .field {
        width: 300px;
    }

    label {
        color: aliceblue;
    }

    button.button {
        background-color: #ff4000;
        width: 300px;
    }
    button.button:hover {
        background-color: #ff7e53;
    }

    .icons {
        font-size: 2rem;
        color: rgb(46,141,205);

        i {
            margin-right: 1rem;
        }
    }
`;