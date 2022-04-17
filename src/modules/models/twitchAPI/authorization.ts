export default interface Autorization {
  client_id: string;
  login: string;
  scopes: Array<string>;
  user_id: string;
  expires_in: number;
}
