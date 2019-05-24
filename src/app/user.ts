export class User {
  model: string;
  pk: 1;
  fields: {
    first_name: string;
    last_name: string;
    email: string;
    gold: number;
    pw_hash: string;
    created_at: number;
    updated_at: number;
  }
}
