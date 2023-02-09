using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace BetwayApp.Models
{
    public class BetwayContext: DbContext
    {
        public BetwayContext(DbContextOptions<BetwayContext> options) : base() { }
        public DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder { DataSource = "BetwayApp.db" };
            var connectionString = connectionStringBuilder.ToString();
            var connection = new SqliteConnection(connectionString);

            optionsBuilder.UseSqlite(connection);
        }
    }
}
