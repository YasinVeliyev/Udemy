// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// #region  Şərti ifadələr
// Console.WriteLine("Enter age:");
// int age = int.Parse(Console.ReadLine().Trim());
// if (age > 20)
// {
//     Console.WriteLine("Age greate than 20");

// }
// else if (age > 18)
// {
//     Console.WriteLine("Age greate than 18");
// }
// else if (age > 15)
// {
//     Console.WriteLine("Age greate than 15");
// }
// else
// {
//     Console.WriteLine("Age less than or equal 15");
// }
// #endregion

// #region AndOr
// string username = "username";
// string password = "12345";
// Console.WriteLine("Enter username");
// string entered_username = Console.ReadLine().Trim();

// Console.WriteLine("Enter password");
// string entered_password = Console.ReadLine().Trim();

// if (username == entered_username && password == entered_password)
// {
//     Console.WriteLine("welcome");
// }
// else
// {
//     Console.WriteLine("Username or Password incorrect");
// }

// #endregion


// #region Ternary Operator
// int resp = password == entered_password ? 0 : 1;
// Console.WriteLine($"Response {resp}");
// #endregion


// #region Tryparse
// string val = Console.ReadLine();
// int number = int.Parse(val.Trim());
// int.TryParse(val.Trim(), out number);
// #endregion

#region loop
GoTo:
string name = Console.ReadLine();
if (name.Length < 5)
{
    goto GoTo;
}
#endregion