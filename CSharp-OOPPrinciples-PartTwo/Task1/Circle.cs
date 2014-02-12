namespace Task1
{
    using System;

    public class Circle : Shape
    {
        public Circle(double width, double height)
            : base(width, height)
        {
            if (width != height)
            {
                throw new ArgumentException("The width and height of the circle have to be equal.");
            }
        }

        public override double CalculateSurface()
        {
            return (Math.PI * (this.Width / 2) * (this.Width / 2));
        }
    }
}
