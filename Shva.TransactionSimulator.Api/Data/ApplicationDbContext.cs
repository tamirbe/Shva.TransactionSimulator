using Microsoft.EntityFrameworkCore;
using Shva.TransactionSimulator.Api.Models;

namespace Shva.TransactionSimulator.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Transaction> Transactions => Set<Transaction>();
    }
}
