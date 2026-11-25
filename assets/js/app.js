
(function(){
  const d = window.WANDO_SITE || {};
  const page = document.body.dataset.page || "";
  const nav = [
    ["index.html","Home","home"],
    ["standards.html","Standards","standards"],
    ["updates.html","Meetings & Notices","updates"],
    ["documents.html","Documents","documents"],
    ["resources.html","Resources","resources"],
    ["compliance.html","Community Care","compliance"]
  ];
  const shell = `<img src="assets/images/shell.svg" alt="">`;
  const header = document.getElementById("siteHeader");
  if(header){
    header.className="site-header";
    header.innerHTML=`<div class="container nav">
      <a class="brand" href="index.html"><span class="brand-mark">${shell}</span><span class="brand-copy"><strong>The Reserve at Wando East</strong><small>Community Association</small></span></a>
      <button class="menu-btn" aria-expanded="false" aria-controls="primaryNav">Menu</button>
      <nav id="primaryNav" class="nav-links" aria-label="Primary">
        ${nav.map(n=>`<a href="${n[0]}" class="${page===n[2]?'active':''}">${n[1]}</a>`).join("")}
        <a class="portal-btn" href="${d.portalUrl||'#'}" target="_blank" rel="noopener">CMG Portal ↗</a>
      </nav>
    </div>`;
    const btn=header.querySelector(".menu-btn"), links=header.querySelector(".nav-links");
    btn.addEventListener("click",()=>{const open=links.classList.toggle("open");btn.setAttribute("aria-expanded",open)});
  }
  const footer=document.getElementById("siteFooter");
  if(footer){
    footer.innerHTML=`<div class="footer-art" aria-hidden="true"></div><div class="footer-main"><div class="container">
      <div class="footer-grid">
        <div><h3>${d.communityName||"The Reserve at Wando East"}</h3>
          <p>A stable public resource for community standards, documents and useful homeowner information.</p>
        </div>
        <div><h3>Resident Access</h3>
          <p><a href="${d.portalUrl||'#'}" target="_blank" rel="noopener">CMG Homeowner Portal ↗</a><br>
          <a href="updates.html">Meetings & Notices</a><br><a href="documents.html">Governing Documents</a><br><a href="standards.html">Community Standards</a></p>
        </div>
        <div><h3>Community Help</h3>
          <p><a href="resources.html">Important Local Numbers</a><br><a href="resources.html#management">Management & Board</a><br>
          <a href="compliance.html">Report a Community Concern</a></p>
        </div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${d.communityName||""}. Public community reference site.</span><a class="powered" href="https://franklynsolutions.com/">Powered by Franklyn Solutions</a></div>
    </div></div>`;
  }
})();
