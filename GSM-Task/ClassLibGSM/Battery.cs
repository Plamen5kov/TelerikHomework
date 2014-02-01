namespace ClassLibGSM
{
    using System;

    public enum BatteryType
    {
        NoBatteryType = 0,
        LiIon = 1,
        NiMH = 2,
        NiCd = 3,
    }

    internal class Battery
    {
        private string model;
        private ushort hoursIdle;
        private ushort hoursTalk;
        private BatteryType batType;

        public Battery()
        {
            this.model = "No battery model";
            this.hoursIdle = 0;
            this.hoursTalk = 0;
            this.batType = BatteryType.NoBatteryType;
        }

        public Battery(string model, ushort hoursIdle, ushort hoursTalk, BatteryType batType)
        {
            this.model = model;
            this.hoursIdle = hoursIdle;
            this.hoursTalk = hoursTalk;
            this.batType = batType;
        }

        public string BatteryModel
        {
            get
            {
                return this.model;
            }
            set // with validation
            {
                while (true)
                {
                    if (value.Length < 4)
                    {
                        Console.WriteLine("The battery model should be at least  3 letters");
                        value = Console.ReadLine();
                    }
                    else
                    {
                        break;
                    }
                }
                this.model = value;
            }
        }

        public ushort HoursIdle
        {
            get
            {
                return this.hoursIdle;
            }
            set
            {
                while (true) // with validation
                {
                    if (value > ushort.MaxValue)
                    {
                        Console.WriteLine("Hours idle need to be less than what you entered:");
                        value = ushort.Parse(Console.ReadLine());
                    }
                    else
                    {
                        break;
                    }
                }
                this.hoursIdle = value;
            }
        }

        public ushort HoursTalk
        {
            get
            {
                return this.hoursTalk;
            }
            set
            {
                while (true) // with validation
                {
                    if (value < 0)
                    {
                        Console.WriteLine("Hours talk must be positive:");
                        value = ushort.Parse(Console.ReadLine());
                    }
                    else
                    {
                        break;
                    }
                }
                this.hoursIdle = value;
            }
        }

        public override string ToString() // overriden ToString() method
        {
            return string.Format("Battery model: {0}\nBattery hours(idle): {1}\nBattery hours (talk): {2}\nBattery type: {3}\n", this.model, this.hoursIdle, this.hoursTalk, this.batType);
        }



    }
}
