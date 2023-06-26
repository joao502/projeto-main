import React from "react";
import { Text, FlatList, Image,View } from "react-native";
import { useEffect, useState } from "react";
import { Container } from "../../styles/style-geral";
import { 
    ContainerPrincipal,
    FlatListProdutos,
    ItemProduto,
    TouchProduto,
    ItemNomeProduto,
    Imagem2
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Home({ route }) {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Papel/Papelão \n\n", descricao: "A reciclagem do papel economiza água e energia, melhora a limpeza das cidades, evitando enchentes, e gera empregos por meio de cooperativas. É fundamental tomar cuidado ao descartar papel, pois essa escolha determina o destino do material." },
    { id: 2, nome: "Plástico \n\n", descricao: "A reciclagem do plástico economiza recursos naturais, reduz a poluição, economiza energia e gera empregos. Descartar plástico de forma adequada, considerando a reciclagem, é fundamental para reduzir o impacto ambiental desse material" },
    { id: 3, nome: "Vidro \n\n", descricao: "A reciclagem do vidro economiza recursos, reduz a poluição e preserva o meio ambiente. Além disso, gera empregos e contribui para a limpeza das cidades. Ao descartar vidro, é essencial priorizar a reciclagem, promovendo a sustentabilidade e a preservação do planeta." },
    { id: 4, nome: "Metal \n\n", descricao: "A reciclagem do vidro economiza recursos, reduz a poluição e preserva o meio ambiente. Além disso, gera empregos e contribui para a limpeza das cidades. Ao descartar vidro, é essencial priorizar a reciclagem, promovendo a sustentabilidade e a preservação do planeta." },
    { id: 5, nome: "Madeira \n\n", descricao: "A reciclagem da madeira preserva recursos naturais, reduz o desperdício e protege o meio ambiente. Evita o corte excessivo de árvores e danos aos ecossistemas, promovendo a reutilização em setores como a fabricação de móveis e a produção de energia renovável. Descartar a madeira de forma responsável, com foco na reciclagem e reutilização, é fundamental para a sustentabilidade e para minimizar o impacto ambiental negativo." },
    { id: 6, nome: "Perigoso \n\n", descricao: "A reciclagem de lixo perigoso é crucial para proteger o meio ambiente e a saúde pública. Ela evita a contaminação do solo, da água e do ar, além de permitir a recuperação de materiais valiosos. O descarte adequado desse tipo de resíduo, seguindo as normas de segurança, é fundamental para garantir a preservação ambiental e a saúde de todos." },
    { id: 7, nome: "Saúde \n\n", descricao: "A reciclagem de lixo perigoso é crucial para proteger o meio ambiente e a saúde pública. Ela evita a contaminação do solo, da água e do ar, além de permitir a recuperação de materiais valiosos. O descarte adequado desse tipo de resíduo, seguindo as normas de segurança, é fundamental para garantir a preservação ambiental e a saúde de todos." },
    { id: 8, nome: "Radioativo \n\n", descricao: "O descarte do lixo radioativo é de extrema importância devido aos seus perigos à saúde e ao meio ambiente. É essencial garantir um manuseio seguro e adequado desses resíduos, com o objetivo de evitar a contaminação radioativa e minimizar os riscos para as gerações presentes e futuras." },
    { id: 9, nome: "Orgânico \n\n", descricao: "A reciclagem do lixo orgânico reduz o desperdício e promove a sustentabilidade. Ao reciclar resíduos orgânicos, como restos de comida, produzimos adubo natural e diminuímos a quantidade de resíduos destinados aos aterros sanitários. A separação correta do lixo orgânico e a prática da compostagem são essenciais para aproveitar seus benefícios ambientais." },
    { id: 10, nome: "Não Reciclável \n\n", descricao: "O descarte adequado de resíduos não recicláveis é crucial para proteger o meio ambiente. Esses materiais devem ser destinados a aterros sanitários ou incinerados de forma controlada. Reduzir o consumo desses materiais e buscar alternativas sustentáveis é importante. A gestão adequada dos resíduos não recicláveis minimiza seu impacto negativo." },
  ]);

  const [selecionado, setSelecionado] = useState(null);

  const obterNomeIcone = (id) => {
    switch (id) {
      case 1:
        return "newspaper-outline";
      case 2:
        return "basket";
      case 3:
        return "glasses-outline";
      case 4:
        return "barbell"
      case 5:
        return "pencil";

      case 6:
        return "warning-sharp";

      case 7:
        return "fitness-outline";

      case 8:
        return "logo-react";

      case 9:
        return "logo-apple";

      case 10:
        return "not-interested";
      
      default:
        return ""; 
    }
  };
  const obterCorIcone = (id) => {
    switch (id) {
        case 1,2,3,4,5,6,7,8,9,10:
        return "black";
    }
  };

  

  const renderItem = ({ item }) => {
    const nomeIcone = obterNomeIcone(item.id);
    const corIcone = obterCorIcone(item.id);

    return (
      <TouchProduto
        selecionado={item.id === selecionado}
        onPress={() => setSelecionado(item.id)}
      >
        <ItemProduto selecionado={item.id === selecionado}>
          
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons
        name={nomeIcone}
        size={50}
        color={corIcone}
        style={{ marginRight: 10 }}
      />
      <Text style={{ flex: 1, fontSize: 25, color: corIcone }}>
        {item.nome.toUpperCase()}
      </Text>
    </View>







          <ItemNomeProduto>
            <Text>{item.descricao}</Text>
          </ItemNomeProduto>
        </ItemProduto>
      </TouchProduto>
    );
  };

  return (
    <ContainerPrincipal>
      <Imagem2 source={require("../../assets/Recicle.png")} />
      <FlatListProdutos
        data={produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ContainerPrincipal>
  );
}
