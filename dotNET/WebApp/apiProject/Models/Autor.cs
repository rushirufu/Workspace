namespace apiProject.Models
{
    public class Autor
    {
        public int id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual Country CountryNP { get; set; }
    }
}