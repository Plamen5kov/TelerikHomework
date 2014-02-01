namespace MobilePhone
{
    using ClassLibGSM;
    using System;
    using TestClasses;
    
    class MainProgram
    {
        static void Main(string[] args)
        {
            Console.Write("What test do you want to do?\n1. GSM Test\n2.GSM Call History Test\n");
            int choise = 0;
            do
            {
                Console.WriteLine("Press 1 or 2 ... ");
                choise = int.Parse(Console.ReadLine());
                Console.Clear();

            } while (choise != 1 && choise != 2); // makes sure the user enters 1 or 2

            switch (choise)
            {
                case 1: GSMTest.DoGsmTest(); break;
                case 2: GSMCallHistoryTest.DoHistoryTests(); break;
                default:
                    break;
            }
            
            
        }
    }
}
