namespace TestClasses
{
    using ClassLibGSM;
    using System;
    using System.Collections.Generic;

    public static class GSMTest
    {
        public static void DoGsmTest()
        {
            List<GSM> testPhones = new List<GSM>(); // creating a few instances of the GSM class and displaying the information about them
            for (int i = 0; i < 2; i++)
            {
                Console.WriteLine(new string('-', Console.WindowWidth));
                testPhones.Add(new GSM());
                Console.WriteLine(testPhones[i]);
                Console.WriteLine(new string('-', Console.WindowWidth));
            }

            Console.WriteLine("Displaying the information about IPhone 4S\n");
            Console.WriteLine(GSM.GetIphone4S);


        }
    }
}
