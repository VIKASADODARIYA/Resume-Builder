import React from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react';


const ErrorPage = () => {
    return (
        <>
            <Box mt={'32'} textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, #F27501, #ffac5e)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Template Not Found
                </Text>
                <Text color={'gray.500'} mb={6}>
                    This Page Resume Template is under build, coming soon....
                </Text>

                <Button
                    onClick={() => window.location.reload()}
                    colorScheme="teal"
                    bgGradient="linear(to-r, #F27501, #ffac5e)"
                    color="white"
                    variant="solid"
                    _hover={{ bgGradient: 'linear(to-r, #ffac5e, #F27501)' }}>
                    Select Another Template
                </Button>
            </Box>
        </>
    )
}

export default ErrorPage