"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
// Import express and Request, Response types
var bank_account_1 = require("./bank/bank-account");
dotenv.config();
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    var bankAccount1 = new bank_account_1.BankAccount(111111, 222, 1000);
    var bankAccount2 = new bank_account_1.BankAccount(222222, 333, 1500);
    var amount = Math.floor(Math.random() * 500) + 1;
    var pincode = 222;
    try {
        bankAccount1.widthdraw(amount, pincode);
        bankAccount2.deposit(amount);
        res.send("Transferred ".concat(amount, " from account ").concat(bankAccount1.accountNumber, " to account ").concat(bankAccount2.accountNumber));
    }
    catch (error) {
        res.status(500).send("Error during transaction");
    }
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
