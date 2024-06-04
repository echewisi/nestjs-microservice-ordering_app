import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Injectable, Logger } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { Order } from './schema/order.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(Order.name);

  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
