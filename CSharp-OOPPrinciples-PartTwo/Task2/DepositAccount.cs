namespace Task2
{
    using System;

    public class DepositAccount : Account
    {
        private const int _defaultBallanceMinimum = 1000;
        private const string _defaultNameOfAcc = "Deposit Account";

        public DepositAccount(Customer customer, decimal ballance, decimal interestRate) 
            : base(customer, ballance, interestRate)
        {
            this.AccType = _defaultNameOfAcc;
        }

        public DepositAccount(Customer customer, decimal interestRate)
            : base(customer, interestRate)
        {
            this.AccType = _defaultNameOfAcc;
        }

        public void Withdraw(decimal withdrawAmount)
        {
            this.Ballance -= withdrawAmount;
        }

        public override void Deposit(decimal depositAmount)
        {
            this.Ballance += depositAmount;
        }

        public override string CalculateInterest(int numberOfMonths)
        {
            if (this.Ballance <= _defaultBallanceMinimum)
            {
                this.InterestRate = 0M;
            }
            decimal calcInterest = this.InterestRate * numberOfMonths;
            return string.Format("Calculated interest rate for a period of time: {0} is: {1:0.##}", numberOfMonths, calcInterest);
        }
    }
}
