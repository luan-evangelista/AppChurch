import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Buttom = styled.TouchableOpacity`
    background-color: lightblue;
    margin-vertical: 10;
    width: 300;
    height: 60;
    border-radius: 100px;
`;

export const TextButton = styled.Text`
    align-self: center;
    padding: 18px;
    
    font-size: 17px;
`;