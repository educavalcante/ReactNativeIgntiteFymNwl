import { useState } from 'react';
import { Center, ScrollView, VStack, Skeleton, Heading  } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 20;

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil'/>
            <ScrollView>
                    <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                        <Skeleton 
                            w={PHOTO_SIZE}
                            h={PHOTO_SIZE}
                            rounded="full"
                            startColor="gray.500"
                            endColor="gray.400"
                        />
                        :
                        <UserPhoto 
                            source={{ uri : 'https://lh3.googleusercontent.com/ogw/AOLn63FyVSI51xvzPIeFoMHMpkazEQQEZ5lBf1j1CJnN7w=s32-c-mo' }}
                            alt="foto do perfil"
                            size={PHOTO_SIZE}               
                        />
                    }         

                      <Input 
                            placeholder='Nome'
                            bg="gray.500"
                            borderWidth={0}
                        />          
                       <Input 
                            placeholder='eduardo@cpcbrasil.com'
                            bg="gray.500"
                            borderWidth={0}
                            isDisabled
                        />                   
                    </Center>

                    <VStack>
                        <Heading color="gray.200" fontSize="sm" px={10} mt={10} mb={1}>
                            Alterar Senha
                        </Heading>
                        <Center mt={4} px={10}>
                            <Input 
                                placeholder='Senha Antiga'
                                bg="gray.500"
                                borderWidth={0}
                                secureTextEntry
                            />
                            <Input 
                                placeholder='Nova Senha'
                                bg="gray.500"
                                borderWidth={0}
                                secureTextEntry
                            />
                            <Input 
                                placeholder='Confirme Nova Senha'
                                bg="gray.500"
                                borderWidth={0}
                                secureTextEntry
                            />

                            <Button 
                                mt={1}
                                title="Atualizar"
                                bg="green.500"
                                _pressed={  // estilizar quando tiver pressionado
                                    {
                                        bg: "gray.600"
                                    }
                                }
                            />


                        </Center>

                    </VStack>
            </ScrollView>
        </VStack>
    )
}