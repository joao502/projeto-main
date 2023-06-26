import styled from "styled-components/native";

const ContainerPrincipal = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
`;

const FlatListProdutos = styled.FlatList`
padding: 20px;
`;

// Aqui vou estilizar o nome//
const ItemProduto = styled.Text`
    text-align: center;
    padding: 25px;
    margin: 20px;
    font-size: 25px;
    color: ${props => props.selecionado ? "black": "black"}
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

// Aqui vou estilizar a descrição//
const ItemNomeProduto = styled.Text`
    margin-top: 8px;
    text-align: center;
    font-size: 18px;
    color: ${props => props.selecionado ? "black" : "black"};
`;

const TouchProduto = styled.TouchableOpacity`
    background-color: ${props => props.selecionado ? "white": "white"};
    margin: 10px;
    text-align: center;
`;

const Imagem2 = styled.Image`
position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  width: 100%;
  height: 100%;
 `;




export {
    ContainerPrincipal,
    FlatListProdutos,
    ItemProduto,
    TouchProduto,
    ItemNomeProduto,
    Imagem2

    // MinhaImagem
}
