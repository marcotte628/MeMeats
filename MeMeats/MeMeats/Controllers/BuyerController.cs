using MeMeats.Models.QueryHandler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MeMeats.Controllers
{
    public class BuyerController : Controller
    {
        private QueryResultBuilder _builder = new QueryResultBuilder();

        // GET: Buyer
        public ActionResult Index()
        {
            return View("Buyer", "", "");
        }

        [HttpGet]
        public ActionResult GetAllUserData()
        {
            //parameters
            string[] parameters = { "@userid" };
            // param value
            string uid = Request.QueryString["uid"];
            string[] values = { uid };
            //call query DB
            string content = _builder.GetQueryResult("GetAccountInfoByUserID", parameters, values);
            return Content(content);
        }
    }
}