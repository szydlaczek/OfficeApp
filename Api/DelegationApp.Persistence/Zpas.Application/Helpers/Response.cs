using System.Collections.Generic;
using System.Collections.ObjectModel;
using Zpas.Application.Exceptions;

namespace Zpas.Application.Helpers
{
    public class Response
    {
        public ErrorItem Error { get; }

        
        public object Result { get; }

        public Response() {}

        public Response(object result) 
        {
            if (result is ErrorItem)
                Error = (ErrorItem)result;
            else
                Result = result;
        }

        
    }

    public class ErrorItem
    {
        public ErrorCodesEnum Code { get; set; }
        public string Description { get; set; }
    }
}