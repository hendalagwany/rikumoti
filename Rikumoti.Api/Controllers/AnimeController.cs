using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnimeController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAnime() 
    {
        var anime = new[]
        {
            new{
               id=1,
               imageUrl="images/anime/anime1.png"
            },
            new{
               id=2,
               imageUrl="images/anime/anime2.png"
            },
            new{
               id=3,
               imageUrl="images/anime/anime3.png"
            },
            new{
               id=4,
               imageUrl="images/anime/anime4.png"
            },
            new{
               id=5,
               imageUrl="images/anime/anime5.png"
            },
            new{
               id=6,
               imageUrl="images/anime/anime6.png"
            },
            new{
               id=7,
               imageUrl="images/anime/anime7.png"
            },
            new{
               id=8,
               imageUrl="images/anime/anime8.png"
            },
            new{
               id=9,
               imageUrl="images/anime/anime9.png"
            },
            new{
               id=10,
               imageUrl="images/anime/anime10.png"
            },
            new{
               id=11,
               imageUrl="images/anime/anime11.png"
            },
            new{
               id=12,
               imageUrl="images/anime/anime12.png"
            },
           
        
        };
        return Ok(anime);
    }
}
