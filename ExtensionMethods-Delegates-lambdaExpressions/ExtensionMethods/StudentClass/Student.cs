namespace Classes.StudentClass
{
    using System;
    using System.Collections.Generic;

    public class Student
    {
        private const string defaultEmail = "";
        private const string defaultTel = "";
        private const string defaultFN = "000000";

        private readonly string firstName;
        private readonly string lastName;
        private int age;
        private string fn;
        private string tel;
        private string eMail;
        private List<int> marks;
        private Group group;

        #region Constructors
        public Student(string firstName, string lastName, int age)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.Age = age;
            this.FN = defaultFN;
            this.tel = defaultTel;
            this.eMail = defaultEmail;
            this.marks = new List<int>() { 2};
            this.group  = new Group();
        }

        public Student(string firstName, string lastName, int age, string fn, Group group, string tel, string eMail, List<int> marks)
            : this(firstName, lastName, age)
        {
            this.FN = fn;
            this.Tel = tel;
            this.EMail = eMail;
            this.Marks = marks;
            this.Group.GroupNumber = group.GroupNumber;
            this.Group.GroupName = group.GroupName;
        }
        #endregion

        #region Properties
        public string FirstName
        {
            get
            {
                return this.firstName;
            }
        }

        public string LastName
        {
            get
            {
                return this.lastName;
            }
        }

        public int Age
        {
            get
            {
                return this.age;
            }
            set
            {
                if (value < 1 || value > 130)
                {
                    throw new ArgumentException("Age must be a positive number between 1 and 130");
                }
                this.age = value;
            }
        }

        public string FN
        {
            get
            {
                return this.fn;
            }
            set
            {
                if (value.Length != 6)
                {
                    throw new ArgumentException("The Fac number has to have exactly 6 digits");
                }
                this.fn = value;
            }
        }

        public string Tel
        {
            get
            {
                return this.tel;
            }
            set
            {
                if (value.Length > 10)
                {
                    throw new ArgumentException("No phone is larger than 10 digits(Example for restriction)");
                }
                else if (value.Length < 5)
                {
                    throw new ArgumentException("The tel needs to have at least 5 digits");
                }
                this.tel = value;
            }
        }

        public string EMail
        {
            get
            {
                return this.eMail;
            }
            set
            {
                this.eMail = value;
            }
        }

        public List<int> Marks
        {
            get
            {
                return this.marks;
            }
            set
            {
                if (value == null)
                {
                    value = new List<int> { 2 };
                }
                foreach (var mark in value)
                {
                    if (mark < 2 || mark > 6)
                    {
                        throw new ArgumentException("The mark must be between 2 and 6");
                    }
                }
                this.marks = value;
            }
        }

        public Group Group
        {
            get
            {
                return this.group;
            }
            set
            {
                this.group = value;
            }
        }
        #endregion

        #region Methods
        public bool FirstNameIsBeforeLast
        {
            get
            {
                for (int letter = 0; letter < Math.Min(this.FirstName.Length, this.LastName.Length); letter++)
                {
                    if (this.FirstName[letter] == this.LastName[letter])
                    {
                        continue;
                    }
                    else if (this.FirstName[letter] < this.LastName[letter])
                    {
                        return true;
                    }
                    else
                    {
                        break;
                    }
                }
                return false;
            }
        }
        
        public override string ToString()
        {
            return string.Format("{0} {1}", this.FirstName, this.LastName);
        }
        #endregion
    }
}
