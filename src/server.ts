import * as express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { BankAccount } from './bank/bank-account';
 
dotenv.config();
 
const app = express();
const port = 3000;
 
app.get('/', (req: Request, res: Response) => {

  const bankAccount1 = new BankAccount(111111, 222, 1000);
  const bankAccount2 = new BankAccount(222222, 333, 1500);
 

  const amount = Math.floor(Math.random() * 500) + 1;
  const pincode = 222; 
 
  try {
    
    bankAccount1.widthdraw(amount, pincode); 
    bankAccount2.deposit(amount);  
 
    
    res.send(`Transferred ${amount} from account ${bankAccount1.accountNumber} to account ${bankAccount2.accountNumber}`);
  } catch (error) {

    res.status(500).send(`Error during transaction`);
  }
});
 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 