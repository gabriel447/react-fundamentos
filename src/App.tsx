import { login } from './services/login'
import {
  Box,
  ChakraProvider,
  Input,
  Center,
  Button
} from "@chakra-ui/react"

export default function App() {
  return (
    <ChakraProvider>
      <Box minHeight={'100vh'} backgroundColor={'black'} padding={'25px'}>
        <Center>
          <Box backgroundColor={'white'} borderRadius={'25px'} padding={'25px'} maxWidth={'500px'} marginTop={'100px'}>
            <Center>
              <h1>Faça login</h1>
            </Center>
            <Input placeholder='email' marginTop={'10px'} />
            <Input placeholder='password' marginTop={'10px'} />
            <Button onClick={login} colorScheme='blackAlpha' marginTop={'10px'} width={'100%'}>Acessar</Button>
          </Box>
        </Center>
      </Box >
    </ChakraProvider >
  )
}