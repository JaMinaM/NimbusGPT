
console.log("NimbusGPT content script is running");

// Create the sidebar element
const sidebar = document.createElement('div');
sidebar.id = 'nimbus-sidebar';
sidebar.style.position = 'fixed';
sidebar.style.top = '0';
sidebar.style.right = '0';
sidebar.style.width = '300px';
sidebar.style.height = '100%';
sidebar.style.backgroundColor = '#ffffff';
sidebar.style.borderLeft = '1px solid #ccc';
sidebar.style.zIndex = '1000';
sidebar.style.padding = '10px';
sidebar.style.boxShadow = '-2px 0 5px rgba(0,0,0,0.1)';
sidebar.style.overflowY = 'auto';
sidebar.innerHTML = `
  <h2>NimbusGPT</h2>
`;

// Append the sidebar to the body of the page
document.body.appendChild(sidebar);
