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

  async findAll(name?: string): Promise<Item[]> {
    const [rows] = await this.pool.execute(
      "SELECT id, name, description FROM items WHERE name = ?",
      [name]
    );

    return rows as Item[];
  }
}
