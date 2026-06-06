using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetNews() 
    {
        var news = new[]
        {
            new{
               id=1,
               imageUrl="images/news/new1.png"
            },
            new{
               id=2,
               imageUrl="images/news/new2.png"
            },
            new{
               id=3,
               imageUrl="images/news/new3.png"
            },
            new{
               id=4,
               imageUrl="images/news/new4.png"
            },
            new{
               id=5,
               imageUrl="images/news/new5.png"
            },
            new{
               id=6,
               imageUrl="images/news/new6.png"
            },
            new{
               id=7,
               imageUrl="images/news/new7.png"
            },
            new{
               id=8,
               imageUrl="images/news/new8.png"
            },
            new{
               id=9,
               imageUrl="images/news/new9.png"
            },
            new{
               id=10,
               imageUrl="images/news/new10.png"
            },
            new{
               id=11,
               imageUrl="images/news/new11.png"
            },
            new{
               id=12,
               imageUrl="images/news/new12.png"
            },
           
        
        };
        return Ok(news);
    }
}
