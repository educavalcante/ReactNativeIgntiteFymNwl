import { TouchableOpacity, TouchableOpacityProps} from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon  } from "native-base";
import {Entypo} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({...rest}: Props){
    return(
        <TouchableOpacity  {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image 
                    source={{uri: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fentretenimento%2F0c%2F2019%2F12%2F03%2Fremada-unilateral-com-halteres-1575402100538_v2_600x600.jpg&tbnid=JzQpn7530PNhLM&vet=12ahUKEwjincSg-PP-AhW6B7kGHQeVD7wQMygCegUIARD4AQ..i&imgrefurl=https%3A%2F%2Fwww.uol.com.br%2Fvivabem%2Fnoticias%2Fredacao%2F2019%2F12%2F04%2Fremada-unilateral-com-halter-trabalha-costas-biceps-e-ombros.htm&docid=I_qDu7LQyZTaBM&w=600&h=600&q=remada%20unilateral&ved=2ahUKEwjincSg-PP-AhW6B7kGHQeVD7wQMygCegUIARD4AQ'}}
                    alt="imagem do exercicio"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading fontSize="lg" color="white">
                        Remada Unilateral
                    </Heading>
                    <Text fontSize="sm" color="gray.200" numberOfLines={2}>
                        2 séries x 12 repetições
                    </Text>
                </VStack>
=
                <Icon as={Entypo} name="chevron-thin-right" color="gray.300"/>
            </HStack>
        </TouchableOpacity>
    );
}