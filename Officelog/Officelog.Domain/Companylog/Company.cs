using System;
using System.Collections.Generic;
using System.Text;

namespace Officelog.Domain.Companylog
{
    public class Company
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string QueryHandling { get; set; }
        public string ServiceProvided { get; set; }

        public string VisitorType {get; set;}

        public bool SoftwareInterested { get; set; }
        public string RateUs { get; set; }

        public string SuggestionForYes { get; set; }
        public string SuggestionForNo { get; set; }
        public DateTime Date { get; set; }

        public bool IsActive { get; set; }

        
        public Company()
        {
            
        }

        public Company(string name, string contactNumber, string queryHandling,
                        string serviceProvided, string visitorType,
                        bool softwareInterested, string rateUs, string suggestionForYes,
                        string suggestionForNo,DateTime date )
        {
            Name = name;
            ContactNumber = contactNumber;
            QueryHandling = queryHandling;
            ServiceProvided = serviceProvided;
            VisitorType = visitorType;
            SoftwareInterested = softwareInterested;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            Date = date;
            IsActive = true;
        }

            public void Modify(string name, string contactNumber, string queryHandling,
                        string serviceProvided, string visitorType,
                        bool softwareInterested, string rateUs, string suggestionForYes,
                        string suggestionForNo )
        {
            Name = name;
            ContactNumber = contactNumber;
            QueryHandling = queryHandling;
            ServiceProvided = serviceProvided;
            VisitorType = visitorType;
            SoftwareInterested = softwareInterested;
            RateUs = rateUs;
            SuggestionForYes = suggestionForYes;
            SuggestionForNo = suggestionForNo;
            IsActive = true;
        }

           public void Delete()
        {
            IsActive = false;
        }
    }

     
    



}
