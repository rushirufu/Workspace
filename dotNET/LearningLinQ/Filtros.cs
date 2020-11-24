using System;
using System.Collections.Generic;
using System.Linq;

namespace LearningLinQ
{
    public class Filtros
    {
        #region Filtros
        // Where regesa un conunto de elementos que cumplan la condicion
        // Take regresa el primer elemento n e ignora el resto
        // TakeWhile emite los elementos de la secuencia de entrada que el predicado sea falso
        // SkipeWhile Ignora los elementos de la sencia de entrada hasta que el pedicado sea falso, luego emite el resto
        // Distinct Regresa una secencia que excluye a los duplicados
        #endregion
        string[] postres = { "pay de manzana", "pastel de chocolate", "manzana caramelizada", "fresas con crema", "pay de pera con manzana" };

        public Filtros()
        {
            IEnumerable<string> x = postres.Where((n, i) => i % 2 == 0);
            // IEnumerable<string> xy = postres.Where(a, b);
            // var indice = 
            // from i in postres
            // select i.IndexOf();


            //Console.WriteLine("imprimir");

        }
        public void imprimir()
        {

        }
        IEnumerable<string> x;

    }
}