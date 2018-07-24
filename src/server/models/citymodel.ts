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
import { Location } from './locationmodel';

@Table
export class City extends Model<City> {

  @Unique
  @Column
  city_name: string;

  @Unique
  @Column
  city_code: string;

  @Unique
  @PrimaryKey
  @Column
  city_id: number;

  @BelongsTo(() => Location, 'location_id')
  l_id: Location;

}
