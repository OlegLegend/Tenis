using EdunovaAPP.Data;
using EdunovaAPP.Models;
using Microsoft.AspNetCore.Mvc;

namespace EdunovaAPP.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TrenerController : ControllerBase
    {
        // dependency injection
        // 1. definirati privatno svojstvo
        private readonly EdunovaContext _context;

        // dependecy injection
        // 2. proslijediš instancu kroz konstruktor
        public TrenerController(EdunovaContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Treneri);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Treneri.Find(sifra));
        }



        [HttpPost]
        public IActionResult Post(Trener e)
        {
            _context.Treneri.Add(e);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, e);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Trener e) 
        {
            var eb = _context.Treneri.Find(e);

            // za sada ručno, kasnije mapper
            eb.Ime=e.Ime;
            eb.Prezime=e.Prezime;

            _context.Treneri.Update(eb);
            _context.SaveChanges();

            return Ok(new {poruka = "Uspješno promjenjeno"});
        
        }



        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var smjerBaza = _context.Treneri.Find(sifra);

            _context.Treneri.Remove(smjerBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });

        }


    }
}
