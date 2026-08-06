export const login = (email: string) => {
  if (!email) {
    alert('Preencha o email');
    return 'Preencha o email';
  }
  
  const mensagem = `Boas-vindas ao DIO Bank, ${email}!`;
  alert(mensagem);
  return mensagem;
};