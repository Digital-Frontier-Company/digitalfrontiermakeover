
import React, { useEffect } from "react";
import MainNavigation from "../navigation/MainNavigation";
import Footer from "./Footer";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    // Load HubSpot tracking script if configured
    const hubspotId = localStorage.getItem('hubspot_id');
    const enableTracking = localStorage.getItem('hubspot_enable_tracking') === 'true';
    
    if (hubspotId && enableTracking) {
      const script = document.createElement('script');
      script.src = `//js.hs-scripts.com/${hubspotId}.js`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(`script[src*="${hubspotId}"]`);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <MainNavigation />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
