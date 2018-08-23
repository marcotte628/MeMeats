using MeMeats.Models.QueryHandler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MeMeats.Controllers
{
    public class LoginController : Controller
    {
        private QueryResultBuilder _builder = new QueryResultBuilder();
        // GET: Login
        public ActionResult Index()
        {
            return View("Login", "", "");
        }

        [HttpGet]
        public ActionResult Login(string username, string password)
        {
            //parameters
            string[] parameters = { "@username", "@password" };
            // param value
            string un = Request.QueryString["usr"];
            string pw = Request.QueryString["pw"];
            string[] values = { un, pw };
            //call query DB
            string content = _builder.GetQueryResult("FindAccountByUsernamePassword", parameters, values);
            return Content(content);
        }
    }
}