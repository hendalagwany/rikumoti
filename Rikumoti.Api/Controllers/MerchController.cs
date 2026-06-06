using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MerchController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMerch() 
    {
        var merch = new[]
        {
            new{
               id=1,
               imageUrl="images/merch/product1.png"
            },
            new{
               id=2,
               imageUrl="images/merch/product2.png"
            },
            new{
               id=3,
               imageUrl="images/merch/product3.png"
            },
            new{
               id=4,
               imageUrl="images/merch/product4.png"
            },
            new{
               id=5,
               imageUrl="images/merch/product5.png"
            },
            new{
               id=6,
               imageUrl="images/merch/product6.png"
            },
            new{
               id=7,
               imageUrl="images/merch/product7.png"
            },
            new{
               id=8,
               imageUrl="images/merch/product8.png"
            },
            new{
               id=9,
               imageUrl="images/merch/product9.png"
            },
            new{
               id=10,
               imageUrl="images/merch/product10.png"
            },
            new{
               id=11,
               imageUrl="images/merch/product11.png"
            },
            new{
               id=12,
               imageUrl="images/merch/product12.png"
            },
           
        
        };
        return Ok(merch);
    }
}
