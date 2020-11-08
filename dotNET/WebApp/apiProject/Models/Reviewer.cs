using System.Collections.Generic;

namespace apiProject.Models
{
    public class Reviewer
    {
        public int id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual ICollection<Review> ReviewsNP { get; set; }
    }
}