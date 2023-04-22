using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using travellerApi.Data;
using travellerApi.Models;

namespace travellerApi.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class TravellerController : Controller
    {
        private readonly TravellerDbContext _travellerDbContext;
        public TravellerController(TravellerDbContext travellerDbContext)
        {
            this._travellerDbContext = travellerDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllTravellers()
        {
            try
            {
                var travellers = await _travellerDbContext.Travellers.ToListAsync();

                if (travellers == null)
                {
                    return NotFound();
                }

                return Ok(travellers);
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult> GetTraveller([FromRoute] Guid id)
        {
            try
            {
                var traveller = await _travellerDbContext.Travellers.FirstOrDefaultAsync(x => x.Id == id);
                if (traveller == null)
                {
                    return NotFound();
                }

                return Ok(traveller);
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateTraveller([FromBody] Traveller travellerRequest)
        {
            try
            {
                // Deserialize the id property from json object
                string id = travellerRequest.Id.ToString();

                travellerRequest.Id = Guid.NewGuid();

                await _travellerDbContext.Travellers.AddAsync(travellerRequest);
                await _travellerDbContext.SaveChangesAsync();

                return Ok(travellerRequest);
            } catch(Exception ex) { 
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateTraveller([FromRoute] Guid id, [FromBody] Traveller updateTravellerRequest)
        {
            try
            {
                var traveller = await _travellerDbContext.Travellers.FindAsync(id);

                if (traveller == null)
                {
                    return NotFound();
                }

                traveller.Name = updateTravellerRequest.Name;
                traveller.Email = updateTravellerRequest.Email;
                traveller.Phone = updateTravellerRequest.Phone;
                traveller.Destinations = updateTravellerRequest.Destinations;
                
                await _travellerDbContext.SaveChangesAsync();

                return Ok(traveller);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteTraveller([FromRoute] Guid id)
        {
            try
            {
                var traveller = await _travellerDbContext.Travellers.FindAsync(id);

                if (traveller == null)
                {
                    return NotFound();
                }

                // Loop through all destinations with same travellerId in Db and delete them then delete traveller afterwards

                _travellerDbContext.Travellers.Remove(traveller);
                await _travellerDbContext.SaveChangesAsync();

                return Ok(traveller);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
