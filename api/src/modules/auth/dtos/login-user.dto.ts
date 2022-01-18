import { IsEmail, IsString, Length } from 'class-validator';

export class LoginUserDto {
	@IsString({ message: 'Електроний адрес має бути рядком' })
	@IsEmail({}, { message: 'Не коректний електроний адрес' })
	readonly email: string;

	@IsString({ message: 'Пароль має бути рядком' })
	@Length(4, 16, {
		message: 'Пароль має бути більше 4 і менше 16 символів',
	})
	readonly password: string;
}
