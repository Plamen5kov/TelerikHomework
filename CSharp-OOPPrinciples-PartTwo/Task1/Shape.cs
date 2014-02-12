namespace Task1
{
    using System;

    public abstract class Shape
    {
        private double width;
        private double height;

        public Shape(double width, double height)
        {
            this.Width = width;
            this.Height = height;
        }

        public double Width
        {
            get
            {
                return this.width;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The width can't be a negative number. Exception");
                }
                if (value > double.MaxValue)
                {
                    throw new ArgumentException(string.Format("The width can't be bigger than: {0}", double.MaxValue));
                }
                else
                {
                    this.width = value;
                }
            }
        }

        public double Height
        {
            get
            {
                return this.height;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("The height can't be a negative number. Exception");
                }
                if (value > double.MaxValue)
                {
                    throw new ArgumentException(string.Format("The height can't be bigger than: {0}", double.MaxValue));
                }
                else
                {
                    this.height = value;
                }
            }
        }

        public abstract double CalculateSurface();
    }
}
