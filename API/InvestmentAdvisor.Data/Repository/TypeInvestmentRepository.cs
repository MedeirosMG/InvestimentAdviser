using InvestmentAdvisor.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvestmentAdvisor.Data.Repository
{
    public class TypeInvestmentRepository
    {
        private DatabaseEntities _ctx;

        public TypeInvestmentRepository(DatabaseEntities ctx)
        {
            _ctx = ctx;
        }

        public TypeInvestmentRepository()
        {
            _ctx = new DatabaseEntities();
        }

        public List<TypeInvestment> Get()
        {
            return _ctx.TypeInvestmentSet.ToList();
        }

        public TypeInvestment Get(int idTypeInvestment)
        {
            return _ctx.TypeInvestmentSet.FirstOrDefault(typeInvest => typeInvest.IdTypeInvestment == idTypeInvestment);
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
