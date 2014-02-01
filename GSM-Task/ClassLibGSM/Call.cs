namespace ClassLibGSM
{
    using System;

    internal class Call

    {
        private DateTime date;
        private string phoneNumber;
        private uint callDuration;

        public Call(string phoneNumber, uint callDuration)
        {
            this.date = DateTime.Now;
            this.phoneNumber = phoneNumber;
            this.callDuration = callDuration;
        }

        public uint CallDuration
        {
            get
            {
                return this.callDuration;
            }
        }

        public string NumberToCall
        {
            get
            {
                return this.phoneNumber;
            }
        }

        public DateTime CallDate
        {
            get
            {
                return this.date;
            }
        }

        public override string ToString()
        {
             return this.CallDuration.ToString();
        }

    }
}
