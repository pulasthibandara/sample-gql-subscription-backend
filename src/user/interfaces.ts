export interface IUserModel {
  email: string;
  password: string;
}

export interface IUserRepository {
  create(user: IUserModel): IUserModel;
  getById(id: number): IUserModel;
  getByIds(ids: number[]): IUserModel[];
}
