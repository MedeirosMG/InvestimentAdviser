using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Domain.Entities
{
    public class HistoricInvestment
    {
        public int IdHistoricInvestment { get; set; }

        public int IdUser { get; set; }

        public int IdInvestment { get; set; }

        public decimal ValueInvested { get; set; }

        public System.DateTime Date { get; set; }


        public virtual Investment Investment { get; set; }

        public virtual User User { get; set; }
    }
}
