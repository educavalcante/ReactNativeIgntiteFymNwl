import { useState } from 'react';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { Center, FlatList, Text, VStack } from 'native-base';

export function Home() {
    const [groups, setgroups] = useState(["costas", "bíceps", "ombro", "Tríceps"]) 
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
            
        </VStack>
    )
}