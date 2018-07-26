using MeMeats.Models.QueryHandler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MeMeats.Controllers
{
    public class RegisterController : Controller
    {
        private QueryResultBuilder _builder = new QueryResultBuilder();
        // GET: Register
        public ActionResult Index()
        {
            return View("Register", "", "");
        }

        [HttpGet]
        public ActionResult Register(string username, string password)
        {
            if(CheckIfUsernameAvailable(username))
            {
            //parameters
            string[] parameters = { "@username", "@password" };
            // param value
            string un = Request.QueryString["usr"];
            string pw = Request.QueryString["pw"];
            string[] values = { un, pw };
            //call query DB
            string content = _builder.GetQueryResult("registerAccount", parameters, values);
            return Content(content);
            }
            else
            {
                return Content(_builder.GetNoResult());
            }
            
        }

        private bool CheckIfUsernameAvailable(string username)
        {
            string[] parameters = { "@username" };
            string[] values = { username };
            string result = _builder.GetQueryResult("checkIfUsernameAvailable", parameters, values);
            
            if(result == "true")
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}