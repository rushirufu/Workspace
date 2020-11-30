using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options)
        {

        }


        public DbSet<ParqueNacional> ParquesNacionales { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // if (!optionsBuilder.IsConfigured)
            // {
            //     optionsBuilder.UseMySQL("server=localhost;port=3306;user=userdb;password=password;database=MyDatabase");
            // }
        }
    }
}

