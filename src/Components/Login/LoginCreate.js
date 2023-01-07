import React, { useContext } from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import UseForm from '../../Hooks/UseForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const username = UseForm();
  const email = UseForm('email');
  const password = UseForm();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    event.preventDefault();
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
