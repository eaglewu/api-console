import { html } from 'lit-html';
import '@anypoint-web-components/anypoint-dropdown/anypoint-dropdown.js';
import '@anypoint-web-components/anypoint-listbox/anypoint-listbox.js';
import '@anypoint-web-components/anypoint-item/anypoint-item.js';
import '@anypoint-web-components/anypoint-styles/colors.js';
import '@anypoint-web-components/anypoint-styles/typography.js';
import '../../api-console-app.js';
import { DemoBase } from '../demo-base.js';

class ApicApplication extends DemoBase {
  constructor() {
    super();
    this.apis = [
      ['google-drive-api', 'Google Drive API'],
      ['httpbin', 'HTTPbin API'],
      ['exchange-experience-api', 'Exchange Experience API'],
      ['data-type-fragment', 'RAML data type fragment'],
      ['demo-api', 'Demo API']
    ];
  }

  demoTemplate() {
    return html`<api-console-app
      app
      redirecturi="https://auth.advancedrestclient.com/oauth-popup.html"
      oauth2clientid="821776164331-rserncqpdsq32lmbf5cfeolgcoujb6fm.apps.googleusercontent.com"
      compatibility>
      <anypoint-icon-button
        slot="toolbar"
        aria-label="Activate to open API selection menu"
        title="Open API selection menu"
        @click="${this.openApiSelector}">
        <iron-icon icon="arc:more-vert"></iron-icon>
      </anypoint-icon-button>
    </api-console-app>
    ${this.apiSelectorTemplate()}
    `;
  }

  firstRendered() {
    this.selectFirstApi();
  }
}

const demo = new ApicApplication();
demo.initialize();
demo.render();
window.demo = demo;
