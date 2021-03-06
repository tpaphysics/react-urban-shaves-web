import { HStack, StackProps } from '@chakra-ui/react';
import React from 'react';

import { AvatarUserProfile } from '../Header/parts/AvatarUserProfile';
import { Hour } from '../Hour/Hour';

interface SmallAppointmentCardProps extends StackProps {
  avatar: string;
  name: string;
  time: string;
}

export function SmallAppointmentCard({ avatar, name, time, ...props }: SmallAppointmentCardProps) {
  return (
    <HStack spacing="7" {...props} w="100%">
      <Hour size="small" time={time} />
      <HStack
        w="100%"
        maxW="544px"
        bg="black.shape"
        borderRadius="10px"
        px="4"
        py="4"
        justify="space-between">
        <AvatarUserProfile name={name} type="SmallCard" avatar={avatar} />
      </HStack>
    </HStack>
  );
}
