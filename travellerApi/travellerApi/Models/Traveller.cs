namespace travellerApi.Models
{
    public class Traveller
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public List<Destination> Destinations { get; set; }
    }
}
