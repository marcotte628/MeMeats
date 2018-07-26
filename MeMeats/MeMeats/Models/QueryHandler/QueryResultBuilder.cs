using System.Collections.Generic;
using System.Data;

namespace MeMeats.Models.QueryHandler
{
    public class QueryResultBuilder
    {
        private ResultParser resultParser = new ResultParser();
        private SqlHandler sqlHandler;

        private Dictionary<string, string> AccountData = new Dictionary<string, string>();
        private Dictionary<string, string> AccountTypes = new Dictionary<string, string>();
        private Dictionary<string, string> ForSale = new Dictionary<string, string>();

        public string GetQueryResult(string procedureName, string[] parameters, object[] values)
        {
            PopulateDictionaries();
            /*
            string ret = "[";
            if (procedureName.Equals("showSpecificCut"))
            {
                foreach(string key in ForSale.Keys)
                {
                    
                }
                return GetNoResult();
            }
            else if (procedureName.Equals("checkCredentials"))
            {
                return GetNoResult();
            }
            else if (procedureName.Equals("registerAccount"))
            {
                return GetNoResult();
            }
            */
            //ret += "]";
            //return GetNoResult();
            this.sqlHandler = new SqlHandler(procedureName, parameters, values);
            //showSpecificCut... @type... sirloin
            DataTable queryReturn = sqlHandler.Execute();
            return this.resultParser.GetResultString(queryReturn);
        }

        private void PopulateDictionaries()
        {
            this.AccountData.Add("alice", "alice");
            this.AccountData.Add("bob", "bob");
            this.AccountData.Add("chuck", "chuck");
            this.AccountData.Add("dan", "dan");

            this.AccountTypes.Add("alice", "buyer");
            this.AccountTypes.Add("bob", "farmer");
            this.AccountTypes.Add("chuck", "buyer");
            this.AccountTypes.Add("dan", "farmer");

            this.ForSale.Add("Top Sirloin", "bob");
            this.ForSale.Add("Brisket", "bob");
            this.ForSale.Add("Short Loin", "bob");
            this.ForSale.Add("Tenderloin", "bob");
            this.ForSale.Add("Bottom Sirloin", "dan");
            this.ForSale.Add("Chuck", "dan");
            this.ForSale.Add("Plate", "dan");
            this.ForSale.Add("Round", "dan");
            this.ForSale.Add("Shank", "dan");
        }

        public string GetNoResult()
        {
            var ret = "[" +
                    "{ Query: '...', Table: '...', Shown: '...', Here: '...'}," +
                   "]";
            return ret;

        }

       
    }
}