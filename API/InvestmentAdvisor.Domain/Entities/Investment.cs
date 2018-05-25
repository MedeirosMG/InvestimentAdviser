using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Domain.Entities
{
    public class Investment
    {
        public int IdInvestment { get; set; }

        public string Name { get; set; }

        public string Link { get; set; }

        public int IdRiskAvailability { get; set; }

        public double PercentReturn { get; set; }

        public System.DateTime Details { get; set; }

        public int IdTypeInvestment { get; set; }


        public virtual RiskAvailability RiskAvailability { get; set; }

        public virtual TypeInvestment TypeInvestment { get; set; }
    }
}
