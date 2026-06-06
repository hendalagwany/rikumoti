using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoiceActingController : ControllerBase
{
    [HttpGet]
    public IActionResult GetVoiceActing() 
    {
        var character = new[]
        {
            new{
               id=1,
               imageUrl="images/voice/myuki-voice.png"
            },
            new{
               id=2,
               imageUrl="images/voice/myuki-voice2.png"
            },
            new{
               id=3,
               imageUrl="images/voice/myuki-voice3.png"
            },
            new{
               id=4,
               imageUrl="images/voice/ranmoki-voice.png"
            },
            new{
               id=5,
               imageUrl="images/voice/ranmoki-voice2.png"
            },
            new{
               id=6,
               imageUrl="images/voice/ranmoki-voice3.png"
            },
            new{
               id=7,
               imageUrl="images/voice/riku-voice.png"
            },
            new{
               id=8,
               imageUrl="images/voice/riku-voice2.png"
            },
            new{
               id=9,
               imageUrl="images/voice/riku-voice3.png"
            },
            new{
               id=10,
               imageUrl="images/voice/toti-voice.png"
            },
            new{
               id=11,
               imageUrl="images/voice/toti-voice2.png"
            },
            new{
               id=12,
               imageUrl="images/voice/toti-voice3.png"
            },
           
        
        };
        return Ok(character);
    }
}
