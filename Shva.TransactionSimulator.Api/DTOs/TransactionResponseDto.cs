namespace Shva.TransactionSimulator.Api.DTOs
{
    public class TransactionResponseDto
    {
        public string Status { get; set; } = string.Empty;

        public DateTime LocalTime { get; set; }
    }
}
