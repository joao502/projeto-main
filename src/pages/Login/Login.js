import React, { useState } from "react";
import {Text, StyleSheet, View, Alert, Image} from "react-native" 
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container , MeuText } from "../../styles/style-geral";
import { 
 MinhaImagem,
 Imagem
  } from "./styles";

// Dados corretos... 
const usuario = {
    email: "admin@admin",
    senha: "123"
}

// Todo componente no react native é um função ou uma classe
function Login ({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = () =>{

        if(!email || !senha){
            Alert.alert(`O e-mail e senha devem ser preenchidos.`);

        }else if(email !== usuario.email || senha !== usuario.senha){
            Alert.alert(`O e-mail ou a senha estão incorretos.`); 
        }
        else{
            navigation.navigate('Home');
        }


    }


    return (
        <Container style={style.boxLogin}>

            <MinhaImagem source={require("../../assets/EcoTips.png")}></MinhaImagem>
             {/* <MeuText fontSize= {90} style={style.titulo}>EcoTips</MeuText>
            <MeuText fontSize= {60} style={style.titulo}>Login</MeuText> */}

            <MeuInput 
                label="E-mail"
                placeHolder="exemplo@exemplo.com"
                comMascara={false}
                setValor= {setEmail}
            ></MeuInput>

            <MeuInput 
                label="Senha"
                placeHolder="123456"
                comMascara={true}
                setValor= {setSenha}
            ></MeuInput>

            <View style={style.boxRecuperarSenha}>
                <Text style={style.recuperarSenha}>Recuperar senha</Text>
            </View>

            <SuperButton
            value={"Entrar"}
            acao={logar}
            ></SuperButton>

              <Imagem source={require("../../assets/Final.jpeg")}></Imagem>
        


        </Container>
    );
}

const style = StyleSheet.create({
    boxLogin:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff' // branca em hexadecimal
    },
  
    boxRecuperarSenha:{
        width:300,
        justifyContent: "flex-end",
        textAlign: "right",
    },
    // Pela estilização da cor e do tamanho
    recuperarSenha:{
        color: '#08DBB8',
    }
});

export default Login;