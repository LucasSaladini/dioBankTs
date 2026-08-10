import { login } from "../services/login";

describe('login service', () => {
  const mockAlert = jest.fn();
  const mockEmail = 'teste@dio.bank'

  beforeEach(() => {
    window.alert = mockAlert;
    mockAlert.mockClear();
  });

  it('Deve exibir um alert com a mensagem de boas-vindas ao clicar no botão caso o e-mail seja válido', async () => {
    await login("teste@dio.bank");

    expect(mockAlert).toHaveBeenCalledWith(`Boas-vindas ao DIO Bank, ${mockEmail}!`);
  });

  it('Deve exibir um alert solicitando o preenchimento do email', async () => {
    await login("");

    expect(mockAlert).toHaveBeenCalledWith('Preencha o email');
  });

  it('Deve exibir um erro caso o e-mail seja inválido', async () => {
    await login('email@invalid.com');

    expect(mockAlert).toHaveBeenCalledWith('E-mail inválido');
  })
});