"use client";

import * as React from "react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropDown";

interface props {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  time: string;
  setTime: (time: string) => void;
}

export function DropdownMenuRadioGroupDemo({
  difficulty,
  setDifficulty,
  time,
  setTime,
}: props) {
  return (
    <div className="flex  justify-evenly items-center gap-5">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{difficulty}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={difficulty}
              onValueChange={setDifficulty}
            >
              <DropdownMenuRadioItem value="Easy">Easy</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Medium">
                Medium
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Hard">Hard</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{time} Minute</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={time} onValueChange={setTime}>
              <DropdownMenuRadioItem value={"1"}>
                1 Minute
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"2"}>
                2 Minute
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value={"5"}>
                5 Minute
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
