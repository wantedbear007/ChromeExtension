// window.location.hostname is the webpage you are on.

// if (window.location.hostname === "www.youtube.com") {
//     alert('you are on youtube');
// }

// We are using `` so that we cna insert more and more html inside it.
const generateHTML = (pageName) => {
  return `
    <h1 class="main-title">Error 404</h1>
    <p class="paragraph">You are trying to access ${pageName} which is not  permitted.</p>
    `;
};

const styling = () => {
    return `
    <style>
    .main-title {
        font-size: 5rem;
        color: Red;
    }
    
    .paragraph {
        font-size: 3rem;
        color: red;
    }
    </style>
    `
}


switch (window.location.hostname) {
  case "www.youtube.com":
    document.body.innerHTML = generateHTML("Youtube");
    document.head.innerHTML = styling();
    break;
  case "www.facebook.com":
    // alert('you are on stealbook');
    document.body.innerHTML = generateHTML("Facebook");
    document.head.innerHTML = styling();
    break;
  case "www.reddit.com":
    document.body.innerHTML = generateHTML("Reddit");
    document.head.innerHTML = styling();
    // alert("you are on internet's first page");
    break;
}
