import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DigitalMarketingDropdown, ResourcesDropdown, CompanyDropdown } from "./NavigationDropdowns";
const MainNavigation = () => {
  return <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 rounded-none mx-[20px] my-[20px] px-[9px] py-[9px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/c5fced4b-35a7-421b-bdf8-12f09b2accdf.png" alt="Digital Frontier Company" className="h-8 w-auto" />
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400">Digital Marketing</NavigationMenuTrigger>
                <DigitalMarketingDropdown />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400">Resources</NavigationMenuTrigger>
                <ResourcesDropdown />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400">Company</NavigationMenuTrigger>
                <CompanyDropdown />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>;
};
export default MainNavigation;