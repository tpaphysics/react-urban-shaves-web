/* eslint-disable import/named */
import { Avatar, HStack, useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { BarberText } from '../../Typograph/BarberText';
import { BarberTextProps } from '../../Typograph/BarberTextProps';
import { AvatarUserProfileProps } from '../interfaces';

const sizes = {
  header: {
    avatarSize: 'lg',
    fontSize: 'md',
    spacing: '4',
  },
  SmallCard: {
    avatarSize: 'lg',
    fontSize: 'lg',
    spacing: '4',
  },
  BigCard: {
    avatarSize: 'xl',
    fontSize: '2xl',
    spacing: '6',
  },
};

export function AvatarUserProfile({
  avatar,
  name,
  message,
  type,
  ...props
}: AvatarUserProfileProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { avatarSize, fontSize, spacing } = sizes[type];
  return (
    <Link to="/profile">
      <HStack spacing={spacing} {...props}>
        <Avatar
          name={name}
          src={avatar}
          size={isWideVersion ? avatarSize : 'lg'}
          filter="grayscale(100%) brightness(130%)"
          // filter="opacity(0.2) drop-shadow(0 0 0 #573c41)"
        />
        <VStack align="left" spacing="0">
          {type === 'header' && <BarberText>{message}</BarberText>}

          <BarberText
            size={isWideVersion ? (fontSize as BarberTextProps['size']) : 'lg'}
            color={type === 'header' ? 'orange' : 'white'}
            fontWeight="700">
            {name}
          </BarberText>
        </VStack>
      </HStack>
    </Link>
  );
}
