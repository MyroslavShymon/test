export const jwtOptions = {
	secret: process.env.PRIVATE_KEY || 'SECRET',
	signOptions: {
		expiresIn: '24h',
	},
};
