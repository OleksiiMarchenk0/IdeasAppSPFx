import {
    SPHttpClient,
    SPHttpClientResponse
  } from '@microsoft/sp-http';
  


export class SharePointService {

    private context: any; // Adjust the type of context according to your SharePoint context

    constructor( context: any) {
        this.context = context;
    }
    public _getCategoryItems(): Promise<any[]> {
        const url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getByTitle('Categories')/items`;
        return this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)
          .then(async (response: SPHttpClientResponse) => {
            if (response.ok) {
              const data = await response.json();
            return data.value;
            } else {
              console.error(`Failed to fetch items from Category list. Error: ${response.statusText}`);
              return [];
            }
          })
          .catch((error:Error) => {
            console.error('Error fetching items from Category list:', error);
            return [];
          });
      }
}

