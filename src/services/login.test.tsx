import { login } from "../services/login";

describe('login service', () => {
  const mockEmail = 'teste@dio.bank';
  const mockPassword = '123456';

  it('Deve retornar true caso o e-mail seja válido', async () => {
    const response = await login(mockEmail, mockPassword);

    expect(response).toBeTruthy();
  });

  it('Deve retornar false caso o e-mail esteja vazio', async () => {
    const response = await login("", "");

    expect(response).toBeFalsy();
  });

  it('Deve retornar false caso o e-mail seja inválido', async () => {
    const response = await login('email@invalid.com', '');

    expect(response).toBeFalsy();
  });
});