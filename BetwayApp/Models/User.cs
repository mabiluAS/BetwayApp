namespace BetwayApp.Models
{
    public class User
    {
        [reqired]
        public int Id { get; set; }

        [reqired]
        public string Email { get; set; }
        [reqired]
        public string Password { get; set; }
        [reqired]
        public string Name { get; set; }
        [reqired]
        public string Surname { get; set; }
      
        public string Cellphone { get; set; }

    }
}
