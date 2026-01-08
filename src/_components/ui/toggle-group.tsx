// import { ArrowBigUpDash, MessageSquareShare } from 'lucide-react';
import ArrowUp from "../svgs/arrowup";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ToggleGroupSpacingProps {
    value: string;
}

const ToggleGroupSpacing: React.FC<ToggleGroupSpacingProps> = ({value}) => {
  return (
    <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
      <ToggleGroupItem
        value="star"
        aria-label="Toggle star"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-black data-[state=on]:*:[svg]:stroke-black"
      >
        <ArrowUp />
        {value}
      </ToggleGroupItem>
      {/* <ToggleGroupItem
        value="heart"
        aria-label="Toggle heart"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-white data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <MessageSquareShare />
        Share
      </ToggleGroupItem> */}
    </ToggleGroup>
  );
}

export default ToggleGroupSpacing;