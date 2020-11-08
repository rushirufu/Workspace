namespace apiProject.Models
{
    public class Review
    {
        public int id { get; set; }
        public string Headline { get; set; }
        public string ReviwText { get; set; }
        public int Rating { get; set; }
        public virtual Reviewer ReviewerNP { get; set; }
        public virtual Book BookNP { get; set; }
    }
}