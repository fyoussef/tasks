import {
    Box,
    Text,
    Button
} from '@chakra-ui/react'

import { BsPencilSquare } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'

type TasksProps = {
    task: string,
    editTask: (task: string) => void
}

export function Tasks({ task, editTask }: TasksProps) {
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
          justifyContent='space-between'
          px='4'
        >
            <Text
                fontSize='1.2rem'
                py='4'
            >
                {task}
            </Text>

            <Box>
                <Button
                    color='white'
                    backgroundColor='blue.400'
                    _hover={{
                        bg: 'blue.500'
                    }}
                    mr='2'
                    onClick={() => editTask(task)}
                >
                    <BsPencilSquare />
                </Button>

                <Button
                    color='white'
                    backgroundColor='red.500'
                    _hover={{
                        bg: 'red.600'
                    }}
                >
                    <FaTrashAlt />
                </Button>
            </Box>

        </Box>
    )
}