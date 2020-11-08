using Microsoft.AspNetCore.Mvc;

namespace apiProject.Controller
{
    public class HomeController
    {

        [HttpGet]
        public ActionResult Index()
        {
            return ViewResult();

        }
    }

}