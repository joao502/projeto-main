import styled from "styled-components/native";

const Container = styled.View`
    flex:1;
    background-color: "#FFFFFF";
    align-items: center;
    justify-content: center;
`;

const MeuTitulo = styled.Text`
    font-size: ${props => props.fontSize || 25};
    color: ${props => props.cor || "black"}
`;



const MeuText = styled.Text`
    font-size: ${props => props.fontSize || 18};
    color: ${props => props.cor || "#08DBB8"}
`;

export {
    Container,
    MeuText,
    MeuTitulo
}