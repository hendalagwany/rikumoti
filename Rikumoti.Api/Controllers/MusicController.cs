using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MusicController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMusic() 
    {
        var music = new[]
        {
            new{
               id=1,
               imageUrl="images/songs/song1.png"
            },
            new{
               id=2,
               imageUrl="images/songs/song2.png"
            },
            new{
               id=3,
               imageUrl="images/songs/song3.png"
            },
            new{
               id=4,
               imageUrl="images/songs/song4.png"
            },
            new{
               id=5,
               imageUrl="images/songs/Msong.png"
            },
            new{
               id=6,
               imageUrl="images/songs/Rasong.png"
            },
            new{
               id=7,
               imageUrl="images/songs/Rsong.png"
            },
            new{
               id=8,
               imageUrl="images/songs/Tsong.png"
            },
        
        };
        return Ok(music);
    }
}
