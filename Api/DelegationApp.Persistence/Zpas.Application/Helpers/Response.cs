using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using Zpas.Application.Exceptions;

namespace Zpas.Application.Helpers
{
    public class Response
    {
        private readonly IList<ErrorItem> _messages = new List<ErrorItem>();

        public IEnumerable<ErrorItem> Errors { get; }
        public object Result { get; }

        public Response() => Errors = new ReadOnlyCollection<ErrorItem>(_messages);

        public Response(object result) : this()
        {
            Result = result;
        }

        public Response AddError(ErrorItem errorItem)
        {
            _messages.Add(errorItem);
            return this;
        }

    }
    public class ErrorItem
    {
        public ErrorCodesEnum Code { get; set; }
        public string Description { get; set; }
    }
}
