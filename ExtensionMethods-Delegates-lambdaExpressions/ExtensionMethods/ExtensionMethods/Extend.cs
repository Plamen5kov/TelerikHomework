namespace Classes.ExtensionMethods
{
    using System;
    using System.Collections;
    using System.Text;
    using System.Collections.Generic;
    using Classes.StudentClass;
    using System.Linq;

    public static class Extend
    {
        #region Extending StringBuilder
        public static string Substring(this StringBuilder str, int index, int length)
        {
            if (index > str.Length - 1 || index < 0)
            {
                throw new IndexOutOfRangeException("The index you are trying to rech is not in the array");
            }
            else if (index + length > str.Length)
            {
                throw new IndexOutOfRangeException("You are trying to reach elements out of the string.");
            }

            return str.ToString().Substring(index, length);
        }
        #endregion

        #region Extending IEnumerable
        public static decimal Sum(this IEnumerable ienum)
        {
            decimal result = 0;
            foreach (var item in ienum)
            {
                result += Convert.ToDecimal(item);
            }
            return result;
        }

        public static decimal Product(this IEnumerable ienum)
        {
            decimal result = 1;
            foreach (var item in ienum)
            {
                result *= Convert.ToDecimal(item);
            }
            return result;
        }

        public static decimal Min(this IEnumerable ienum)
        {
            decimal min = decimal.MaxValue;

            foreach (var item in ienum)
            {
                decimal currentMin = Convert.ToDecimal(item);
                if (currentMin < min)
                {
                    min = currentMin;
                }
            }
            return min;
        }

        public static decimal Max(this IEnumerable ienum)
        {
            decimal max = decimal.MinValue;
            foreach (var item in ienum)
            {
                decimal currentMax = Convert.ToDecimal(item);
                if (currentMax > max)
                {
                    max = currentMax;
                }
            }
            return max;
        }

        public static decimal Avg(this IEnumerable ienum)
        {
            decimal average = 0M;
            decimal sum = 0M;
            int count = ienum.Count();

            sum = ienum.Sum();
            average = sum / (decimal)count;
            return average;
        }

        public static int Count(this IEnumerable ienum)
        {
            int count = 0;
            foreach (var item in ienum)
            {
                count++;
            }
            return count;
        }
        #endregion

        #region Extending List<Student>
        public static void StudentsFromGroupTwo(this List<Student> students)
        {
            var studentsGroupTwo = students.OrderBy(st => st.FirstName).Where(st => st.Group.GroupNumber == 2);
            Console.WriteLine("Selected students from group 2.\n");
            studentsGroupTwo.ToList().ForEach(Console.WriteLine);
        }

        public static void StudentsWithExactlyTwoMarks2(this List<Student> students)
        {
            Func<int, bool> marks = x => x.Equals(2);
            var studentsExactlyTwoMarks2 = students.Where(st => st.Marks.Count == 2 && st.Marks.All(marks));
            Console.WriteLine("Selected students with exactly two marks that are 2.\n");
            studentsExactlyTwoMarks2.ToList().ForEach(Console.WriteLine);
        }

        public static string HasLongestName(this List<Student> students)
        {
            int maxLength = 0;
            string maxLengthName = "";
            foreach (var student in students)
            {
                int currentLength = student.FirstName.Length + student.LastName.Length;
                if (maxLength < currentLength)
                {
                    maxLength = currentLength;
                    maxLengthName = student.FirstName + " " + student.LastName;
                }
            }
            return maxLengthName;
        }

        public static void GroupByGroupName(this List<Student> students)
        {
            var groupedStudents = students.OrderBy(st => st.Group.GroupName);
            groupedStudents.ToList().ForEach(Console.WriteLine);
        }

        public static void Print(this List<Student> students)
        {
            foreach (var student in students)
            {
                Console.WriteLine("{0} {1} => {2}", student.FirstName, student.LastName, student.Group.GroupName);
            }
        }
        #endregion

        #region Ienum and Igroup PRINTING redefinded
        public static void Print(this IEnumerable<IGrouping<string, Student>> students)
        {
            foreach (var student in students)
            {
                student.Print();
            }
        }

        public static void Print(this IGrouping<string, Student> students)
        {
            foreach (var student in students)
            {
                Console.WriteLine("{0} {1} -> {2}", student.FirstName, student.LastName, student.Group.GroupName);
            }
        }
        #endregion
    }
}
