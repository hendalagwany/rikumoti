using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MembersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMembers()
    {
        var members = new[]
        {
            new{
               id=1,
               imageUrl="images/members/M-voiceacting.png"
            },
            new{
               id=2,
               imageUrl="images/members/Ra-voiceacting.png"
            },
            new{
               id=3,
               imageUrl="images/members/R-voiceacting.png"
            },
            new{
               id=4,
               imageUrl="images/members/T-voiceacting.png"
            },
            new{
               id=5,
               imageUrl="images/members/MCharacterDetails.png"
            },
            new{
               id=6,
               imageUrl="images/members/RaCharacterDetails.png"
            },
            new{
               id=7,
               imageUrl="images/members/RCharacterDetails.png"
            },
            new{
               id=8,
               imageUrl="images/members/TCharacterDetails.png"
            }
        };
        return Ok(members);
    }
}
