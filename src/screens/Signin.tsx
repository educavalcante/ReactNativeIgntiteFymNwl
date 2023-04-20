import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';


export function SignIn() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount() {
        navigation.navigate('signUp')
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <VStack flex={1} bg="gray.700" px={10}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={24}>
                    <LogoSvg />

                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e seu corpo
                    </Text>
                </Center>
                <Center>
                    <Heading color="gray.100" fontSize="sm" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize='none' //manter texto em minusculo
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry  //nao mosrar o texto da senha 
                    />
                    <Button title="Acessar" />
                </Center>
                <Center mt={24}>
                    <Text color="gray.100" fontSize="xs" mb={3} fontFamily="body">
                        Ainda não tem acesso?
                    </Text>
                    <Button
                        title="Criar Conta"
                        variant='outline'
                        onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}