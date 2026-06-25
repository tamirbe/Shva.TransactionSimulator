using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shva.TransactionSimulator.Api.Data;
using Shva.TransactionSimulator.Api.DTOs;
using Shva.TransactionSimulator.Api.Models;

namespace Shva.TransactionSimulator.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public TransactionsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("simulate")]
    public async Task<ActionResult<TransactionResponseDto>> SimulateTransaction(
        TransactionRequestDto request)
    {
        var timeZone = request.Region switch
        {
            "Israel" => "Israel Standard Time",
            "France" => "Romance Standard Time",
            "USA" => "Eastern Standard Time",
            "Japan" => "Tokyo Standard Time",
            "Cyprus" => "E. Europe Standard Time",
            "Italy" => "W. Europe Standard Time",
            _ => null
        };

        if (timeZone is null)
        {
            return BadRequest("Invalid region");
        }

        var localTime = TimeZoneInfo.ConvertTimeFromUtc(
            request.SubmittedUtc,
            TimeZoneInfo.FindSystemTimeZoneById(timeZone));

        var isApproved =
            localTime.Hour >= 8 &&
            localTime.Hour < 18;

        var status = isApproved ? "Approved" : "Rejected";

        var transaction = new Transaction
        {
            Region = request.Region,
            SubmittedUtc = request.SubmittedUtc,
            LocalTime = localTime,
            Status = status
        };

        _context.Transactions.Add(transaction);

        await _context.SaveChangesAsync();

        return Ok(new TransactionResponseDto
        {
            Status = status,
            LocalTime = localTime
        });
    }

    [HttpGet("approved")]
    public async Task<ActionResult<IEnumerable<Transaction>>> GetApprovedTransactions()
    {
        var approvedTransactions = await _context.Transactions
            .Where(t => t.Status == "Approved")
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();

        return Ok(approvedTransactions);
    }
}