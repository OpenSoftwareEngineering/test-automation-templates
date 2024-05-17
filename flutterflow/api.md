# Custom API Calls in FlutterFlow

## Issues

There is a bug in the UI, where it will either:

* not allow you to enter a name for the API Endpoint

and/or

* allow you to enter the URL, but erase it and then show error for missing URL

The solution so far was to reload the page and try again and again till it
worked. Sometimes closing the API page, and reopening it worked.

## Other Findings

When testing endpoints, FlutterFlow seems to make the call from different IP
addresses almost every time. This may cause issues if you, like me, are issuing
tokens specific to ip address, and then expect proceeding API calls using the
same token to be using the same ip address.

There seems to be no way to disable this behavior, so for now the only solution
seems to be to remove such checks in the API implementation
