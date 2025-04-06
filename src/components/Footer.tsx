import { Github, Twitter, Mail, Heart, Contact, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t text-black">
      <div className=" flex flex-col md:flex-row justify-center items-center py-6 gap-4 mx-auto px-20">
        

        {/* Middle section - Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/mafex11" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              github.com/mafex11
            </a>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <a href="https://twitter.com/mafexuwu" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 mr-2" />
              @mafexuwu
            </a>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:sudhanshuk1140@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
          </Button>
          
        </div>

        {/* Right section - License */}
        
      </div>
    </footer>
  );
}