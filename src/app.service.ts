import { Injectable } from '@nestjs/common';
import { Item, ItemsRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  getItems(name?: string): Promise<Item[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    console.log(name);

    return this.itemsRepository.findAll(name);
  }
}
