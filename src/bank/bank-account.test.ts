import { BankAccount } from './bank-account';

describe('BankAccount', () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(123456, 9999, 1000);
  });

  test('Deposit positive amount', () => {
    account.deposit(500);
    expect(account.balance).toBe(1500);
  });

  test('Cannot deposit negative amount', () => {
    expect(() => account.deposit(-200)).toThrow('Cannot deposit negative amount');
  });

  test('Withdraw with valid pincode', () => {
    account.widthdraw(300, 9999);
    expect(account.balance).toBe(700);
  });

  test('Cannot withdraw negative amount', () => {
    expect(() => account.widthdraw(-200, 9999)).toThrow('Cannot widthdraw negative amount');
  });

  test('Cannot withdraw with smaller balance', () => {
    expect(() => account.widthdraw(1500, 9999)).toThrow('not enough balance');
  });

  test('Cannot withdraw with invalid pincode', () => {
    expect(() => account.widthdraw(200, 1234)).not.toThrow();
    expect(account.balance).toBe(1000);
  });

  test('Get balance with valid pincode', () => {
    const balance = account.getBalance(9999);
    expect(balance).toBe(1000);
  });

  test('Cannot get balance with invalid pincode', () => {
    expect(() => account.getBalance(1234)).toThrow('Invalid pincode');
  });
});
