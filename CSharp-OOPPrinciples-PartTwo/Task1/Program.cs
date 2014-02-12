namespace Task1
{
    using System;

    class Program
    {
        static void Main()
        {
            Triangle triangleOne = new Triangle(2, 4);
            Console.WriteLine("The surcace of the triangle is: {0}", triangleOne.CalculateSurface());

            Rectangle recOne = new Rectangle(2, 4);
            Console.WriteLine("The surcace of the rectangle is: {0}", recOne.CalculateSurface());

            Circle circOne = new Circle(5,5);
            Console.WriteLine("The surcace of the circle is: {0:F2}", circOne.CalculateSurface());
        }
    }
}
