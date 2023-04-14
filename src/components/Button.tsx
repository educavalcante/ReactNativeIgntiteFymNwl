import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            bg="green.700"
            rounded="sm"   // para ficar totalmente arrendodado usar o "full"
            _pressed={  // estilizar quando tiver pressionado
                {
                    bg: "green.500"
                }
            }

            {...rest}
        >
            <Text color="white" fontSize="heading" fontFamily="sm">
                {title}
            </Text>
        </ButtonNativeBase>
    );
}