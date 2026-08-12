import { api } from "../api";

export const login = async (email: string): Promise<boolean> => {
  if (!email || email.trim() === '') {
    return false
  }

  const data: any = await api();

  if(email !== data.email) {
    return false
  }
  
  return true
};