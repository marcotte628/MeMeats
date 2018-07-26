
using System.Data;
using System.Data.SqlClient;

namespace MeMeats.Models.QueryHandler
{
    public class SqlHandler
    {
        private string CONNECTION_STRING = "Server=M799748-W10;Database=TestDatabase;User Id=webappuser;Password=8kvjSpfvNpruZ9DespqC;";
        private SqlCommand command;

        public SqlHandler(string data)
        {
            SqlConnection conn = new SqlConnection();
            conn.ConnectionString = this.CONNECTION_STRING;
            conn.Open();
            this.command = new SqlCommand(data, conn);
        }
        public SqlHandler(string procedureName, string[] parameters, object[] values) {
            SqlConnection conn = new SqlConnection();
            conn.ConnectionString = this.CONNECTION_STRING;
            conn.Open();
            this.command = new SqlCommand(procedureName, conn);
            command.CommandType = CommandType.StoredProcedure;
            for (int i = 0; i < parameters.Length; i++)
            {
                // if values[i] instanceof string[]... build table for parameter
                if (values[i].GetType().Name == "String[]")
                {
                    command.Parameters.Add(new SqlParameter(parameters[i], CreateParameterTable((string[])values[i])));
                }
                else
                {
                    command.Parameters.Add(new SqlParameter(parameters[i], values[i]));
                }
            }
        }

        public DataTable CreateParameterTable(string[] words)
        {
            DataTable table = new DataTable();
            DataColumn column = new DataColumn();
            column.DataType = System.Type.GetType("System.String");
            column.ColumnName = "Word";
            column.AutoIncrement = false;
            column.Caption = "Word";
            column.ReadOnly = false;
            column.Unique = false;
            table.Columns.Add(column);
            DataRow row;
            foreach (string word in words)
            {
                row = table.NewRow();
                row["Word"] = word;
                table.Rows.Add(row);
            }
            return table;
        }

         public DataTable CreateErrorTable(string err)
        {
            // table
            DataTable table = new DataTable();
            DataColumn column = new DataColumn();
            column.DataType = System.Type.GetType("System.String");
            // column
            column.ColumnName = "Error";
            column.AutoIncrement = false;
            column.Caption = "Error";
            column.ReadOnly = false;
            column.Unique = false;
            table.Columns.Add(column);
            // row
            DataRow row;
            row = table.NewRow();
            row["Error"] = err;
            table.Rows.Add(row);
            return table;
        }

        public DataTable Execute()
        {
            try
            {
                DataTable dataTable = new DataTable();
                var dataReader = this.command.ExecuteReader();
                dataTable.Load(dataReader);
                return dataTable;

            } catch(System.Exception e)
            {
                return CreateErrorTable(e.ToString());
            }
            
        }

    }
}