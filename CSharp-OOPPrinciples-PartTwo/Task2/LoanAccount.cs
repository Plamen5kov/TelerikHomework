namespace Task2
{
    using System;

    public class LoanAccount : Account
    {
        private const int _defaultMonthsForCompanies = 2;
        private const int _defaultMonthsForIndividuals = 3;
        private const string _defaultNameOfAcc = "Loan Account";

        public LoanAccount(Customer customer, decimal ballance, decimal interestRate)
            : base(customer, ballance, interestRate)
        {
            this.AccType = _defaultNameOfAcc;
        }

        public LoanAccount(Customer customer, decimal interestRate)
            : base(customer, interestRate)
        {
            this.AccType = _defaultNameOfAcc;
        }

        public override void Deposit(decimal depositAmount)
        {
            this.Ballance += depositAmount;
        }

        public override string CalculateInterest(int numberOfMonths)
        {
            if ((Customer.GetType().ToString().IndexOf("Individual") != -1 ) && numberOfMonths <= _defaultMonthsForIndividuals)
            {
                this.InterestRate = 0;
            }
            else if ((Customer.GetType().ToString().IndexOf("Company") != -1 ) && numberOfMonths <= _defaultMonthsForCompanies)
            {
                this.InterestRate = 0;
            }

            decimal calcInterest = this.InterestRate * numberOfMonths;

            return string.Format("Calculated interest rate for a period of time: {0} is: {1:0.##}", numberOfMonths, calcInterest);
        }
    }
}
