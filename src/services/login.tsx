import { api } from "../api";

export const login = async (email: string): Promise<string> => {
  if (!email || email.trim() === '') {
    alert('Preencha o email');
    return 'Preencha o email';
  }

  const data: any = await api();

  if(email !== data.email) {
    alert('E-mail inválido');
    return 'E-mail inválido';
  }
  
  const mensagem = `Boas-vindas ao DIO Bank, ${email}!`;
  alert(mensagem);
  return mensagem;
};