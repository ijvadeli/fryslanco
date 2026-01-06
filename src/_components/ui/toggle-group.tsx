import { ArrowBigUpDash, MessageSquareShare } from 'lucide-react';

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ToggleGroupSpacing() {
  return (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
      >
        <ArrowBigUpDash />
        Vote
      </ToggleGroupItem>
      <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-white data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <MessageSquareShare />
        Share
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
