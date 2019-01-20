using avt.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace avt.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Employee> Employees { get; set; }
    }
}