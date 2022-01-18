import { ConfigService } from "../../../nest"
import { CONFIG_SERVICE_TOKEN } from "../../constants"

export const ConfigServiceProvider = {
  provide: CONFIG_SERVICE_TOKEN,
  useValue: new ConfigService(process.env),
}
