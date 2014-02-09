namespace Classes.Timer
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;

    // Define a class to hold custom event info 
    public class TimePublisher : EventArgs
    {

        private string message;
        private int seconds;

        public TimePublisher(string msg, int seconds)
        {
            this.Message = msg;
            this.Seconds = seconds;
        }

        public string Message
        {
            get { return message; }
            set { message = value; }
        }

        public int Seconds
        {
            get { return seconds; }
            set { seconds = value; }
        }
    }

    // Class that publishes an event 
    public class Publisher
    {

        // Declare the event 
        public event EventHandler<TimePublisher> RaiseCustomEvent; // EVENT

        public void PublishThrough(int secondsInterval)
        {
            Stopwatch time = new Stopwatch();

            while (true)
            {
                time.Start();
                if (time.ElapsedMilliseconds > (secondsInterval * 1000 - 1) && time.ElapsedMilliseconds < (secondsInterval * 1000 + 1))
                {
                    EventHandler<TimePublisher> handler = RaiseCustomEvent; // PUBLISH EVENT ( RAISE EVENT )
                    if (handler != null)
                    {
                        handler(this, new TimePublisher("Dee Dee Duuummm", secondsInterval));
                    }

                    time.Restart();
                }

            }

            
        }
    }

    public class Subscriber
    {
        private string id;
        public Subscriber(string ID, Publisher pub)
        {
            id = ID;
            pub.RaiseCustomEvent += HandleCustomEvent;
        }

        // Define what actions to take when the event is raised. 
        void HandleCustomEvent(object sender, TimePublisher e)
        {
            Console.WriteLine(id + "will recieve a message every {0} seconds: {1}",e.Seconds, e.Message);
        }
    }
}
