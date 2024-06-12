
import { jwtDecode } from "jwt-decode"

export const verificaToken = (token: string | undefined) => {
  if (token) {
    let decodedToken = jwtDecode(token)
    if (decodedToken != null && decodedToken.exp) {
      if (decodedToken.exp < new Date().getTime() / 100) {
        //Token expirado
        return true
      }
      return false
    }
    return false
  }
  return true
}

export const validarPermissao = (
  token: string | undefined,
  permissao: Array<string> 
) => {
    if (token){

    }
  return true;
}