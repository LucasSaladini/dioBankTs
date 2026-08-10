import { login } from "../services/login";

describe('Card Component', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve exibir um alert com a mensagem de boas-vindas ao clicar no botão', async () => {
    await login("teste@dio.bank")

    expect(mockAlert).toHaveBeenCalledWith('Boas-vindas ao DIO Bank, teste@dio.bank!');

  });
});