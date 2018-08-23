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
        public ActionResult Register()
        {
            string username = Request.QueryString["usr"];
            string passwword = Request.QueryString["pw"];
            string email = Request.QueryString["em"];
            string type = Request.QueryString["tp"];

            if (IsAccountInfoAvailable(username, passwword))
            {
            //parameters
            string[] parameters = { "@username", "@email", "@password", "@type" };
            // param value
            string[] values = { username, email, passwword, type };
            //call query DB
            string content = _builder.GetQueryResult("SaveNewAccount", parameters, values);
            return Content(content);
            }
            else
            {
                return Content(null);//_builder.GetNoResult());
            }
            
        }

        private bool IsAccountInfoAvailable(string username, string email)
        {
            string[] parameters = { "@username", "@email" };
            string[] values = { username, email  };
            string result = _builder.GetQueryResult("IsAccountInfoAvailable", parameters, values);
            
            if(result == "[]")
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