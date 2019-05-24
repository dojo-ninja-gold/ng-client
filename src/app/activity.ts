export class Activity {
  model: string;
  pk: number;
  fields: {
    gold: number;
    location: number | string;
    user: number;
    created_at: number;
    updated_at: number;
  }
}
