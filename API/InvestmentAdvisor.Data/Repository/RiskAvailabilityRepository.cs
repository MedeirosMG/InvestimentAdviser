using InvestmentAdvisor.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Data.Repository
{
    public class RiskAvailabilityRepository
    {
        private DatabaseEntities _ctx;

        public RiskAvailabilityRepository(DatabaseEntities ctx)
        {
            _ctx = ctx;
        }

        public RiskAvailabilityRepository()
        {
            _ctx = new DatabaseEntities();
        }

        public List<RiskAvailability> Get()
        {
            return _ctx.RiskAvailabilitySet.ToList();
        }

        public RiskAvailability Get(int idRiskAvailability)
        {
            return _ctx.RiskAvailabilitySet.FirstOrDefault(risk => risk.IdRiskAvailability == idRiskAvailability);
        }

        public void SaveChanges()
        {
            _ctx.SaveChanges();
        }

        public void Dispose()
        {
            if (_ctx != null)
                _ctx = null;
        }
    }
}
