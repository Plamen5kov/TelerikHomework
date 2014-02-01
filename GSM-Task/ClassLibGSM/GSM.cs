namespace ClassLibGSM
{
    using System;
    using System.Collections.Generic;

    public class GSM
    {
        #region FIELDS
        private static GSM iPhone = new GSM("iPhone", "Apple", 12.3M, "No owner", "Duracel", 5, 3, BatteryType.LiIon, 4.5, 16000000); // static field

        private string model;
        private string manifacturer;
        private decimal price;
        private string owner;
        private Battery battery;
        private Display display;
        private List<Call> callHistory;
        #endregion


        #region CONSTRUCTORS
        public GSM()
        {
            this.model = "No GSM model";
            this.manifacturer = "No manifacturer";
            this.price = 0;
            this.owner = "No owner";
            this.battery = new Battery();
            this.display = new Display();
            this.callHistory = new List<Call>();
        }

        public GSM(string model, string manifacturer, decimal price, string owner, string batteryModel, ushort batteryHoursIdle, ushort batteryHoursTalk, BatteryType batType, double dispSize, uint dispNumberOfColors)
        {
            this.model = model;
            this.manifacturer = manifacturer;
            this.price = price;
            this.owner = owner;
            this.battery = new Battery(batteryModel, batteryHoursIdle, batteryHoursTalk, batType);
            this.display = new Display(dispSize, dispNumberOfColors);
        }
        #endregion


        #region PROPERTIES

        public static GSM GetIphone4S // static property
        {
            get
            {
                return GSM.iPhone;
            }
        }

        private List<Call> Calls
        {
            get
            {
                return this.callHistory;
            }
            set
            {
                this.callHistory = value;
            }
        }

        public string GsmModel
        {
            get
            {
                return this.model;
            }
            set
            {
                this.model = value;
            }
        }

        public string Manifacturer
        {
            get
            {
                return this.manifacturer;
            }
            set
            {
                this.manifacturer = value;
            }
        }

        public decimal Price
        {
            get
            {
                return this.price;
            }
            set
            {
                while (true) // with validation
                {
                    if (value < 0)
                    {
                        Console.WriteLine("The price of the phone can't be negative:");
                        value = decimal.Parse(Console.ReadLine());
                    }
                    else
                    {
                        break;
                    }
                }
                this.price = value;
            }
        }

        public string Owner
        {
            get
            {
                return this.owner;
            }
            set
            {
                this.owner = value;
            }
        }
        #endregion


        #region METHODS
        public void MakeCall(string number, uint callDuration)
        {
            this.callHistory.Add(new Call(number, callDuration));

        }

        public void RemoveMaxDurationCall()
        {
            int index = 0;
            uint maxDuration = 0;
            for (int i = 0; i < this.Calls.Count; i++)
            {
                uint currentDuration = this.Calls[i].CallDuration;
                if (currentDuration >= maxDuration)
                {
                    maxDuration = currentDuration;
                    index = i;
                }
                
            }

            if (index < 0 || index > this.Calls.Count)
            {
                throw new ArgumentException("The call number you want to delete is not existent");
            }
            this.callHistory.RemoveAt(index);
            
        }

        public void ClearCalls()
        {
            this.callHistory.Clear();
        }

        public decimal CalculateCallsPrice()
        {
            uint callTime = 0;
            foreach (var call in this.callHistory)
            {
                callTime += call.CallDuration;
            }
            decimal callsPrice = 0.006M * callTime;
            return callsPrice;
        }

        public void PrintCalls()
        {
            foreach (var call in this.callHistory) // printing the empty call history
            {
                Console.WriteLine(call);
            }
        }
        #endregion

        public override string ToString() // overriding the ToString() method
        {
            return string.Format("GSM model: {0}\nManifacturer: {1}\nPrice: {2}\nOwner: {3}\n\n{4}\n{5}", this.model, this.manifacturer, this.price, this.owner, this.battery, this.display);
        }


    }
}
