import { Check, X, Copy, Folder, FileText, Cpu, Terminal } from "lucide-react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Features() {
  const features = [
    {
      icon: <Check className="w-6 h-6 text-green-500" />,
      title: "Copies important folders",
      description: "Only src, lib, utils, ui, app directories are copied",
      badges: ["src", "lib", "utils", "ui", "app"]
    },
    {
      icon: <X className="w-6 h-6 text-red-500" />,
      title: "Skips noise",
      description: "Ignores unnecessary files and directories",
      badges: ["node_modules", ".git", "package.json", ".env"]
    },
    {
      icon: <Folder className="w-6 h-6 text-blue-500" />,
      title: "Preserves structure",
      description: "Maintains original directory hierarchy for clarity",
      badges: ["directory tree"]
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: "AI-ready",
      description: "Clean structure optimized for LLM context windows",
      badges: ["minimal", "focused"]
    },
    {
      icon: <Terminal className="w-6 h-6 text-amber-500" />,
      title: "Terminal output",
      description: "Lists all copied files in your terminal",
      badges: ["verbose", "detailed"]
    },
    {
      icon: <VscVscodeInsiders className="w-6 h-6 text-blue-400" />,
      title: "VS Code integration",
      description: "Shows copied files in a VS Code popup",
      badges: ["extension", "notification"]
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  ">
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow  text-black">
          <CardHeader className="flex flex-row items-center gap-4 items-start">
            <div className="p-2 rounded-full bg-secondary mt-1">
              {feature.icon}
            </div>
            <div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 ">
              {feature.badges.map((badge, i) => (
                <Badge key={i} variant="outline" className="text-xs text-black">
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}