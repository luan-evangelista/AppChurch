import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Container,
    Buttom,
    TextButton,
} from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Buttom>
                <TextButton>Mensagem do dia 18/04/2023</TextButton>
            </Buttom>
            <Buttom>
                <TextButton>Leia todos os Salmos</TextButton>
            </Buttom>
            <Buttom>
                <TextButton>Pesquise seu Salmo</TextButton>
            </Buttom>
        </Container>
    );
};

export default Home;
