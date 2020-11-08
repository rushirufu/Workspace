using System;
using System.Collections.Generic;

namespace apiProject.Models
{
    public class Book
    {
        public int id { get; set; }
        public string Isbn { get; set; }
        public string Title { get; set; }
        public DateTime Published { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}