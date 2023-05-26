import { TouchableOpacity } from "react-native";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return(
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
           <UserPhoto 
                source={{ uri : 'https://lh3.googleusercontent.com/ogw/AOLn63FyVSI51xvzPIeFoMHMpkazEQQEZ5lBf1j1CJnN7w=s32-c-mo' }}
                alt="Imagem do usuário"
                size={16}
                mr={4}
           />

            <VStack flex={1}>
                <Text color="gray.100" fontSize="xs">
                    Olá, 
                </Text>
                <Heading color="gray.100" fontSize="sm">
                    Malhador
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon 
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>
            
        </HStack>
    )
}