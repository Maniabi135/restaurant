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

@Table
export class Location extends Model<Location> {

  @Unique
  @Column
  location_name: string;

  @Unique
  @Column
  location_code: string;

  @Unique
  @PrimaryKey
  @Column
  location_id: number;


  @Column
  country: string;

  @Column
  country_code: string;

}
