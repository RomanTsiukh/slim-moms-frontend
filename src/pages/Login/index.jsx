import Loader from 'components/Loader/Loader';
import { FormLogin } from 'components/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { LoginPage, TitleLogIn } from './loginPage.styled';

export const Login = () => {
  const { isLoading } = useAuth();
  return (
    <LoginPage>
      <TitleLogIn>LOG IN</TitleLogIn>
      <FormLogin />
      {isLoading && <Loader />}
    </LoginPage>
  );
};
