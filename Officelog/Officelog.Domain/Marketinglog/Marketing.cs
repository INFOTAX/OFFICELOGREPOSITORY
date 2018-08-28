using System;
using System.Collections.Generic;
using System.Text;

namespace Officelog.Domain.Marketinglog
{
    public class Marketing
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ContactNumber { get; set; }
        public bool ServiceInterested { get; set; }
        public bool SoftwareInterested { get; set; }
        public ConversionStatus ConversionStatus { get; set; }
        public string RateUs { get; set; }
        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
        public string ServiceType { get; set; }
        public double Rate { get; set; }
        public string  Area { get; set; }
        public bool IsActive { get; set; }

        public Marketing()
        {
            
        }
        public Marketing(string name,int contactNumber,bool serviceInterested,bool softwareInterested,
                        ConversionStatus conversionStatus,string rateUs,string suggestionForYes,string suggestionForNo,
                        string serviceType,double rate,string area)
        {
            Name = name;
            ContactNumber = contactNumber;
            ServiceInterested = serviceInterested;
            SoftwareInterested = softwareInterested;
            ConversionStatus = conversionStatus;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            ServiceType = serviceType;
            Rate = rate;
            Area = area;
            IsActive = true;

        }

        public void Modify(string name,int contactNumber,bool serviceInterested,bool softwareInterested,
                        ConversionStatus conversionStatus,string rateUs,string suggestionForYes,string suggestionForNo,
                        string serviceType,double rate,string area)
         {
             Name = name;
            ContactNumber = contactNumber;
            ServiceInterested = serviceInterested;
            SoftwareInterested = softwareInterested;
            ConversionStatus = conversionStatus;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            ServiceType = serviceType;
            Rate = rate;
            Area = area;
            IsActive = true;
         }

         public void Delete()
         {
             IsActive = false;
         }
    }

    public enum ConversionStatus{
        Achieved = 1,
        NotAchieved = 2

    }
}
