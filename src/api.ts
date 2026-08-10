const account = {
  email: 'teste@dio.bank',
  password: '123456',
  name: 'Test'
}

export const api = (): Promise<typeof account> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(account);
    }, 1000);
  });
};