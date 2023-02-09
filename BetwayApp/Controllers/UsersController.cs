using BetwayApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using System.Text.Json;

namespace BetwayApp.Controllers
{
    
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _repository;

        public UsersController(IUsersRepository repository)
        {
            _repository = repository;
        }

        [Route("api/register")]
        [HttpPost]
        public void Register(User user)
        {
           _repository.Register(user);
        }

        [Route("api/login")]
        [HttpPost]
        public JsonResult Login(string email, string password)
        {
           return new JsonResult(_repository.Login(email, password),
                new JsonSerializerOptions { PropertyNamingPolicy = null });

        }
    }
}
