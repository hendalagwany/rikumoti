using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GalleryController : ControllerBase
{
    [HttpGet]
    public IActionResult GetImages() 
    {
        var images = new[]
        {
            new{
               id=1,
               imageUrl="images/gallery/3bs.png"
            },
            new{
               id=2,
               imageUrl="images/gallery/4bs.png"
            },
            new{
               id=3,
               imageUrl="images/gallery/at stage.png"
            },
            new{
               id=4,
               imageUrl="images/gallery/img.png"
            },
            new{
               id=5,
               imageUrl="images/gallery/interview.png"
            },
            new{
               id=6,
               imageUrl="images/gallery/main-photo.png"
            },
            new{
               id=7,
               imageUrl="images/gallery/MR.png"
            },
            new{
               id=8,
               imageUrl="images/gallery/picnic.png"
            },
            new{
               id=9,
               imageUrl="images/gallery/radio.png"
            },
            new{
               id=10,
               imageUrl="images/gallery/street.png"
            },
            new{
               id=11,
               imageUrl="images/gallery/t-bs.png"
            },
            new{
               id=12,
               imageUrl="images/gallery/training-at-home.png"
            },
            new{
               id=13,
               imageUrl="images/gallery/training.png"
            },
            new{
               id=14,
               imageUrl="images/gallery/VA2.png"
            },
            new{
               id=15,
               imageUrl="images/gallery/voice-acting.png"
            },
            new{
               id=16,
               imageUrl="images/gallery/VoiceActing.png"
            },
            new{
               id=17,
               imageUrl="images/gallery/VoiceActing2.png"
            },
            new{
               id=18,
               imageUrl="images/gallery/VoiveActing.png"
            },
        
        };
        return Ok(images);
    }
}
