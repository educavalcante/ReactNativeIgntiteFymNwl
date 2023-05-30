import { useState } from 'react';
import { Heading, SectionList, VStack, Text } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "25.5.22",
            data: ["Remada Unilateral", "Puxada Cruzada"]
        },
        {
            title: "26.5.22",
            data: ["Puxada frontal"]
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />
          
            <SectionList  
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <HistoryCard />
                )}
                renderSectionHeader={({section}) => (
                    <Heading color="gray.200" fontSize="sm" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent:'center'}}
                ListEmptyComponent={() => (
                    <Text>
                        Não há Exercícios registrados ainda. {'\n'}
                        Vamos nos exercitar...
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />

           

    
        </VStack>
    );
}