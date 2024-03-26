import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Box height={'80vh'} overflowY={'auto'}>
      {<Outlet />}
      </Box>
    </>
  )
}

export default Main