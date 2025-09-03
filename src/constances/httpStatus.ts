export const HTTP_STATUS = {
  StatusContinue: 100, // RFC 7231, 6.2.1
  StatusSwitchingProtocols: 101, // RFC 7231, 6.2.2
  StatusProcessing: 102, // RFC 2518, 10.1

  StatusOK: 200, // RFC 7231, 6.3.1
  StatusCreated: 201, // RFC 7231, 6.3.2
  StatusAccepted: 202, // RFC 7231, 6.3.3
  StatusNonAuthoritativeInfo: 203, // RFC 7231, 6.3.4
  StatusNoContent: 204, // RFC 7231, 6.3.5
  StatusResetContent: 205, // RFC 7231, 6.3.6
  StatusPartialContent: 206, // RFC 7233, 4.1
  StatusMultiStatus: 207, // RFC 4918, 11.1
  StatusAlreadyReported: 208, // RFC 5842, 7.1
  StatusIMUsed: 226, // RFC 3229, 10.4.1

  StatusMultipleChoices: 300, // RFC 7231, 6.4.1
  StatusMovedPermanently: 301, // RFC 7231, 6.4.2
  StatusFound: 302, // RFC 7231, 6.4.3
  StatusSeeOther: 303, // RFC 7231, 6.4.4
  StatusNotModified: 304, // RFC 7232, 4.1
  StatusUseProxy: 305, // RFC 7231, 6.4.5
  _: 306, // RFC 7231, 6.4.6 (Unused)
  StatusTemporaryRedirect: 307, // RFC 7231, 6.4.7
  StatusPermanentRedirect: 308, // RFC 7538, 3

  StatusBadRequest: 400, // RFC 7231, 6.5.1
  StatusUnauthorized: 401, // RFC 7235, 3.1
  StatusPaymentRequired: 402, // RFC 7231, 6.5.2
  StatusForbidden: 403, // RFC 7231, 6.5.3
  StatusNotFound: 404, // RFC 7231, 6.5.4
  StatusMethodNotAllowed: 405, // RFC 7231, 6.5.5
  StatusNotAcceptable: 406, // RFC 7231, 6.5.6
  StatusProxyAuthRequired: 407, // RFC 7235, 3.2
  StatusRequestTimeout: 408, // RFC 7231, 6.5.7
  StatusConflict: 409, // RFC 7231, 6.5.8
  StatusGone: 410, // RFC 7231, 6.5.9
  StatusLengthRequired: 411, // RFC 7231, 6.5.10
  StatusPreconditionFailed: 412, // RFC 7232, 4.2
  StatusRequestEntityTooLarge: 413, // RFC 7231, 6.5.11
  StatusRequestURITooLong: 414, // RFC 7231, 6.5.12
  StatusUnsupportedMediaType: 415, // RFC 7231, 6.5.13
  StatusRequestedRangeNotSatisfiable: 416, // RFC 7233, 4.4
  StatusExpectationFailed: 417, // RFC 7231, 6.5.14
  StatusTeapot: 418, // RFC 7168, 2.3.3
  StatusUnprocessableEntity: 422, // RFC 4918, 11.2
  StatusLocked: 423, // RFC 4918, 11.3
  StatusFailedDependency: 424, // RFC 4918, 11.4
  StatusUpgradeRequired: 426, // RFC 7231, 6.5.15
  StatusPreconditionRequired: 428, // RFC 6585, 3
  StatusTooManyRequests: 429, // RFC 6585, 4
  StatusRequestHeaderFieldsTooLarge: 431, // RFC 6585, 5
  StatusUnavailableForLegalReasons: 451, // RFC 7725, 3

  StatusInternalServerError: 500, // RFC 7231, 6.6.1
  StatusNotImplemented: 501, // RFC 7231, 6.6.2
  StatusBadGateway: 502, // RFC 7231, 6.6.3
  StatusServiceUnavailable: 503, // RFC 7231, 6.6.4
  StatusGatewayTimeout: 504, // RFC 7231, 6.6.5
  StatusHTTPVersionNotSupported: 505, // RFC 7231, 6.6.6
  StatusVariantAlsoNegotiates: 506, // RFC 2295, 8.1
  StatusInsufficientStorage: 507, // RFC 4918, 11.5
  StatusLoopDetected: 508, // RFC 5842, 7.2
  StatusNotExtended: 510, // RFC 2774, 7
  StatusNetworkAuthenticationRequired: 511, // RFC 6585, 6
};

export const HTTP_STATUS_MESSAGES: Record<number, string> = {
  [HTTP_STATUS.StatusContinue]: "Continue",
  [HTTP_STATUS.StatusSwitchingProtocols]: "Switching Protocols",
  [HTTP_STATUS.StatusProcessing]: "Processing",

  [HTTP_STATUS.StatusOK]: "OK",
  [HTTP_STATUS.StatusCreated]: "Created",
  [HTTP_STATUS.StatusAccepted]: "Accepted",
  [HTTP_STATUS.StatusNonAuthoritativeInfo]: "Non-Authoritative Information",
  [HTTP_STATUS.StatusNoContent]: "No Content",
  [HTTP_STATUS.StatusResetContent]: "Reset Content",
  [HTTP_STATUS.StatusPartialContent]: "Partial Content",
  [HTTP_STATUS.StatusMultiStatus]: "Multi-Status",
  [HTTP_STATUS.StatusAlreadyReported]: "Already Reported",
  [HTTP_STATUS.StatusIMUsed]: "IM Used",

  [HTTP_STATUS.StatusMultipleChoices]: "Multiple Choices",
  [HTTP_STATUS.StatusMovedPermanently]: "Moved Permanently",
  [HTTP_STATUS.StatusFound]: "Found",
  [HTTP_STATUS.StatusSeeOther]: "See Other",
  [HTTP_STATUS.StatusNotModified]: "Not Modified",
  [HTTP_STATUS.StatusUseProxy]: "Use Proxy",
  [HTTP_STATUS._]: "Unused",
  [HTTP_STATUS.StatusTemporaryRedirect]: "Temporary Redirect",
  [HTTP_STATUS.StatusPermanentRedirect]: "Permanent Redirect",

  [HTTP_STATUS.StatusBadRequest]: "Bad Request",
  [HTTP_STATUS.StatusUnauthorized]: "Unauthorized",
  [HTTP_STATUS.StatusPaymentRequired]: "Payment Required",
  [HTTP_STATUS.StatusForbidden]: "Forbidden",
  [HTTP_STATUS.StatusNotFound]: "Not Found",
  [HTTP_STATUS.StatusMethodNotAllowed]: "Method Not Allowed",
  [HTTP_STATUS.StatusNotAcceptable]: "Not Acceptable",
  [HTTP_STATUS.StatusProxyAuthRequired]: "Proxy Authentication Required",
  [HTTP_STATUS.StatusRequestTimeout]: "Request Timeout",
  [HTTP_STATUS.StatusConflict]: "Conflict",
  [HTTP_STATUS.StatusGone]: "Gone",
  [HTTP_STATUS.StatusLengthRequired]: "Length Required",
  [HTTP_STATUS.StatusPreconditionFailed]: "Precondition Failed",
  [HTTP_STATUS.StatusRequestEntityTooLarge]: "Payload Too Large",
  [HTTP_STATUS.StatusRequestURITooLong]: "URI Too Long",
  [HTTP_STATUS.StatusUnsupportedMediaType]: "Unsupported Media Type",
  [HTTP_STATUS.StatusRequestedRangeNotSatisfiable]:
    "Requested Range Not Satisfiable",
  [HTTP_STATUS.StatusExpectationFailed]: "Expectation Failed",
  [HTTP_STATUS.StatusTeapot]: "I'm a Teapot", // RFC 7168
  [HTTP_STATUS.StatusUnprocessableEntity]: "Unprocessable Entity",
  [HTTP_STATUS.StatusLocked]: "Locked",
  [HTTP_STATUS.StatusFailedDependency]: "Failed Dependency",
  [HTTP_STATUS.StatusUpgradeRequired]: "Upgrade Required",
  [HTTP_STATUS.StatusPreconditionRequired]: "Precondition Required",
  [HTTP_STATUS.StatusTooManyRequests]: "Too Many Requests",
  [HTTP_STATUS.StatusRequestHeaderFieldsTooLarge]:
    "Request Header Fields Too Large",
  [HTTP_STATUS.StatusUnavailableForLegalReasons]:
    "Unavailable For Legal Reasons",

  [HTTP_STATUS.StatusInternalServerError]: "Internal Server Error",
  [HTTP_STATUS.StatusNotImplemented]: "Not Implemented",
  [HTTP_STATUS.StatusBadGateway]: "Bad Gateway",
  [HTTP_STATUS.StatusServiceUnavailable]: "Service Unavailable",
  [HTTP_STATUS.StatusGatewayTimeout]: "Gateway Timeout",
  [HTTP_STATUS.StatusHTTPVersionNotSupported]: "HTTP Version Not Supported",
  [HTTP_STATUS.StatusVariantAlsoNegotiates]: "Variant Also Negotiates",
  [HTTP_STATUS.StatusInsufficientStorage]: "Insufficient Storage",
  [HTTP_STATUS.StatusLoopDetected]: "Loop Detected",
  [HTTP_STATUS.StatusNotExtended]: "Not Extended",
  [HTTP_STATUS.StatusNetworkAuthenticationRequired]:
    "Network Authentication Required",
};
