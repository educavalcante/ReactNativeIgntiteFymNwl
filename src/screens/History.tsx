import {  Linking } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps} from "react-native";
import { Center, Text, Heading,VStack, HStack, View } from 'native-base';

type Props = TouchableOpacityProps & {

};
export function History({...rest}: Props) {
    const handleLinkPress = () => {
        // Abra o link usando a API de Linking
        Linking.openURL('https://www.cpcbrasil.com');
      };
    return (
        <View>
        <TouchableOpacity  onPress={handleLinkPress}  {...rest}>
        <HStack bg="gray.500" alignItems="center" p={10} pr={3} rounded="md" mb={3}>

            <VStack flex={1}>
                <Heading fontSize="xs" color="white">
                    Abrir Página
                </Heading>
                <Text fontSize="mm" color="gray.200" mt={0} numberOfLines={2}>
                https://www.cpcbrasil.com/
                </Text>
            </VStack>

            
        </HStack>
    </TouchableOpacity>
    </View>
    )
}