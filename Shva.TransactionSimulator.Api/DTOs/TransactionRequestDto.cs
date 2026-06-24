namespace Shva.TransactionSimulator.Api.DTOs
{
    public class TransactionRequestDto
    {
        public string Region { get; set; } = string.Empty;

        public DateTime SubmittedUtc { get; set; }
    }
}
