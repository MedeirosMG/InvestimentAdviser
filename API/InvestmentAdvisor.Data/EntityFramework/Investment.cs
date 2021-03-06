//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InvestmentAdvisor.Data.EntityFramework
{
    using System;
    using System.Collections.Generic;
    
    public partial class Investment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Investment()
        {
            this.HistoricInvestment = new HashSet<HistoricInvestment>();
        }
    
        public int IdInvestment { get; set; }
        public string Name { get; set; }
        public int IdTypeInvestment { get; set; }
        public string Link { get; set; }
        public int IdRiskAvailability { get; set; }
        public double PercentReturn { get; set; }
        public string Details { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HistoricInvestment> HistoricInvestment { get; set; }
        public virtual RiskAvailability RiskAvailability { get; set; }
        public virtual TypeInvestment TypeInvestment { get; set; }
    }
}
