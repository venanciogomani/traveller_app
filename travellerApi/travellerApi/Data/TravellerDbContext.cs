using Microsoft.EntityFrameworkCore;
using travellerApi.Models;

namespace travellerApi.Data
{
    public class TravellerDbContext : DbContext
    {
        public TravellerDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Traveller> Travellers { get; set; }
        public DbSet<Destination> Destinations { get; set; }
    }
}
