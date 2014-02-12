namespace Task2
{
    using System;

    public abstract class Account
    {
        private const decimal DEFAULT_BALLANCE = 0M;
        private decimal interestRate;

        public Customer Customer { get; set; }

        public decimal Ballance { get; set; }

        public string AccType { get; protected set; }

        public decimal InterestRate
        {
            get
            {
                return this.interestRate;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The interrest should be a positive number");
                }
                this.interestRate = value;
            }
        }

        public Account(Customer customer, decimal ballance, decimal interestRate)
        {
            this.Customer = customer;
            this.Ballance = ballance;
            this.InterestRate = interestRate;
        }

        public Account(Customer customer, decimal interestRate)
            : this(customer, DEFAULT_BALLANCE, interestRate)
        {
        }

        public abstract void Deposit(decimal depositAmount);

        public abstract string CalculateInterest(int numberOfMonths);

        public override string ToString()
        {
            return string.Format("\nAccount Type: {0}\nOwner Name: {1}\nBallance: {2:.##}\nInterest: {3:.##}",this.AccType, this.Customer.Name, this.Ballance, this.InterestRate);
        }
    }
}
