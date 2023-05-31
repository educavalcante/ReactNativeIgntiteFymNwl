import {  HStack, Heading, Icon, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';

export function Exercise() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    function handleGoBack(){
        navigation.goBack();
    }
    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="green.500" size={6}/>
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="sm" flexShrink={1}>
                        Puxada frontal
                    </Heading>
                    <HStack alignItems="center">
                        <BodySvg />
                        <Text  ml={1} color="gray.300" fontSize="xs" textTransform="capitalize">
                            costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    )
}