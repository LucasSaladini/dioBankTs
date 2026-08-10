const account = {
  email: 'teste@dio.bank',
  password: '123456',
  name: 'Test',
  balance: 2000.00,
  id: '1'
}

export const api = (): Promise<typeof account> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(account);
    }, 1000);
  });
};