namespace Task3
{
    using System;

    public class InvalidRangeException<T> : Exception
    {
        public T Min { get; private set; }
        public T Max { get; private set; }

        public  InvalidRangeException(string message, T minVal, T maxVal, Exception innerException)
            :base(message, innerException)
        {
            this.Min = minVal;
            this.Max = maxVal;
        }

        public InvalidRangeException(T minVal, T maxVal)
            :this(null, minVal, maxVal, null)
        {

        }
    }
}
