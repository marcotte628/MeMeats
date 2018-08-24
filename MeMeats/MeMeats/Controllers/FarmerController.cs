using MeMeats.Models.QueryHandler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MeMeats.Controllers
{
    public class FarmerController : Controller
    {
        private QueryResultBuilder _builder = new QueryResultBuilder();

        // GET: Farmer
        public ActionResult Index()
        {
            return View("Farmer", "", _builder.GetNoResult());
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

        [HttpGet]
        public ActionResult GetAllForSaleItemsForUserID()
        {
            //parameters
            string[] parameters = { "@userID" };
            // param value
            string uid = Request.QueryString["uid"];
            string[] values = { uid };
            //call query DB
            string content = _builder.GetQueryResult("GetAllForSaleItemsForUserID", parameters, values);
            return Content(content);
        }

        [HttpGet]
        public ActionResult GetForSaleItemsByCutAndID()
        {
            //parameters
            string[] parameters = { "@cut", "@userID" };
            // param value
            string uid = Request.QueryString["uid"];
            string type = Request.QueryString["type"];
            string[] values = { type, uid };
            //call query DB
            string content = _builder.GetQueryResult("GetForSaleItemsByCutAndID", parameters, values);
            return Content(content);
        }
    }
}