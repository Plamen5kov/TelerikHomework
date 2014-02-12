namespace Task2
{
    using System;

    public class MortgageAccount : Account
    {
        private const int _defaultMonthsForCompanies = 12;
        private const int _defaultMonthsForIndividuals = 6;
        private const string _defaultNameOfAcc = "Mortgage Account";

        public MortgageAccount(Customer customer, decimal ballance, decimal interestRate)
            :base(customer, ballance, interestRate)
        {
            this.AccType = _defaultNameOfAcc;
        }

        public MortgageAccount(Customer customer, decimal interestRate)
            :base(customer, interestRate)
        {
            this.AccType = _defaultNameOfAcc;
        }

        public override void Deposit(decimal depositAmount)
        {
            this.Ballance += depositAmount;
        }

        public override string CalculateInterest(int numberOfMonths)
        {
            if ((numberOfMonths > 0 && numberOfMonths <= _defaultMonthsForCompanies) && (Customer.GetType().ToString().IndexOf("Company") != -1))
            {
                this.InterestRate /= 2;
            }
            else if ((numberOfMonths > 0 && numberOfMonths <= _defaultMonthsForIndividuals) && (Customer.GetType().ToString().IndexOf("Individual") != -1))
            {
                this.InterestRate = 0;
            }
            decimal calcInterest = this.InterestRate * numberOfMonths;

            return string.Format("Calculated interest rate for a period of time: {0} is: {1:0.##}", numberOfMonths, calcInterest);
        }
    }
}
