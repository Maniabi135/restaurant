/* jshint indent: 2 */
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Unique,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  DefaultScope,
  Scopes
} from 'sequelize-typescript';
import { City } from './citymodel';

@Table
export class Restaurant extends Model<Restaurant> {

  @Column
  id: number;

  @Unique
  @Column
  restaurant_name: string;

  @Unique
  @Column
  restaurant_code: string;

  @PrimaryKey
  @Column
  restaurant_id: number;

  @Column
  address: string;

  @BelongsTo(() => City, 'city_id')
  c_id: City;

  @Column
  email: string;

  @Column
  contact: number;

}
