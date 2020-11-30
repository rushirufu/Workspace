using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class ParqueNacional
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string Nombre { get; set; }
        public string Estado { get; set; }
        public DateTime Creado { get; set; }
        public DateTime Establecido { get; set; }
    }
}