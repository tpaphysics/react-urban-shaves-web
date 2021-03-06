import { VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import BarberButton from '../components/Basic/BarberButton';
import { BarberInput } from '../components/Basic/Input';
import { RegisterDto } from '../dto/register.dto';
import 'react-toastify/dist/ReactToastify.css';
import RegisterService from '../services/register.service';

export default function RegisterForm() {
  const resolver = classValidatorResolver(RegisterDto);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDto>({ resolver });

  const navigate = useNavigate();

  const { createNewUser } = RegisterService;

  function onSubmit(data: RegisterDto) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        createNewUser(data)
          .then(() => {
            toast.success('User created successfully!');
            setTimeout(() => navigate('/', { replace: true }), 4000);
          })
          .catch((err) => toast.error(err.response.data.message));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <BarberInput
          id="name"
          type="text"
          register={register}
          errors={errors}
          iconType="user"
          placeholder="Name"
          w="340px"
        />
        <BarberInput
          id="email"
          type="email"
          register={register}
          errors={errors}
          iconType="email"
          placeholder="E-mail"
          w="340px"
        />
        <BarberInput
          id="password"
          register={register}
          errors={errors}
          iconType="lock"
          placeholder="Password"
          isPassword
        />
      </VStack>
      <BarberButton mt="6" w="100%" type="submit" isLoading={isSubmitting}>
        Register
      </BarberButton>
      <ToastContainer theme="colored" autoClose={3000} />
    </form>
  );
}
