namespace Classes.StudentClass
{

    public class Group
    {
        private const uint defaultGNum = 0;
        private const string defaultGName = "No group";

        private uint groupNumber;
        private string groupName;

        public Group()
        {
            this.GroupNumber = defaultGNum;
            this.GroupName = defaultGName;
        }
        public Group (uint groupNumber, string groupName)
        {
            this.GroupNumber = groupNumber;
            this.GroupName = groupName;
        }

        public uint GroupNumber
        {
            get
            {
                return this.groupNumber; 
            }
            set 
            {
                this.groupNumber = value; 
            }
        }
        public string GroupName
        {
            get
            {
                return this.groupName;
            }
            set
            {
                this.groupName = value;
            }
        }
        
    }
}
