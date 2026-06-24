namespace Shva.TransactionSimulator.Api.Models
{
    public class Transaction
    {
        public int Id { get; set; }

        public string Region { get; set; } = string.Empty;

        public DateTime SubmittedUtc { get; set; }

        public DateTime LocalTime { get; set; }

        public string Status { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
