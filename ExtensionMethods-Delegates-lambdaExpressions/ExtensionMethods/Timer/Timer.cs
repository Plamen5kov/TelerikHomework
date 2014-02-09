namespace Classes.Timer
{
    using System;
    using System.Diagnostics;

    public static class Timer
    {
        public delegate void Do(string str, int number);

        public static void Print(string message, int seconds)
        {
            Stopwatch time = new Stopwatch();

            while (true)
            {
                time.Start();
                if (time.ElapsedMilliseconds > (seconds * 1000 - 1) && time.ElapsedMilliseconds < (seconds * 1000 + 1))
                {
                    Console.WriteLine("Message: {0}", message);
                    time.Restart();
                }
                
            }
        }
    }
}
