export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string): string {
    const value = this.env[key]
    if (!value) {
      throw new Error(`config error - missing env.${key}`)
    }
    return value
  }

  public getPort() {
    return this.getValue('PORT')
  }

  public isProduction() {
    const mode = this.getValue('MODE')
    return mode != 'DEV'
  }
}
