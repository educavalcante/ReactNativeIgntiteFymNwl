import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, FlatList, HStack, Heading, Text, VStack } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
    const [groups, setgroups] = useState(["Costas", "Bíceps", "Ombro", "Tríceps"]) 
    const [exercises, setExercises] = useState(["Corrida", "Abdominal", "Apoio", "Flexões", "Triceps"]) 
    const [groupSelected, setgroupSelected] = useState('Costas')

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    function handleExerciseDetail() {
        navigation.navigate('exercise')
    }

    return (
        <VStack flex={1}>
            <HomeHeader />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group 
                    name={item} 
                    isActive={ groupSelected=== item }
                    onPress={() => setgroupSelected(item)}
                     />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 6 }}   
                my={10}
                maxH={10}
            />
            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>
                    <Text color="gray.200" fontSize="sm">
                            {exercises.length}
                    </Text>
                </HStack>
                <FlatList 
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) =>(
                        <ExerciseCard 
                            onPress={handleExerciseDetail}
                        />
                    )}
                        showsVerticalScrollIndicator={false}
                        _contentContainerStyle={{paddingBottom: 20}}
                />

       
            </VStack>
        </VStack>
    )
}