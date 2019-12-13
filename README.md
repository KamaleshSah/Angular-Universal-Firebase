<div >
  <h1 >Angular Universal Firebase</h1>
  
  <p >
    Check out the live <a href="https://angularuniversalproapps.firebaseapp.com/">demo</a>.
  </p>
 
<h2 >About Angular Universal</h2> 
<p> Angular Universal, a technology that renders Angular applications on the server</p>

<h2 >Angular Application vs Angular Universal Application</h2> 
<p> A normal Angular application executes in the browser, rendering pages in the DOM in response to user actions. Angular Universal executes on the server, generating static application pages that later get bootstrapped on the client. </p>


 <h2 >How to Use</h2> 

<p>Git Clone or Download this repository</p>

<p>npm install </p>

<p>cd functions</p>

<p>npm install</p>

<b>Back to root folder, then test with firebase serve command</b>

<p>ng build --prod</p>

<p>ng run PROJECT_NAME:server   because this project name is angular-universal-firebase, you need type following command</p>

<p>ng run angular-universal-firebase:server</p>


<p>This create two folder inside functions dist folder  browser and server</p>

<p> Copy all content from browser folder and paste it inside public folder,which we need to create under root folder </p>

<p> Remane index.html to index2.html  </p>

<p> firebase serve  </p>
</div>

