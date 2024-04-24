import React,{ useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Buttom,
    TextButton,
} from './styles';
import { fetchVerse } from '../../server/api';

const Assorteds: React.FC = () => {
    const [verseData, setVerseData] = useState<any>(null);

    const loadContent = async () => {
        const data = await fetchVerse('João+3:16', 'almeida');
        setVerseData(data);
    };

    useEffect(() => {
        loadContent();
    }, []);

    return (
        <View style={{marginTop: 32}}>
            {verseData ? (
                <Text>{verseData.text}</Text>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
};

export default Assorteds;
