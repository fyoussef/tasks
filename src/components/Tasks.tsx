import {
    Box,
    Text
} from '@chakra-ui/react'

type TasksProps = {
    text: string
}

export function Tasks({ text }: TasksProps) {
    return (
        <Box
          w={550}
          boxShadow='md'
          rounded='md' 
          bg='white'
          border='1px' 
          borderColor='gray.200'
          display='flex'
          alignItems='center'
          px='4'
        >
          <Text
            fontSize='1.2rem'
            py='4'
          >
            {text}
          </Text>

        </Box>
    )
}