import React, { useEffect, useState } from 'react';
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
        const data = await fetchVerse('Salmos+1:3', 'almeida');
        setVerseData(data);
    };

    useEffect(() => {
        loadContent();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}>
            {verseData ? (
                <Text>{verseData.text}</Text>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
};

export default Assorteds;
