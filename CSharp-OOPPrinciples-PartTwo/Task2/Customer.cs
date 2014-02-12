namespace Task2
{
    using System;

    public abstract class Customer
    {
        private string name;

        public Customer(string name)
        {
            this.Name = name;
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            set 
            {
                if (value.Length < 3)
                {
                    throw new ArgumentException("The name has to be at least 3 letters long");
                }
                this.name = value; 
            }
        }

    }
}
