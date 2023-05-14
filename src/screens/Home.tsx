import { useState } from 'react';
import { Center, FlatList, HStack, Heading, Text, VStack } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
    const [groups, setgroups] = useState(["Costas", "Bíceps", "Ombro", "Tríceps"]) 
    const [groupSelected, setgroupSelected] = useState('costas')

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
                            4
                    </Text>
                </HStack>
                <ExerciseCard />

            </VStack>
        </VStack>
    )
}