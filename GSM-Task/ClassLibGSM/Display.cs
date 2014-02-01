namespace ClassLibGSM
{
    using System;

    internal class Display
    {
        private double size;
        private uint numberOfColors;

        public Display() // default constructor
        {
            this.size = 0;
            this.numberOfColors = 256;
        }

        public Display(double size, uint numberOfColors) // constructor which takes two arguments
        {
            this.Size = size;
            this.numberOfColors = numberOfColors;
        }

        public double Size // property to get and set Size with validators
        {
            get
            {
                return this.size;
            }
            set
            {
                while (value < 0)
                {
                    Console.WriteLine("Enter a size of the display ( it must be a positive number)");
                    value = int.Parse(Console.ReadLine());
                }
                this.size = value;
            }
        }

        public uint NumberOfColors // property to get and set Number of display colors
        {
            get
            {
                return this.numberOfColors;
            }
            set
            {
                this.numberOfColors = value;
            }
        }

        public override string ToString() // overriden ToString() method
        {
            return string.Format("Display size: {0}\nDisplay colors: {1}\n", this.size, this.numberOfColors);
        }
    }
}
