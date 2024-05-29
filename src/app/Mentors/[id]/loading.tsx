import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'




export default function Loading() {


  return (
    <Stack>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
  )
}