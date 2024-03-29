'use client';

import React from 'react';
import IteraInput from '@/components/ui/IteraInput';
import IteraButton from '@/components/ui/IteraButton';
import IteraLink from '@/components/ui/IteraLink';
import { loginFields } from '../constants';
import { useLogin } from '../hooks/useLogin';
import IteraError from '@/components/ui/IteraError';

const Login = () => {
  const {
    register,
    hasMounted,
    isValidForm,
    isTouched,
    errors,
    onSubmit,
    isLoading,
    responseError,
  } = useLogin();

  if (!hasMounted) return null;

  return (
    <form method="POST" className="list" onSubmit={onSubmit}>
      {loginFields.map((field) => (
        <IteraInput
          key={field.name}
          error={errors[field.name]?.message}
          {...register(field.name, field.options)}
          {...field}
        />
      ))}
      {responseError && !isTouched && <IteraError>{responseError}</IteraError>}
      <IteraButton type="submit" disabled={!isValidForm} loading={isLoading}>
        Войти
      </IteraButton>
      <IteraLink href="/auth/register">
        Ещё нет аккаунта? <b>Создайте его</b>
      </IteraLink>
    </form>
  );
};

export default Login;
