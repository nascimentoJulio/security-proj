import { Inject, Injectable } from '@nestjs/common';
import * as promise from 'mysql2/promise';
import { MYSQL_POOL } from './db/mysql.privider';

export type Item = {
  id: number;
  name: string;
  description: string | null;
};

@Injectable()
export class ItemsRepository {
  constructor(@Inject(MYSQL_POOL) private readonly pool: promise.Pool) {}

  // busca todos itens com limite e offset (parametrizado)
  async findAll(name?: string): Promise<Item[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const query =
      'SELECT id, name, description FROM items' +
      (name ? ' WHERE name = ' + name + "'" : '');

    const [rows] = await this.pool.execute(query);
    return rows as Item[];
  }
}
