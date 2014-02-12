namespace Task2
{
    using System;

    class Program
    {
        static void Main()
        {
            DepositAccount depAcc = new DepositAccount(new Individual("Mariika"), 1.2M);

            depAcc.Deposit(1001); // if the ballance is 1000 or less the interestRate will be 0

            Console.WriteLine(depAcc);
            Console.WriteLine(depAcc.CalculateInterest(4));

            LoanAccount loanAcc = new LoanAccount(new Company("Gosho AD"), 3.5M);

            loanAcc.Deposit(123);
            loanAcc.Deposit(5124315.21M);

            Console.WriteLine(loanAcc);
            Console.WriteLine(loanAcc.CalculateInterest(2)); // if the input months are more than 2 the result won't be 0


            MortgageAccount mrgAcc = new MortgageAccount(new Company("Angela"), 1.5M);

            mrgAcc.Deposit(114151);
            mrgAcc.Deposit(154);

            Console.WriteLine(mrgAcc);
            Console.WriteLine(mrgAcc.CalculateInterest(12)); // if the input month is bigger than 12 the result will be 1/2 larger than expected

        }
    }
}
