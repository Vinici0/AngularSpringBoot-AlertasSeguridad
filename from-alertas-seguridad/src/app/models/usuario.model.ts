
export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public perfil: string,
    public password: string,
    public role?: string,
    public img?: string,
    public uid?: string,
  ) {}
}
