using MeMeats.Models.QueryHandler;
using System.Web.Mvc;

namespace MeMeats.Controllers
{
    public class HomeController : Controller
    {
        private QueryResultBuilder _builder = new QueryResultBuilder();
        public ActionResult Index()
        {
            return View("Index", "", _builder.GetNoResult()); 
        }

        [HttpGet]
        public ActionResult GetForSaleItemsByCut(string type)
        {
            //parameters
            string[] parameters = { "@cut" };
            // param value
            string cut = Request.QueryString["type"];
            string[] values = { cut };
            //call query DB
            string content = _builder.GetQueryResult("GetForSaleItemsByCut", parameters, values);
            return Content(content);
        }

    }
}