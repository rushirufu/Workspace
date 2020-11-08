using System.Collections.Generic;

namespace apiProject.Models
{
    public class Country
    {
        public int ind { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Autor> AutorsNP { get; set; }
    }
}