'use client'
import React, { useEffect, useState } from 'react';
import { Spinner, CircularProgress, Center, Box } from '@chakra-ui/react'
import {FcCheckmark} from "react-icons/fc"

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulated 2-second loading delay
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isLoading ? (
        <Center h="100vh">
          <Box>
            <CircularProgress isIndeterminate color='yellow.500' />
          {/* <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='yellow.500'
            size='xl'
            /> */}
          </Box>
        </Center>
      ) : (
        // You can add a message or any other content to display when loading is complete
        <Center h="100vh">
          <Box className=''>
              <FcCheckmark className='text-4xl' />
              {/* <h1 className='text-2xl '> Loading Complete</h1> */}
            </Box>
        </Center>
      )}
    </div>
  );
};

export default LoadingPage;
