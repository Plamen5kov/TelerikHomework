namespace Task3
{
    using System;

    class Program
    {
        static void Main()
        {
            EnterIntNumber();

            Console.WriteLine();

            EnterDate();
        }

        public static void EnterIntNumber()
        {
            const int _minNum = 0;
            const int _maxNum = 100;

            Console.WriteLine("Please enter a number between ({0}, {1})", _minNum, _maxNum);
            try
            {
                int input = int.Parse(Console.ReadLine());

                if (input < _minNum || input > _maxNum)
                {
                    throw new InvalidRangeException<int>(_minNum, _maxNum);
                }

                Console.WriteLine("The number you entered is: {0}", input);
            }
            catch (InvalidRangeException<int> e)
            {
                Console.WriteLine("The number is out of range ({0},{1}) Exception. {2}", e.Min, e.Max);
            }
        }

        public static void EnterDate()
        {
            DateTime _minDate = new DateTime(1980, 1,1);
            DateTime _maxDate = new DateTime(2013, 12, 31);

            Console.WriteLine("Please enter a date between ({0}, {1})", _minDate, _maxDate);
            try
            {
                DateTime input = DateTime.Parse(Console.ReadLine());

                if (input < _minDate || input > _maxDate)
                {
                    throw new InvalidRangeException<DateTime>(_minDate, _maxDate);
                }

                Console.WriteLine("The date you entered is: {0:d}", input.Date);
            }
            catch (InvalidRangeException<DateTime> e)
            {
                Console.WriteLine("The date is out of range ({0},{1}) Exception.", e.Min.ToShortDateString(), e.Max.ToShortDateString());
            }
        }
    }
}
