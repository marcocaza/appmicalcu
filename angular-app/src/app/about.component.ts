import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Product Wish List</h2>
        <p>
          This project was created to help represent a fundamental app written
          with Angular. The shopping theme is used throughout the app.
        </p>
        <br />
        <h2 class="title">Resources</h2>
        <ul>
          <li>
            <iframe width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=30c12151-8910-45b0-8814-f77e3fa05655&autoAuth=true&ctid=d394dfea-16f8-40e0-9e3d-491c68096f33&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>
              Code in GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class AboutComponent {}
