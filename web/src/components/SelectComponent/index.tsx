import * as Select from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";

interface GameProps {
  id: string;
  title: string;
}

interface GameData {
  data: GameProps[];
}

export function SelectComponent({ data }: GameData) {
  return (
    <Select.Portal className="bg-zinc-900 py-3 px-4 rounded text-sm">
      <Select.Content>
        <Select.Viewport>
          <Select.Group>
            {data.map((game) => {
              return (
                <Select.Item
                  key={game.id}
                  value={game.id}
                  className="text-zinc-500 flex items-center flex-row justify-between hover:bg-violet-500 p-1 hover:text-white"
                >
                  <Select.ItemText className="text-zinc-500 ">
                    {game.title}
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <CaretDown className="w-4 h-4 text-white" />
                  </Select.ItemIndicator>
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  );
}
