namespace TestClasses
{
    using ClassLibGSM;
    using System;
    using System.Collections.Generic;

    public static class GSMCallHistoryTest
    {
        public static void DoHistoryTests()
        {
            GSM phone = new GSM(); // creating an instance of the GSM class

            phone.MakeCall("0887 23 23 53", 20); // Creating a few calls
            phone.MakeCall("0883 52 57 16", 40);
            phone.MakeCall("0883 23 84 29", 15);
            phone.MakeCall("0889 82 52 20", 223);
            phone.MakeCall("0888 28 92 18", 24);

            Console.WriteLine("Call History information: \n");
            phone.PrintCalls();

            decimal price = phone.CalculateCallsPrice(); // printing the sum price of the calls
            Console.WriteLine("Price in total: {0:F2} lv\n", price);

            phone.RemoveMaxDurationCall(); // removing the longes call

            price = phone.CalculateCallsPrice(); // printing the sum price of the calls
            Console.WriteLine("Price in total after removing the call with the longest duration: {0:F2} lv\n", price);

            phone.ClearCalls(); // clearing the history
            phone.PrintCalls();

        }
    }
}
