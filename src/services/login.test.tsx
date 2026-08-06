import { login } from "../services/login";

describe('login service', () => {
  const mockAlert = jest.fn();

  beforeEach(() => {
    window.alert = mockAlert;
    mockAlert.mockClear();
  });

  it('Deve exibir um alert com a mensagem de boas-vindas ao clicar no botão', () => {
    login("teste@dio.bank");

    expect(mockAlert).toHaveBeenCalledWith('Boas-vindas ao DIO Bank, teste@dio.bank!');
  });

  it('Deve exibir um alert solicitando o preenchimento do email', () => {
    login("");

    expect(mockAlert).toHaveBeenCalledWith('Preencha o email');
  });
});