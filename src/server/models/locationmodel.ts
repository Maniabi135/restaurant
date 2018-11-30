/* jshint indent: 2 */
import {
  Table,
  Column,
  Model,
  Unique
} from 'sequelize-typescript';
import { City } from './citymodel';

@Table
export class Location extends Model<Location> {

  @Unique
  @Column
  location_name: string;

  @Unique
  @Column
  location_code: string;

  @Unique
  @Column
  location_id: number;

  @Column
  country: string;

  @Column
  country_code: string;

}
