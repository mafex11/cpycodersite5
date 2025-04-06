import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 3 }).map(
  (_, i, a) => `v0.0.${a.length - i}`
)

export function Version() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border text-white">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Version</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
