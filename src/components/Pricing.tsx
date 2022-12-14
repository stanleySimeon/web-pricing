import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import { CheckIcon } from './icons/Icons';

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='5' {...rest} align='flex-start'>
      <Icon as={CheckIcon} w='22px' h='22px' flexShrink={0} />
      <Text textAlign='left'>{children}</Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx='6' as='section'>
      <Box
        maxW='992px'
        margin='auto'
        mt='-40'
        borderRadius='xl'
        overflow='hidden'
        textAlign='center'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
      >
        <Flex direction={['column', 'column', 'row']}>
          <Box bg='#020116' p={['28px', '60px', '60px']}>
            <Text fontSize='xl' fontWeight='extrabold' color='white'>
              Premium PRO
            </Text>
            <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='4' color='white'>
              $347
            </Heading>
            <Text color='gray.400' fontSize='lg' fontWeight='medium' mt='2'>
              billed just once
            </Text>
            <Button
              bg={'#003E9C'}
              size='lg'
              w={['auto', '282px', '282px']}
              mt='6'
              color='white'
              _active={{ bg: '#003E9C' }}
              _hover={{ bg: '#0046AE' }}
            >
              Get Started
            </Button>
          </Box>
          <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white' color={'black'}>
            <Text textAlign='left'>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as='ul' spacing='5' pt='6'>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
