import { User, UserProps } from './user';

describe('User Unit Test', () => {
  it('should be constructor', () => {
    const userProps: UserProps = {
      name: 'any_name',
      username: 'any_username',
      email: 'email_any@gmail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
  });

  it('should updateName method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      username: 'any_username',
      email: 'email_any@gmail.com',
      password: 'password_any',
    };
    const user = User.create(userProps);
    user.updateName('name_updated');
    expect(user.name).toBe('name_updated');
  });

  it('should be tojson() method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      username: 'any_username',
      email: 'email_any@gmail.com',
      password: 'password_any',
    };
    const user = User.create(userProps);
    user.toJSON();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      username: 'any_username',
      email: 'email_any@gmail.com',
      password: 'password_any',
    });
  });
});
