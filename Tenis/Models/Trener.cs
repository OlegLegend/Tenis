using System.ComponentModel.DataAnnotations.Schema;

namespace EdunovaAPP.Models
{
    public class Trener : Entitet
    {
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
    }
}
