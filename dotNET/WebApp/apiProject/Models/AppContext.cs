using Microsoft.EntityFrameworkCore;


namespace apiProject.Models
{
    public class AppContext : DbContext
    {
        public DbSet<Autor> Autors { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=localhost;database=library;user=root;password=password");
        }
    }
}