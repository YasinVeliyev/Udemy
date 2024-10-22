// See https://aka.ms/new-console-template for more information

using System;
using System.Collections;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            double imtahan1;
            double imtahan2;
            double final;
            double nəticə;
            Console.WriteLine("Ders Durumu Hesablama");
            Console.WriteLine("".PadLeft(50, '-'));
            imtahan1 = ImtahanNeticeleriniAl("1-ci imtahanin neticesini daxil edin");
            imtahan2 = ImtahanNeticeleriniAl("2-ci imtahanin neticesini daxil edin");
            final = ImtahanNeticeleriniAl("Final imtahanin neticesini daxil edin");
            nəticə = (imtahan1 + imtahan2 + final) / 3;
            Console.WriteLine($"Sizin nticə {nəticə}.");
            if (nəticə >= 60)
            {
                Console.WriteLine($"İmtahanı keçdiniz");
            }
            else
            {
                Console.WriteLine("İmtahandan kəsildiniz");
            }
        }


        static double ImtahanNeticeleriniAl(string msg)

        {
            Console.WriteLine(msg);
            while (true)
            {

                double rəqəm;
                bool success = double.TryParse(Console.ReadLine().Trim(), out rəqəm);

                if (!success) { Console.WriteLine("Ədəd daxil edin"); }
                else if (rəqəm < 0 || rəqəm > 100)
                {
                    Console.WriteLine("0 və 100 arasında ədəd daxil edin");
                }
                else { return rəqəm; }

            }


        }
    }
}
