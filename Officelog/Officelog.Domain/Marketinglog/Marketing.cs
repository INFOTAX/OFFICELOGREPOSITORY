using System;
using System.Collections.Generic;
using System.Text;

namespace Officelog.Domain.Marketinglog
{
    public class Marketing
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public bool ServiceInterested { get; set; }
        public bool SoftwareInterested { get; set; }
        public ConversionStatus ConversionStatus { get; set; }
        public string RateUs { get; set; }
        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
        public string  Area { get; set; }
        public bool IsActive { get; set; }
        public DateTime Date { get; set; }
        public double Price { get; set; }
        public string CurrentScenario { get; set; }
        public string RateUsForNo { get; set; }
        public ICollection<ServiceItem> ServiceItems { get; set; }
        public Marketing()
        {
            ServiceItems = new List<ServiceItem>();
            
        }
        public Marketing(string name,string contactNumber,bool serviceInterested,bool softwareInterested,
                        ConversionStatus conversionStatus,string rateUs,string suggestionForYes,string suggestionForNo,
                        string area,DateTime date,double price,string currentScenario,string rateUsForNo,List<ServiceItem> serviceItems)
        {
            Name = name;
            ContactNumber = contactNumber;
            ServiceInterested = serviceInterested;
            SoftwareInterested = softwareInterested;
            ConversionStatus = conversionStatus;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            Area = area;
            Date = date;
            Price = price;
            CurrentScenario = currentScenario;
            RateUsForNo = rateUsForNo;
            ServiceItems = serviceItems;
            IsActive = true;

        }

        public void Modify(string name,string contactNumber,bool serviceInterested,bool softwareInterested,
                        ConversionStatus conversionStatus,string rateUs,string suggestionForYes,string suggestionForNo,
                        string area,double price,string currentScenario,string rateUsForNo,List<ServiceItem> serviceItems)
         {
             Name = name;
            ContactNumber = contactNumber;
            ServiceInterested = serviceInterested;
            SoftwareInterested = softwareInterested;
            ConversionStatus = conversionStatus;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            Area = area;
            Price = price;
            CurrentScenario = currentScenario;
            RateUsForNo = rateUsForNo;
            ServiceItems = serviceItems;
            IsActive = true;
         }

         public void Delete()
         {
             IsActive = false;
         }

         public void Converted()
         {
             ConversionStatus = ConversionStatus.Achieved;
         }
    }
    public enum ConversionStatus{
        Achieved = 1,
        NotAchieved = 2

    }
}
