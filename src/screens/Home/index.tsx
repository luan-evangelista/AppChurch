import React from 'react';
import {
    Container,
    Buttom,
    TextButton,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {

    const navigation = useNavigation();

    const navigateToOutroComponente = () => {
        navigation.navigate('Assorteds' as never);
    }

    return (
        <Container>
            <Buttom>
                <TextButton onPress={navigateToOutroComponente}>Mensagem do dia 18/04/2023</TextButton>
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
