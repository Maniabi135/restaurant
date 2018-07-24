/* jshint indent: 2 */
// tslint:disable-next-line:max-line-length
import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, Unique, BelongsTo, PrimaryKey, ForeignKey, AutoIncrement, DefaultScope, Scopes } from 'sequelize-typescript';
import { Restaurant } from './restaurantmodel';
@Table
export class Feedback extends Model<Feedback> {

  @Unique
  @Column
  user_name: string;

  @Column
  gender: string;

  @Column
  age: number;

  @Column
  email: string;

  @Column
  contact: number;

  @BelongsTo(() => Restaurant, 'restaurant_id')
  r_id: Restaurant;

  @Column
  comment: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
