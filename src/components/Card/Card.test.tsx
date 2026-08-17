import { login } from "../../services/login";

describe('Card Component', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve exibir um alert com a mensagem de boas-vindas ao clicar no botão', async () => {
    const response = await login("teste@dio.bank", "123456")

    expect(response).toBeTruthy();
  });
});