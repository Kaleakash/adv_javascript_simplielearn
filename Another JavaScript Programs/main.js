import { add,sub,mul} from "./operation.js";
import { withdraw as hdfc_withdraw} from "./hdfc.js";
import { withdraw as hsbc_withdraw} from "./hsbc.js";
console.log("Sum of two numer is "+add(10,20));
console.log("Sub of two numer is "+sub(10,20));
hdfc_withdraw();
hsbc_withdraw();