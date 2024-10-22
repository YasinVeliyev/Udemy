// See https://aka.ms/new-console-template for more information
using System;
namespace ConsoleApp
{
    class Program
    {


        static void Main(string[] args)
        {
            Telefon tel = new Telefon();
            tel.Selamla();
        }
        public class Telefon
        {
            private string marka;
            private double qiymet;

            public void Selamla()
            {
                Console.WriteLine("Selamla");
            }
            public Telefon()
            {

            }
            public Telefon(string marka, double price)
            {

                this.marka = marka;
                this.qiymet = price;
            }
        }




    }
}



