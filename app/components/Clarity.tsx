"use client";

import Script from "next/script";

export default function Clarity() {
    return (
        <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "vaaq2e3mai"); 
            `}
        </Script>
    );
}
// Note: "q7p4m8n9k2" is a PLACEHOLDER. You must replace it with your actual Project ID from clarity.microsoft.com.
