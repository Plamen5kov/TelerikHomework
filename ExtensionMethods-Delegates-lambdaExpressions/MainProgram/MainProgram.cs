using Classes.ExtensionMethods;
using Classes.StudentClass;
using Classes.Timer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class MainProgram
{
    static void Main()
    {
        /*
        // task 1
        #region StringBuilderExtension
        StringBuilder strB = new StringBuilder();
        strB.Append("012345678");

        string result = strB.Substring(0, 6);
        Console.WriteLine("Substring test.\n");
        Console.WriteLine(result);
        #endregion

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 2
        #region IEnumerableExtension
        IEnumerable<int> ienum = new[] { 1, 2, 3, 4, 5, };
        decimal resultIenum;

        resultIenum= ienum.Sum();
        resultIenum = ienum.Product();
        resultIenum = ienum.Min();
        resultIenum = ienum.Max();
        resultIenum = ienum.Avg();
        Console.WriteLine("Extension test: \n");
        Console.WriteLine(resultIenum);
        #endregion

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 3, 4, 5, 9 are about students
        #region Students
        List<Student> students = new List<Student>() 
        {
            new Student("John", "Doe", 18),
            new Student("Jane", "Doe", 24),
            new Student("Michael", "Johnson", 54, "230206", new Group(2, "Mathematics"), "12783612", "aaaaaaaa@abv.bg", new List<int>(){2,3,6}),
            new Student("Bob", "Branklin", 25),
            new Student("Bart", "Beklina", 26, "230312", new Group(2, "Mathematics"), "0112783612", "aaaaaaaa@abva.bg", new List<int>(){2,6,4}),
            new Student("Clay", "Woodly", 17),
            new Student("Steven", "Abbel", 22, "230406", new Group(2, "Phisics"), "0212783612", "aaaaaaaa@abv.bg", new List<int>(){2,2}),
        };
        // task 3
        var firstNameIsSmaller = students.FindAll(st => st.FirstNameIsBeforeLast);
        Console.WriteLine("Students who's the first name is before the last name alphabeticaly.\n");
        firstNameIsSmaller.ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        // task 4
        var ageSpecified = students.FindAll(st => (st.Age >= 18 && st.Age <= 24));
        Console.WriteLine("Student with age between 18 and 24.\n");
        ageSpecified.ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        // task 5
        var sortedStudents = students.OrderByDescending(st => st.FirstName).ThenBy(st => st.LastName);
        Console.WriteLine("Sorted students.\n");
        sortedStudents.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 9
        var studentsGroupTwo = students.OrderBy(st => st.FirstName).Where(st => st.Group.GroupNumber == 2);
        Console.WriteLine("Selected students from group 2.\n");
        studentsGroupTwo.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 10
        students.StudentsFromGroupTwo();

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 11
        var abvBgStudents = students.Where(st => st.EMail.Contains("abv.bg"));
        Console.WriteLine("Selected students with accounts in abv.bg\n");
        abvBgStudents.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 12
        var studentsWithTelInSofia = students.Where(st => st.Tel.IndexOf("02", 0) != -1);
        Console.WriteLine("Selected students with phones in Sofia\n");
        studentsWithTelInSofia.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 13
        var studentsWithExcelentMarks = students.Where(st => st.Marks.Contains(6))
                                                .Select(st => new   
                                                    {
                                                        FullName = string.Format("{0} {1}", st.FirstName, st.LastName),
                                                        Marks = string.Join(",", st.Marks)
                                                    });
        Console.WriteLine("Selected students with at least one excelent mark\n");
        studentsWithExcelentMarks.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 14
        students.StudentsWithExactlyTwoMarks2();

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 15
        var studentsEnrolled06 = students.Where(st => st.FN.IndexOf("06", 4) != -1)
                                        .Select(st => new 
                                            {
                                                FullName = st.FirstName + " " + st.LastName,
                                                Marks = string.Join(",", st.Marks)
                                            });
        Console.WriteLine("Selected students wich enrolled in 2006.\n");
        studentsEnrolled06.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 16
        var studentsGroupMathematics = students.Where(st => st.Group.GroupName.IndexOf("Mathematics") != -1);
        Console.WriteLine("Students that are in the group \"Mathematics\".\n");
        studentsGroupMathematics.ToList().ForEach(Console.WriteLine);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 17
        string studentWithLongestName = students.HasLongestName();
        Console.WriteLine("The student with the longest name:");
        Console.WriteLine(studentWithLongestName);

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 18
        var groupedStudents = students.GroupBy(st => st.Group.GroupName);
        Console.WriteLine("Grouped students by group name.\n");
        groupedStudents.Print();

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 19
        Console.WriteLine("Grouped students by group name.\n");
        students.GroupByGroupName();
        #endregion

        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 7
        Timer.Do doSmth = Timer.Print; // pring has endles loop
        //doSmth("DeeDee DUUM", 1); // delegate(msg, interval(in seconds))



        Console.WriteLine(new string('-', Console.WindowWidth));
        //task 6
        int[] arr = new int[] { 1, 3, 7, 21, 22, 42 };
        var devisableBy = arr.Where(num => (num % 7 == 0 && num % 3 == 0));
        Console.WriteLine("Devisable by 7 and by 3 at the same time: \n");
        devisableBy.ToList().ForEach(Console.WriteLine);
        */

        // task 8
        Publisher pub = new Publisher();
        Subscriber sub1 = new Subscriber("sub1", pub);

        pub.PublishThrough(2); // publish event through one second
    }
}