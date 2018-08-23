using System.Collections.Generic;
using System.Data;

namespace MeMeats.Models.QueryHandler
{
    public class QueryResultBuilder
    {
        private ResultParser resultParser = new ResultParser();
        private SqlHandler sqlHandler;

        public string GetQueryResult(string procedureName, string[] parameters, object[] values)
        {
            this.sqlHandler = new SqlHandler(procedureName, parameters, values);
            DataTable queryReturn = sqlHandler.Execute();
            var ret = this.resultParser.GetResultString(queryReturn);
            return ret;
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