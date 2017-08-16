import { Schema, Document, model } from 'mongoose';

import { IUserModel, IUserRepository } from './interfaces';

interface IUserDocument extends Document, IUserModel {}

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model<IUserDocument>('user', userSchema, 'users');

export function create(user: IUserModel): IUserModel {
  throw new Error('not implemented');
}

export function getById(id: number): IUserModel {
  throw new Error('not implemented');
}

export function getByIds(ids: number[]): IUserModel[] {
  throw new Error('not implemented');
}

export default { getById, getByIds } as IUserRepository;

