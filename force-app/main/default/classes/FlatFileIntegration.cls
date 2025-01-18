public with sharing class FlatFileIntegration {
  public FlatFileIntegration() {
  }

  public void triggerIntegration() {
    FTPRequestWrapper ftp = new FTPRequestWrapper();
    ftp.path = '/';
    ftp.fileName = 'hello.txt';
    ftp.body = EncodingUtil.base64Encode(Blob.valueOf('Hello Testing'));

    String jsonPayload = '[' + JSON.serialize(ftp) + ']';
    HttpRequest req = new HttpRequest();
    req.setEndpoint('callout:FlatFileNamedCredential');
    req.setMethod('POST');
    req.setBody(jsonPayload);
    Http http = new Http();
    HTTPResponse response = http.send(req);

    System.debug('###Response: ' + response.getBody());
  }
  public class FTPRequestWrapper {
    public String path;
    public String fileName;
    public String body;
  }
}
